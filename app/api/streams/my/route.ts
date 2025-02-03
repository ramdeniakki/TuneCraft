import { authOptions } from "@/lib/auth-options";
import db from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET(){
    const session = await getServerSession(authOptions);
    if (!session?.user) {
        return NextResponse.json(
          {
            message: "Unauthenticated",
          },
          {
            status: 403,
          },
        );
    }

    const user = session.user;

    const streams = await db.stream.findMany({
        where: {
          userId: user.id,
        },
        include: {
          _count: {
            select: {
              upvotes: true,
            },
          },
          upvotes: {
            where: {
              userId: user.id,
            },
          },
        },
    });

    return NextResponse.json({
  
        streams: streams.map(({ _count, ...rest }: { _count: { upvotes: number }, upvotes: any[] }) => ({
          ...rest,
          upvotes: _count.upvotes,
          haveUpvoted: rest.upvotes.length ? true : false,
        })),
    });
}