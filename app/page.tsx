import { Signinbutton } from '@/components/Signinbutton';
import { StartCreating } from '@/components/StartCreating';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { List, Music, Share2 } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-700 shadow-md">
        <h1 className="text-2xl font-extrabold text-purple-500">TuneCraft</h1>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" className="hover:text-purple-500">Create</Button>
          <Button variant="ghost" className="hover:text-purple-500">Share</Button>
          <Button variant="ghost" className="hover:text-purple-500">About</Button>
          <Signinbutton/>
        </nav>
      </header>
      <main className="flex-1 py-16 md:py-32 lg:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-purple-400">
              Create, Share, and Discover Music
            </h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-300">
              Compose your own songs and share your favorite playlists with the world.
              Unleash your creativity and connect with music lovers globally.
            </p>
            <div className="flex space-x-4">
              <StartCreating/>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition"
              >
                Explore Playlists
              </Button>
            </div>
          </div>
        </div>
      </main>
      <section className="w-full py-16 md:py-32 bg-gray-700">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-300">
            Key Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            <div className="flex flex-col items-center space-y-3 text-center">
              <Music className="h-14 w-14 text-yellow-400" />
              <h3 className="text-xl font-semibold">Song Creation</h3>
              <p className="text-gray-300">Compose and record your own unique songs.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 text-center">
              <List className="h-14 w-14 text-green-400" />
              <h3 className="text-xl font-semibold">Playlist Creation</h3>
              <p className="text-gray-300">Create and organize your favorite song lists.</p>
            </div>
            <div className="flex flex-col items-center space-y-3 text-center">
              <Share2 className="h-14 w-14 text-blue-400" />
              <h3 className="text-xl font-semibold">Easy Sharing</h3>
              <p className="text-gray-300">Share your music and playlists with friends.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-400">
              Ready to Make Your Mark in Music?
            </h2>
            <p className="mx-auto max-w-xl text-lg md:text-xl text-gray-300">
              Join TuneCraft today and start creating, sharing, and discovering amazing music.
            </p>
            <form className="flex w-full max-w-md space-x-3">
              <Input
                className="flex-1 bg-gray-800 border border-gray-600 text-gray-200 placeholder-gray-500 rounded-lg"
                placeholder="Enter your email"
                type="email"
              />
              <Button
                type="submit"
                className="bg-purple-600 text-white hover:bg-purple-700 transition rounded-lg"
              >
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="py-6 bg-gray-800 text-gray-400">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2024 Tunecraft. All rights reserved.</p>
          <nav className="flex gap-4">
            <a className="hover:text-purple-400 transition" href="#">Terms of Service</a>
            <a className="hover:text-purple-400 transition" href="#">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
