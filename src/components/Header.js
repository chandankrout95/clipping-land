"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Work With Us", href: "/work-with-us", hasDropdown: true },
    { name: "Case Studies", href: "/case-studies", hasDropdown: true },
    { name: "Compare", href: "/compare", hasDropdown: true },
    { name: "Blog", href: "/blog", hasDropdown: true },
    { name: "Contact", href: "/contact", hasDropdown: true },
  ];

  return (
    <>
      {/* Container wrapper to give the floating pill effect */}
      <div className="sticky top-4 z-50 w-full max-w-[1280px] mx-auto px-4 md:px-6 pointer-events-none">
        <header className="pointer-events-auto w-full bg-slate-50/80 backdrop-blur-md rounded-full border-4 border-white shadow-[0_8px_32px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] transition-all duration-300">
          <div className="w-full h-14 md:h-16 px-2 md:px-3 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center pl-2 shrink-0">
              <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-xl overflow-hidden ">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav - Pill Style With Inner Dividers */}
            <nav className="hidden lg:flex items-center h-full bg-[#f0f3fa]/60 rounded-full px-6 py-1.5 border border-black/[0.02]">
              {navLinks.map((link, idx) => (
                <div key={link.name} className="flex items-center">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 font-medium text-[0.88rem] px-3.5 py-1.5 rounded-full transition-all duration-200
                      ${pathname === link.href
                        ? "text-blue-600 bg-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                      }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="opacity-70 mt-0.5">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </Link>
                  {idx < navLinks.length - 1 && (
                    <span className="h-4 w-[1px] bg-slate-300/60 mx-1" />
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block pr-1">
              <Link
                href="/book-call"
                className="inline-flex items-center gap-1.5 px-5 h-10 md:h-11 rounded-full font-semibold text-[0.9rem] text-white bg-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.2)] hover:bg-blue-700 hover:shadow-[0_6px_16px_rgba(37,99,235,0.3)] transition-all duration-200"
              >
                Book a call
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mb-0.5">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 mr-1 z-[60] text-slate-700 bg-slate-100 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <div className="w-5 h-[14px] relative flex flex-col justify-between">
                <span className={`block w-full h-0.5 bg-current rounded transition-all duration-300 ${mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`block w-full h-0.5 bg-current rounded transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-full h-0.5 bg-current rounded transition-all duration-300 ${mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 flex justify-end transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className={`w-4/5 max-w-[300px] bg-white h-full p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <nav className="flex flex-col gap-4 mt-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-semibold flex items-center justify-between p-2 rounded-lg ${pathname === link.href ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:bg-slate-50"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
          <Link
            href="/book-call"
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-white bg-blue-600 shadow-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a call
          </Link>
        </div>
      </div>
    </>
  );
}