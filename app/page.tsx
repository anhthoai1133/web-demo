import React from 'react';
import Image from 'next/image';
import GameEmbed from "../components/GameEmbed";
import { Trophy, Gamepad2, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function GameDetail() {
  return (
    <div className="container py-8 space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-100 hover:bg-blue-500/30 transition-colors">
              Featured Game
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Retro Bowl</h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Experience the thrill of American football in this retro-style game
              that combines management and gameplay elements.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" variant="secondary" className="gap-2">
                Play Now <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative w-full md:w-1/3 aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/50 to-indigo-600/50 rounded-2xl">
              <Image 
                src="https://anhthoai1133.github.io/web-demo/game-preview.png"
                alt="Game Preview"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-2xl mix-blend-overlay"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-indigo-500/20" />
      </section>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Gamepad2 className="h-12 w-12 text-blue-500 mb-4" />
            <CardTitle>Intuitive Controls</CardTitle>
            <CardDescription>
              Simple yet engaging gameplay mechanics that anyone can pick up and enjoy.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Users className="h-12 w-12 text-blue-500 mb-4" />
            <CardTitle>Team Management</CardTitle>
            <CardDescription>
              Build and manage your dream team with in-depth player development systems.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Trophy className="h-12 w-12 text-blue-500 mb-4" />
            <CardTitle>Championship Mode</CardTitle>
            <CardDescription>
              Compete for glory and lead your team to victory in thrilling matches.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Game Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Game Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Genre</h4>
              <p className="font-medium">Sports, Strategy</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Release Date</h4>
              <p className="font-medium">2020</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Developer</h4>
              <p className="font-medium">New Star Games</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Rating</h4>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-current text-yellow-500" />
                <span className="font-medium">4.8/5</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Game Embed */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">Play Now</CardTitle>
          <Button variant="outline" size="lg">
            Fullscreen Mode
          </Button>
        </CardHeader>
        <CardContent>
          <GameEmbed />
        </CardContent>
      </Card>
    </div>
  );
} 