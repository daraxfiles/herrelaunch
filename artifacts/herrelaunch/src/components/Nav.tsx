import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const Logo = () => (
    <div className="font-serif font-bold text-2xl md:text-3xl tracking-tight flex items-center">
      <span className="text-secondary">Her</span>
      <span className="text-primary">Relaunch</span>
    </div>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled || location !== "/"
            ? "bg-background/95 backdrop-blur-md border-border py-4 shadow-sm"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/about" className={`text-sm font-medium transition-colors ${location === "/about" ? "text-primary" : "text-foreground/80 hover:text-primary"}`}>
              About Us
            </Link>
            <Link href="/approach" className={`text-sm font-medium transition-colors ${location === "/approach" ? "text-primary" : "text-foreground/80 hover:text-primary"}`}>
              Our Approach
            </Link>
            <Link href="/workshops" className={`text-sm font-medium transition-colors ${location === "/workshops" ? "text-primary" : "text-foreground/80 hover:text-primary"}`}>
              Workshops
            </Link>
            <Link href="/community" className={`text-sm font-medium transition-colors ${location === "/community" ? "text-primary" : "text-foreground/80 hover:text-primary"}`}>
              Community
            </Link>
            <Link href="/join" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2.5 text-sm font-medium transition-colors">
              Join a Workshop
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
            <Link href="/about" onClick={closeMenu} className="text-left text-lg font-serif text-foreground py-2 border-b border-border/50">
              About Us
            </Link>
            <Link href="/approach" onClick={closeMenu} className="text-left text-lg font-serif text-foreground py-2 border-b border-border/50">
              Our Approach
            </Link>
            <Link href="/workshops" onClick={closeMenu} className="text-left text-lg font-serif text-foreground py-2 border-b border-border/50">
              Workshops
            </Link>
            <Link href="/community" onClick={closeMenu} className="text-left text-lg font-serif text-foreground py-2 border-b border-border/50">
              Community
            </Link>
            <Link href="/join" onClick={closeMenu} className="bg-primary text-primary-foreground text-center py-3 rounded-md w-full mt-4 font-medium">
              Join a Workshop
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
