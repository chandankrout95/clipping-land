"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#eef1fb] border-t border-black/[0.06] pt-10 pb-6 mt-auto relative z-10">
      <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8 mb-8">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#fLogoGrad)" />
              <path d="M10 10H22M10 16H18M10 22H15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="fLogoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563eb" />
                  <stop offset="1" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-display font-extrabold text-[1.25rem] text-gray-900 tracking-tight">
              Flex<span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">N</span>Scale
            </span>
          </Link>
          <p className="text-[0.9rem] text-slate-500 max-w-[260px] leading-relaxed">
            We scale your business with clipping. More content, more reach, more customers.
          </p>
          <div className="flex gap-2.5 mt-1">
            {["Facebook", "Twitter", "Instagram"].map((label) => (
              <a
                key={label}
                href="#"
                className="w-[34px] h-[34px] rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                aria-label={label}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  {label === "Facebook" && <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />}
                  {label === "Twitter" && <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />}
                  {label === "Instagram" && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-display text-gray-900 text-base font-semibold mb-3">Company</h4>
          <ul className="flex flex-col gap-2">
            {[
              { name: "Results", href: "/results" },
              { name: "How It Works", href: "/how-it-works" },
              { name: "Pricing", href: "/pricing" },
              { name: "Book A Call", href: "/book-call" },
            ].map((l) => (
              <li key={l.name}>
                <Link href={l.href} className="text-[0.9rem] text-slate-500 hover:text-gray-900 hover:pl-0.5 transition-all duration-300">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="font-display text-gray-900 text-base font-semibold mb-3">Legal</h4>
          <ul className="flex flex-col gap-2">
            {["Privacy Policy", "Terms of Service", "Refund Policy", "Contact"].map((name) => (
              <li key={name}>
                <Link href={name === "Contact" ? "/book-call" : "#"} className="text-[0.9rem] text-slate-500 hover:text-gray-900 hover:pl-0.5 transition-all duration-300">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-gray-900 text-base font-semibold mb-3">Contact</h4>
          <ul className="flex flex-col gap-2">
            {[
              { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", text: "hello@flexnscale.com" },
              { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", text: "+1 (888) 123-4567" },
              { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", text: "New York, USA" },
            ].map((item) => (
              <li key={item.text} className="flex items-center gap-2.5 text-[0.9rem] text-slate-500">
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-primary shrink-0">
                  <path d={item.icon} />
                </svg>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full max-w-[1280px] mx-auto px-6 border-t border-black/[0.06] pt-4 flex flex-col md:flex-row items-center md:justify-between gap-3 text-center md:text-left">
        <p className="text-[0.8rem] text-slate-400">&copy; {currentYear} FlexNScale. All rights reserved.</p>
      </div>
    </footer>
  );
}