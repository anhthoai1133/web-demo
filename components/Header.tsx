import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center">
        <div className="flex items-center gap-6 flex-1">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-lg"
              priority
            />
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Retro Bowl
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/games" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Other Games
            </Link>
            <Link href="/support" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Support
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Play Now</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header; 