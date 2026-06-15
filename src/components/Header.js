"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Results", href: "/results" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Book Call", href: "/book-call" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 h-20 flex items-center bg-bg-main/75 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="w-full max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
              <path d="M10 10H22M10 16H18M10 22H15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563eb" />
                  <stop offset="1" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-display font-extrabold text-[1.4rem] text-white tracking-tight">
              Flex<span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">N</span>Scale
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-medium text-[0.95rem] py-2 transition-colors duration-300
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300
                  ${pathname === link.href
                    ? "text-white after:w-full"
                    : "text-text-secondary hover:text-white after:w-0 hover:after:w-full"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/book-call"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-primary to-primary-accent shadow-[0_4px_14px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] transition-all duration-500"
            >
              Book A Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <div className="w-6 h-[18px] relative flex flex-col justify-between">
              <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-full h-0.5 bg-white rounded transition-all duration-300 ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-bg-main z-40 flex items-center justify-center transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <nav className="flex flex-col items-center gap-8 w-full px-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-2xl font-bold font-display transition-all duration-300 ${pathname === link.href ? "text-white scale-105" : "text-text-secondary hover:text-white hover:scale-105"}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/book-call"
            className="mt-4 w-4/5 max-w-[280px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-primary-accent shadow-[0_4px_14px_rgba(37,99,235,0.4)] transition-all duration-500"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book A Call Now &rarr;
          </Link>
        </nav>
      </div>
    </>
  );
}
