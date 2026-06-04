import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/approach", label: "Our Approach" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact Us" },
];

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between h-[84px] md:h-[100px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img src={logoImg} alt="HerRelaunch LLC" className="h-16 md:h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors whitespace-nowrap ${
                  location === link.href
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-foreground p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-b border-border shadow-lg px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium py-3 border-b border-border/40 transition-colors ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
