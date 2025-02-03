import { authOptions } from "@/lib/auth-options";
import db from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session?.user.id) {
        return NextResponse.json(
            { message: "Unauthenticated" },
            { status: 403 }
        );
    }

    const user = session.user;
    const mostUpvotedStream = await db.stream.findFirst({
        where: {
            userId: user.id,
            played: false,
        },
        orderBy: {
            upvotes: { _count: "desc" },
        },
    });

    await Promise.all([
        db.currentStream.upsert({
            where: { userId: user.id }, // ✅ 'userId' is the primary key, so it's unique
            update: {
                streamId: mostUpvotedStream?.id ?? null,
            },
            create: {
                userId: user.id, // ✅ Required, as it's the primary key
                streamId: mostUpvotedStream?.id ?? null,
            },
        }),
        db.stream.update({
            where: { id: mostUpvotedStream?.id ?? "" },
            data: {
                played: true,
                playedTs: new Date(),
            },
        }),
    ]);

    return NextResponse.json({ stream: mostUpvotedStream });
}
