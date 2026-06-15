"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [liveViews, setLiveViews] = useState(182000000);
  const [clippersCount, setClippersCount] = useState(16082);
  const [views, setViews] = useState("10,000");
  const [payout, setPayout] = useState(10.0);
  const [activities, setActivities] = useState([
    { id: 1, text: "Clipper_K44 posted a new clip", time: "just now", platform: "tiktok" },
    { id: 2, text: "Clipper_J01 posted a new clip", time: "2s ago", platform: "youtube" },
    { id: 3, text: "Clipper_X99 posted a new clip", time: "5s ago", platform: "instagram" },
  ]);

  const fmt = (n) => n.toLocaleString();

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveViews((p) => p + Math.floor(Math.random() * 8) + 1);
      if (Math.random() > 0.7) {
        setClippersCount((p) => p + (Math.random() > 0.5 ? 1 : 0));
        const platforms = ["tiktok", "youtube", "instagram"];
        const r = Math.floor(Math.random() * 900) + 100;
        setActivities((prev) => [
          { id: Date.now(), text: `Clipper_A${r} posted a new clip`, time: "just now", platform: platforms[Math.floor(Math.random() * 3)] },
          ...prev.slice(0, 2),
        ]);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  /* ── SVG icon helpers ── */
  const TikTokIcon = ({ size = 14 }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.16-.16-.24-.24v5.37c-.05 1.98-.67 4.02-2.11 5.41-1.6 1.56-3.97 2.21-6.15 1.83-2.27-.37-4.32-2-5.07-4.22-.92-2.65-.21-5.78 1.79-7.73 1.55-1.54 3.86-2.17 6-1.75v4.03c-1.04-.26-2.21-.06-3.07.63-.98.77-1.37 2.19-1 3.39.3 1.05 1.3 1.87 2.39 1.93 1.34.1 2.68-.78 2.95-2.1.07-.36.08-.73.08-1.1v-9.3c.01-1.55.01-3.09.02-4.64z" /></svg>
  );
  const YouTubeIcon = ({ size = 14 }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
  );
  const InstagramIcon = ({ size = 14 }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0-3.584.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
  );

  const platformIconSmall = (platform) => {
    switch (platform) {
      case "tiktok": return <TikTokIcon size={12} />;
      case "youtube": return <YouTubeIcon size={12} />;
      case "instagram": return <InstagramIcon size={12} />;
      default: return null;
    }
  };

  const clientCards = [
    { name: "Alex Hormozi Clips", niche: "Business", avatar: "AH", color: "#f59e0b", before: "14K", after: "44K", avgViews: "4.5K", reach: "1.8M" },
    { name: "Iman Gadzhi Clips", niche: "Business", avatar: "IG", color: "#3b82f6", before: "22K", after: "78K", avgViews: "6.2K", reach: "2.3M" },
    { name: "Andrew Tate Clips", niche: "Motivation", avatar: "AT", color: "#ef4444", before: "18K", after: "65K", avgViews: "5.1K", reach: "1.9M" },
    { name: "Hamza Clips", niche: "Self Improvement", avatar: "HC", color: "#10b981", before: "11K", after: "39K", avgViews: "3.2K", reach: "1.2M" },
    { name: "Luke Belmar Clips", niche: "Crypto & Wealth", avatar: "LB", color: "#8b5cf6", before: "9K", after: "35K", avgViews: "2.8K", reach: "980K" },
    { name: "Patrick Bet-David", niche: "Entrepreneurship", avatar: "PB", color: "#06b6d4", before: "32K", after: "110K", avgViews: "7.4K", reach: "3.1M" },
    { name: "Tristan Tate Clips", niche: "Lifestyle", avatar: "TT", color: "#ec4899", before: "16K", after: "52K", avgViews: "4.1K", reach: "1.5M" },
    { name: "Gary Vee Clips", niche: "Marketing", avatar: "GV", color: "#f97316", before: "45K", after: "130K", avgViews: "8.9K", reach: "4.2M" },
    { name: "Jordan Peterson", niche: "Psychology", avatar: "JP", color: "#14b8a6", before: "28K", after: "88K", avgViews: "5.7K", reach: "2.6M" },
    { name: "Joe Rogan Clips", niche: "Podcast", avatar: "JR", color: "#a855f7", before: "55K", after: "180K", avgViews: "12K", reach: "5.8M" },
    { name: "Chris Bumstead", niche: "Fitness", avatar: "CB", color: "#22c55e", before: "19K", after: "61K", avgViews: "3.9K", reach: "1.7M" },
  ];

  const handleViewsChange = (e) => {
    const val = e.target.value.replace(/,/g, "");
    if (/^\d*$/.test(val)) {
      setViews(val ? Number(val).toLocaleString() : "");
      setPayout(((Number(val) || 0) / 1000) * 1.0);
    }
  };

  const platformColors = { tiktok: "bg-black", youtube: "bg-red-600", instagram: "bg-pink-700" };

  return (
    <div className="relative w-full overflow-hidden pb-20">
      {/* Ambient Glows */}
      <div className="absolute top-[5%] left-[5%] w-[400px] h-[400px] rounded-full bg-primary/12 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[45%] right-[5%] w-[500px] h-[500px] rounded-full bg-primary-accent/10 blur-[120px] pointer-events-none z-0" />

      {/* ─── TOP STATS BAR ─── */}
      <section className="bg-surface/40 border-b border-white/[0.03] backdrop-blur-lg py-4 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {[
            { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75", label: "Active Clippers", value: fmt(clippersCount) },
            { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Campaigns Running", value: "97" },
            { icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", label: "Views Generated", value: fmt(liveViews) },
          ].map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="hidden sm:block w-px h-4 bg-white/10" />}
              <div className="flex items-center gap-2.5 text-[0.95rem] text-text-secondary">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-primary"><path d={s.icon} /></svg>
                <span><strong className="text-white">{s.value}</strong> {s.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ─── HERO ─── */}
      <section className="pt-20 pb-12 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="flex flex-col items-start gap-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-amber-500/10 text-amber-400 border border-amber-500/20">
              ⭐ The Clipping Army That Scales Businesses
            </div>
            <h1 className="text-[2.75rem] lg:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-white font-display">
              We Scale Your <br />Business With <br /><span className="gradient-text">Clipping</span>
            </h1>
            <p className="text-lg max-w-[480px] text-text-secondary">
              Launch one campaign and instantly activate thousands of clippers posting your content across multiple platforms.
            </p>
            <div className="flex flex-col xs:flex-row gap-4 w-full">
              <Link href="/book-call" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-primary-accent shadow-[0_4px_14px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] transition-all duration-500">
                Book A Call
              </Link>
              <Link href="/results" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-white/[0.03] border border-white/10 backdrop-blur hover:-translate-y-0.5 hover:bg-white/[0.08] hover:border-white/25 transition-all duration-500">
                See Results
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </Link>
            </div>
          </div>

          {/* Right – Phone Mockup */}
          <div className="relative flex justify-center w-full animate-fade-in">
            <div className="relative w-[320px] sm:w-[380px] h-[480px] sm:h-[520px]">
              {/* Platform ring */}
              <div className="absolute top-[15%] -left-[10%] -right-[10%] h-[70%] border-[1.5px] border-dashed border-primary/12 rounded-full pointer-events-none z-[1] animate-float" />
              {/* Platform bubbles */}
              <div className="absolute top-[10%] left-[10%] w-12 h-12 rounded-full bg-black border border-white/15 flex items-center justify-center text-white shadow-lg z-5 animate-float">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.99-1.72-.08-.07-.16-.16-.24-.24v5.37c-.05 1.98-.67 4.02-2.11 5.41-1.6 1.56-3.97 2.21-6.15 1.83-2.27-.37-4.32-2-5.07-4.22-.92-2.65-.21-5.78 1.79-7.73 1.55-1.54 3.86-2.17 6-1.75v4.03c-1.04-.26-2.21-.06-3.07.63-.98.77-1.37 2.19-1 3.39.3 1.05 1.3 1.87 2.39 1.93 1.34.1 2.68-.78 2.95-2.1.07-.36.08-.73.08-1.1v-9.3c.01-1.55.01-3.09.02-4.64z" /></svg>
              </div>
              <div className="absolute top-[60%] -right-[5%] w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg z-5 animate-float-delay-1">
                <InstagramIcon size={18} />              </div>
              <div className="absolute top-[20%] right-[5%] w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg z-5 animate-float-delay-2">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </div>

              {/* Phone */}
              <div className="absolute left-1/2 -translate-x-1/2 w-[230px] sm:w-[250px] h-[450px] sm:h-[480px] bg-[#0b0f19] border-[12px] border-[#1a2035] rounded-[36px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_40px_rgba(37,99,235,0.15)] overflow-hidden z-2">
                <div className="w-full h-full flex flex-col bg-[#07090e]">
                  <div className="h-10 bg-[#111422] flex items-center justify-center relative border-b border-white/5">
                    <div className="absolute top-0 w-[70px] h-3.5 bg-[#1a2035] rounded-b-xl" />
                    <span className="text-[0.75rem] font-bold text-text-secondary mt-2.5">FlexNScale App</span>
                  </div>
                  <div className="p-5 flex flex-col gap-4 flex-1">
                    <span className="text-[0.65rem] uppercase text-text-muted tracking-wide">Campaign Overview</span>
                    <span className="text-[1.6rem] font-extrabold text-white font-display">182,280,000</span>
                    <div className="bg-white/[0.02] rounded-xl p-2 border border-white/5">
                      <svg width="100%" height="80" viewBox="0 0 100 50">
                        <path d="M0 45 Q 20 20, 40 35 T 80 10 T 100 5 L 100 50 L 0 50 Z" fill="url(#pgGrad)" opacity="0.4" />
                        <path d="M0 45 Q 20 20, 40 35 T 80 10 T 100 5" stroke="#3b82f6" strokeWidth="3" fill="none" />
                        <defs><linearGradient id="pgGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#3b82f6" stopOpacity="0" /></linearGradient></defs>
                      </svg>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white/[0.03] rounded-lg p-2 flex flex-col gap-1">
                        <span className="text-[0.55rem] text-text-secondary">Clipping Army</span>
                        <strong className="text-[0.9rem] text-white">16,082</strong>
                      </div>
                      <div className="flex-1 bg-white/[0.03] rounded-lg p-2 flex flex-col gap-1">
                        <span className="text-[0.55rem] text-text-secondary">Active Now</span>
                        <div className="flex items-center gap-1 bg-success/10 px-1.5 py-0.5 rounded text-[0.55rem] text-success font-bold w-fit">
                          <span className="live-dot" /><span>Live</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto flex">
                      {["#ec4899", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6"].map((c, i) => (
                        <div key={i} className="w-6 h-6 rounded-full border-[1.5px] border-[#07090e] text-[0.55rem] font-bold flex items-center justify-center text-white -ml-1.5 first:ml-0" style={{ background: c }}>
                          C{i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Live feed card */}
              <div className="glass-card absolute -bottom-[5%] -left-[15%] w-[200px] !p-3.5 z-10 !rounded-[14px] shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="live-dot" />
                  <span className="text-[0.75rem] font-bold text-white">Live Activity</span>
                </div>
                <div className="flex flex-col gap-2">
                  {activities.map((a) => (
                    <div key={a.id} className="flex items-center gap-2 animate-fade-in">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0 ${platformColors[a.platform]}`}>
                        {platformIconSmall(a.platform)}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[0.65rem] text-text-secondary leading-tight">{a.text}</p>
                        <span className="text-[0.55rem] text-text-muted">{a.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VIEWS BANNER ─── */}
      <section className="py-16 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="glass-card flex flex-col items-center justify-center gap-6 text-center !p-12 bg-gradient-to-br from-card to-bg-main/80">
            <div className="flex items-center gap-2 bg-primary/[0.08] border border-primary/20 px-3.5 py-1.5 rounded-full">
              <span className="live-dot" />
              <span className="text-xs font-bold text-primary uppercase tracking-wide">Live Views Generated</span>
            </div>
            <h2 className="text-4xl md:text-[5rem] font-extrabold font-display tracking-tight bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent leading-tight">
              {fmt(liveViews)}+
            </h2>
            <div className="w-full border-t border-white/5 mt-8 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { val: "1.2B+", label: "Views", icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { val: "14M+", label: "Followers Gained", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { val: "984+", label: "Viral Posts", icon: "M19 9l-7 7-7-7" },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/[0.08] border border-primary/15 flex items-center justify-center text-primary">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-extrabold text-white font-display">{s.val}</h3>
                    <p className="text-sm text-text-secondary">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESULTS COOKED ─── */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white font-display">Results <span className="text-primary">Cooked</span> 🔥</h2>
            <p className="text-text-secondary mt-3 max-w-[600px] mx-auto">Real creators. Real growth. Every single result verified and documented.</p>
          </div>

          {/* Horizontal scroll container */}
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => { const el = document.getElementById('results-scroll'); if (el) el.scrollBy({ left: -320, behavior: 'smooth' }); }}
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 z-20 shadow-lg"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Scrollable row */}
            <div
              id="results-scroll"
              className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {clientCards.map((card, idx) => (
                <div key={idx} className="glass-card !p-6 flex flex-col gap-4 min-w-[280px] max-w-[300px] shrink-0 snap-start hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ backgroundColor: card.color }}>{card.avatar}</div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">{card.name}</h4>
                      <span className="text-xs text-text-muted">Niche: {card.niche}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center bg-white/[0.015] border border-white/[0.03] rounded-xl p-4 gap-2">
                    <div className="flex flex-col items-center text-center">
                      <span className="text-[0.6rem] uppercase text-text-muted tracking-wide">Before</span>
                      <strong className="text-xl font-extrabold text-white font-display">{card.before}</strong>
                      <span className="text-[0.65rem] text-text-secondary">Followers</span>
                    </div>
                    <span className="text-lg font-bold text-success">→</span>
                    <div className="flex flex-col items-center text-center">
                      <span className="text-[0.6rem] uppercase text-success tracking-wide">After</span>
                      <strong className="text-xl font-extrabold text-success font-display">{card.after}</strong>
                      <span className="text-[0.65rem] text-text-secondary">Followers</span>
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-3">
                    <div className="flex flex-col"><span className="text-xs text-text-secondary">Avg Views</span><strong className="text-sm font-display text-white">{card.avgViews}</strong></div>
                    <div className="flex flex-col items-end"><span className="text-xs text-text-secondary">Reach</span><strong className="text-sm font-display text-success">{card.reach}</strong></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => { const el = document.getElementById('results-scroll'); if (el) el.scrollBy({ left: 320, behavior: 'smooth' }); }}
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 z-20 shadow-lg"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM vs SOLUTION ─── */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Problem */}
          <div className="glass-card flex flex-col items-start gap-5">
            <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded bg-danger/10 text-danger">The Problem 😢</span>
            <h3 className="text-2xl font-bold text-white">Why Your Main Account <br /><span className="text-danger">Isn&apos;t Scaling</span></h3>
            <div className="flex flex-wrap items-center justify-between gap-3 w-full mt-4">
              {[
                { label: "One Account", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                { label: "$100K+ Spent", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "1-2 Editors", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
                { label: "3-6 Clips/Wk", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              ].map((s, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-text-secondary">
                      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                    </div>
                    <span className="text-[0.7rem] text-text-secondary max-w-[70px]">{s.label}</span>
                  </div>
                  {i < 3 && <span className="text-text-muted font-bold hidden sm:block">&rarr;</span>}
                </React.Fragment>
              ))}
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-full bg-danger/10 border border-danger/30 flex items-center justify-center text-danger">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <span className="text-[0.7rem] text-danger font-bold">No Results!</span>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="glass-card flex flex-col items-start gap-5">
            <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded bg-success/10 text-success">The Solution ✅</span>
            <h3 className="text-2xl font-bold text-white">The <span className="text-primary">FlexNScale</span> Strategy</h3>
            <div className="flex flex-wrap items-center justify-between gap-4 w-full mt-4">
              {[
                { label: "You Send Content", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" },
                { label: "Campaign Launch", icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" },
                { label: "Clippers Edit", icon: "M14.121 14.121L19 19m-4.879-4.879l1.414-1.414M12 6.002V4m0 2.002a2 2 0 110 4M12 6.002a2 2 0 100 4m0 0V20" },
                { label: "Traffic Flows", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", highlight: true },
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2 relative">
                  <span className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] bg-primary rounded-full text-[0.65rem] font-bold flex items-center justify-center text-white">{i + 1}</span>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-success border ${s.highlight ? "border-success bg-success/10 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : "border-success/20 bg-success/[0.02]"}`}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                  </div>
                  <span className={`text-[0.7rem] max-w-[70px] ${s.highlight ? "text-success font-bold" : "text-text-secondary"}`}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLIPPING ARMY ─── */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded bg-white/5 text-text-secondary">The Clipping Army</span>
            <h2 className="text-4xl font-extrabold text-white font-display mt-4">
              <span className="text-blue-500" style={{ textShadow: "0 0 20px rgba(59,130,246,0.3)" }}>{fmt(clippersCount)}</span> <br />Active Clippers Ready To Hunt Views
            </h2>
            <div className="flex items-center gap-4 mt-6 mb-8">
              <div className="flex">
                {["#3b82f6", "#ec4899", "#10b981", "#f59e0b"].map((c, i) => (
                  <div key={i} className="w-[38px] h-[38px] rounded-full border-2 border-bg-main -ml-2.5 first:ml-0" style={{ background: c }} />
                ))}
                <div className="w-[38px] h-[38px] rounded-full bg-primary border-2 border-bg-main flex items-center justify-center text-[0.7rem] font-bold text-white -ml-2.5">+{fmt(clippersCount)}</div>
              </div>
              <span className="text-sm text-text-secondary font-medium">Trained. Verified. Ready.</span>
            </div>
            {/* Silhouette SVG */}
            <div className="bg-white/[0.01] border border-white/[0.03] rounded-3xl overflow-hidden mt-4">
              <svg width="100%" height="220" viewBox="0 0 500 220" fill="none" className="block">
                <path d="M150 220 C150 160 170 140 200 140 C230 140 250 160 250 220" fill="rgba(15,23,42,0.4)" />
                <path d="M250 220 C250 160 270 140 300 140 C330 140 350 160 350 220" fill="rgba(15,23,42,0.4)" />
                <path d="M80 220 C80 150 100 130 130 130 C160 130 180 150 180 220" fill="rgba(15,23,42,0.6)" />
                <path d="M320 220 C320 150 340 130 370 130 C400 130 420 150 420 220" fill="rgba(15,23,42,0.6)" />
                <path d="M180 220 C180 130 210 110 250 110 C290 110 320 130 320 220 Z" fill="#0f172a" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                <path d="M250 110 L250 40 M250 40 L310 55 L250 70" stroke="#fff" strokeWidth="3" fill="#2563eb" strokeLinecap="round" />
                <path d="M120 220 C120 140 145 120 180 120 C215 120 240 140 240 220 Z" fill="#0b0f19" />
                <path d="M260 220 C260 140 285 120 320 120 C355 120 380 140 380 220 Z" fill="#0b0f19" />
              </svg>
            </div>
          </div>

          {/* Features */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-6 w-full">
              {[
                { title: "Trained Clippers", desc: "Experts in creating viral hooks, retentions, and trending edits.", color: "bg-primary/10 text-blue-400" },
                { title: "Multi-Platform Posting", desc: "Covers TikTok, Instagram Reels, and YouTube Shorts simultaneously.", color: "bg-purple-500/10 text-purple-400" },
                { title: "AI-Powered System", desc: "Hooks optimization, audio synchronization, and visual enhancements.", color: "bg-cyan-500/10 text-cyan-300" },
                { title: "Real-Time Tracking", desc: "A custom user portal displaying views, clippers status, and reach metrics.", color: "bg-emerald-500/10 text-emerald-400" },
              ].map((f, i) => (
                <div key={i} className="glass-card flex gap-5 items-start">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${f.color}`}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d={["M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", "M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zM12 18h.01", "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2zm9-10v10M9 21h9"][i]} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{f.title}</h4>
                    <p className="text-sm text-text-secondary">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS MATH ─── */}
      <section className="py-20 relative z-10 select-none">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Dark blue glass-card container */}
          <div className="bg-[#050b18]/60 border border-white/[0.05] backdrop-blur-xl rounded-[24px] p-8 md:p-12 shadow-2xl">

            <span className="text-[10px] tracking-[0.15em] font-bold uppercase px-3 py-1.5 rounded bg-white/5 text-text-secondary border border-white/5">
              How It Works ?
            </span>

            {/* 3-Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-center mt-10">

              {/* LEFT COLUMN: Text Information */}
              <div className="flex flex-col gap-6 justify-center">
                <ul className="flex flex-col gap-4">
                  {[["3", "Platforms"], ["3", "Accounts"], ["3", "Posts Per Platform"]].map(([n, l]) => (
                    <li key={l} className="text-2xl md:text-3xl font-extrabold text-[#94a3b8] tracking-tight">
                      <span className="text-[#06b6d4] mr-2">{n}</span>{l}
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20 w-fit tracking-wide">
                  9 Posts Per Clipper
                </div>
              </div>

              {/* MIDDLE COLUMN: Two Calculation Cards */}
              <div className="flex flex-col items-center justify-center gap-5 w-full">

                {/* Card 1: Platform Addition Layout */}
                <div className="flex items-center justify-between gap-4 bg-[#0a1224]/80 border border-white/[0.05] p-5 rounded-2xl w-full max-w-[380px]">
                  <div className="flex items-center gap-2">
                    {[
                      { icon: <TikTokIcon size={16} />, bg: "bg-black", sub: "x3" },
                      { icon: <InstagramIcon size={16} />, bg: "bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600", sub: "x3" },
                      { icon: <YouTubeIcon size={16} />, bg: "bg-red-600", sub: "x3" },
                    ].map((p, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <span className="text-xs font-bold text-slate-500 mx-0.5">+</span>}
                        <div className="flex flex-col items-center gap-1.5 bg-[#0e1b35] border border-white/[0.03] p-2 rounded-xl min-w-[54px]">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${p.bg} shadow-md`}>
                            {p.icon}
                          </div>
                          <span className="text-[10px] font-medium text-slate-400">{p.sub}</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pl-2 border-l border-white/5">
                    <span className="text-sm font-bold text-slate-500">=</span>
                    <div className="flex flex-col items-center">
                      <strong className="text-xl font-black text-white">9</strong>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Posts</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Total Calculation Multiplication */}
                <div className="flex items-center justify-between gap-4 bg-[#0a1224]/80 border border-white/[0.05] p-5 rounded-2xl w-full max-w-[380px]">
                  <div className="flex items-center justify-start gap-4">
                    <div className="flex flex-col">
                      <strong className="text-2xl font-black text-[#3b82f6]">9</strong>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Posts</span>
                    </div>
                    <span className="text-sm font-bold text-slate-500">&times;</span>
                    <div className="flex flex-col">
                      <strong className="text-2xl font-black text-white">16,000</strong>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Users</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pl-4 border-l border-white/5">
                    <span className="text-sm font-bold text-slate-500">=</span>
                    <div className="flex flex-col items-end">
                      <strong className="text-2xl font-black text-[#10b981]" style={{ textShadow: "0 0 20px rgba(16,185,129,0.25)" }}>
                        144,000
                      </strong>
                      <span className="text-[9px] uppercase font-bold tracking-wider text-[#10b981]/80 flex items-center gap-1">
                        Clips Daily <span className="text-xs">🔥</span>
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: The Globe (Protected from squishing) */}
              <div className="flex items-center justify-center lg:justify-end w-full">
                {/* shrink-0 and aspect-square keep it perfectly spherical */}
                <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] shrink-0 aspect-square animate-float">
                  {/* Glow behind globe */}
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.18)_0%,transparent70%)] blur-xl" />

                  {/* Main Globe Base */}
                  <div className="absolute inset-[5%] rounded-full bg-[radial-gradient(circle_at_30%_30%,#1e293b,#0f172a_60%,#020617)] border border-white/[0.08] shadow-[inset_-25px_-25px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(37,99,235,0.1)] flex items-center justify-center overflow-visible">

                    {/* Dot Grid Layer */}
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(rgba(255,255,255,0.05)_1.5px,transparent_1.5px)] bg-[length:16px_16px] opacity-70" />

                    {/* Dynamic Floating Badges */}
                    <span className="absolute top-[28%] -left-[12%] bg-[#0f172a]/80 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-xl flex items-center gap-2 transition-transform hover:scale-105">
                      <TikTokIcon size={12} /> TikTok
                    </span>
                    <span className="absolute top-[52%] -translate-y-1/2 -left-[16%] bg-[#0f172a]/80 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-xl flex items-center gap-2 transition-transform hover:scale-105">
                      <InstagramIcon size={12} /> Instagram
                    </span>
                    <span className="absolute bottom-[24%] -right-[12%] bg-[#0f172a]/80 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-xl flex items-center gap-2 transition-transform hover:scale-105">
                      <YouTubeIcon size={12} /> YouTube
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING / RPM CALCULATOR ─── */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6 items-start">
            <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded bg-white/5 text-text-secondary">Pricing</span>
            <h2 className="text-[2.5rem] font-extrabold text-white font-display leading-tight">You Only <br /><span className="text-primary">Pay For Results</span></h2>
            <ul className="flex flex-col gap-4 mt-4">
              {["No Upfront Fees", "No Long Contracts", "No Monthly Retainers"].map((p) => (
                <li key={p} className="flex items-center gap-3 text-lg text-text-secondary font-medium">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="text-success"><path d="M5 13l4 4L19 7" /></svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card !p-10 w-full">
            <h3 className="text-xl font-bold text-white mb-6">RPM Calculator</h3>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="viewsInput" className="text-sm text-text-secondary font-semibold">Enter Views</label>
                <input id="viewsInput" type="text" value={views} onChange={handleViewsChange} placeholder="10,000" className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 text-white text-xl font-bold font-display w-full outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(37,99,235,0.2)] transition-all duration-300" />
              </div>
              <div className="flex flex-col gap-1 bg-primary/[0.04] border border-primary/15 p-5 rounded-xl">
                <span className="text-sm text-text-secondary">Estimated Payout</span>
                <strong className="text-4xl font-extrabold text-blue-500 font-display" style={{ textShadow: "0 0 20px rgba(59,130,246,0.35)" }}>${payout.toFixed(2)}</strong>
              </div>
              <div className="flex justify-between items-center gap-4 border-t border-white/5 pt-6">
                <div><h5 className="text-[0.95rem] text-white font-semibold">How It Works?</h5><p className="text-sm text-text-secondary">We get you views. You get paid. It&apos;s that simple.</p></div>
                <div className="relative w-20 h-[60px] shrink-0">
                  <div className="absolute bottom-2.5 left-2.5 w-8 h-2.5 rounded-full bg-amber-500 border border-amber-600 shadow-[0_3px_0_#92400e]" />
                  <div className="absolute bottom-[22px] left-5 w-8 h-2.5 rounded-full bg-amber-500 border border-amber-600 shadow-[0_3px_0_#92400e]" />
                  <div className="absolute bottom-1.5 right-1.5 w-9 h-9 rounded-[50%_50%_40%_40%] bg-success text-white text-sm font-extrabold flex items-center justify-center border border-emerald-600 rotate-[10deg]">$$</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="relative bg-[radial-gradient(circle_at_50%_0%,#1e3a8a_0%,#060814_80%)] border border-primary/30 rounded-[32px] px-8 py-16 text-center flex flex-col items-center gap-6 overflow-hidden">
            {/* Rocket */}
            <div className="absolute top-5 right-10 opacity-20 md:opacity-85 pointer-events-none animate-float">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <path d="M12 2S4.5 7.5 4.5 13c0 2.25 1.5 4.5 3.5 5.5l1-1c-1-.5-2.25-2.25-2.25-4.5 0-3.5 4.25-8.25 5.25-9.25 1 1 5.25 5.75 5.25 9.25 0 2.25-1.25 4-2.25 4.5l1 1c2-1 3.5-3.25 3.5-5.5C19.5 7.5 12 2 12 2z" fill="url(#rGrad)" />
                <path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#fff" />
                <path d="M9.5 19.5c.5.5.5 1.5 0 2s-1.5.5-2 0l-1-1 3-1zM14.5 19.5c-.5.5-.5 1.5 0 2s1.5.5 2 0l1-1-3-1z" fill="#f59e0b" />
                <defs><linearGradient id="rGrad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#60a5fa" /><stop offset="1" stopColor="#2563eb" /></linearGradient></defs>
              </svg>
            </div>
            <span className="text-sm font-bold text-blue-400 uppercase tracking-wide">Ready To Scale Like Never Before?</span>
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-white font-display">Start Scaling Today ⚡</h2>
            <p className="text-lg max-w-[580px] text-text-secondary">Join 16,000+ creators who are already scaling their businesses with the power of the Clipping Army.</p>
            <Link href="/book-call" className="mt-4 inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-primary to-primary-accent shadow-[0_4px_14px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] transition-all duration-500">
              Book A Call Now
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
              <div className="flex">
                {["#3b82f6", "#ec4899", "#10b981", "#f59e0b"].map((c, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-[1.5px] border-[#07090e] -ml-1.5 first:ml-0" style={{ background: c }} />
                ))}
                <div className="w-6 h-6 rounded-full bg-primary border-[1.5px] border-[#07090e] text-[0.55rem] font-bold flex items-center justify-center text-white -ml-1.5">+{fmt(clippersCount)}</div>
              </div>
              <span className="text-sm text-text-secondary font-medium">Creators Trust FlexNScale</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
