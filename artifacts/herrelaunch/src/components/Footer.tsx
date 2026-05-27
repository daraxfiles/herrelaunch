import React from "react";
import { Link } from "wouter";
import { Mail, Globe } from "lucide-react";
import logoImg from "@/assets/logo.png";

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/approach", label: "Our Approach" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  const Logo = () => (
    <img src={logoImg} alt="HerRelaunch LLC" className="h-14 w-auto object-contain" />
  );

  return (
    <footer className="bg-foreground/5 border-t border-border py-14 md:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-xs">
              Free, online confidence workshops for women worldwide — grounded in education, self-advocacy, and practical leadership development.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-4">Navigation</p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-4">Contact</p>
            <div className="space-y-3">
              <a
                href="mailto:herrelaunchllc@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                herrelaunchllc@gmail.com
              </a>
              <a
                href="https://herrelaunch.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4 text-secondary shrink-0" />
                herrelaunch.org
              </a>
              <p className="text-sm text-foreground/50 pl-7">Global online program</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-foreground/40">
            &copy; {new Date().getFullYear()} HerRelaunch LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
