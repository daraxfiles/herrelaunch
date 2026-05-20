import React from "react";
import { Link } from "wouter";

export function Footer() {
  const Logo = () => (
    <div className="font-serif font-bold text-xl tracking-tight flex items-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
      <span className="text-secondary">Her</span>
      <span className="text-primary">Relaunch</span>
    </div>
  );

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center">
              <Logo />
            </Link>
            <p className="text-sm text-foreground/60 text-center md:text-left mt-2 max-w-xs">
              Free, online confidence workshops for women worldwide.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start text-sm text-foreground/70">
            <nav className="flex gap-6">
              <Link href="/approach" className="hover:text-primary transition-colors">Approach</Link>
              <Link href="/workshops" className="hover:text-primary transition-colors">Workshops</Link>
              <Link href="/community" className="hover:text-primary transition-colors">Community</Link>
              <Link href="/join" className="hover:text-primary transition-colors">Join</Link>
            </nav>
            <p className="text-foreground/50">
              &copy; {new Date().getFullYear()} HerRelaunch LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
