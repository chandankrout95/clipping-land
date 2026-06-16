"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PermIdentityOutlined from "@mui/icons-material/PermIdentityOutlined";
import AttachMoneyOutlined from "@mui/icons-material/AttachMoneyOutlined";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import FileCopyOutlined from "@mui/icons-material/FileCopyOutlined";
import DangerousOutlined from "@mui/icons-material/DangerousOutlined";
import FileUploadOutlined from "@mui/icons-material/FileUploadOutlined";
import RocketLaunchOutlined from "@mui/icons-material/RocketLaunchOutlined";
import EditNoteOutlined from "@mui/icons-material/EditNoteOutlined";
import BarChartOutlined from "@mui/icons-material/BarChartOutlined";
import PlayCircleOutlineOutlined from "@mui/icons-material/PlayCircleOutlineOutlined";


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
    {
      name: "Alex Hormozi Clips",
      niche: "Business",
      avatar: "AH",
      color: "#f59e0b",
      before: "14K",
      after: "44K",
      avgViews: "4.5K",
      reach: "1.8M",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&fit=crop&auto=format&q=80"
    },
    {
      name: "Iman Gadzhi Clips",
      niche: "Business",
      avatar: "IG",
      color: "#3b82f6",
      before: "22K",
      after: "78K",
      avgViews: "6.2K",
      reach: "2.3M",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&fit=crop&auto=format&q=80"
    },
    {
      name: "Andrew Tate Clips",
      niche: "Motivation",
      avatar: "AT",
      color: "#ef4444",
      before: "18K",
      after: "65K",
      avgViews: "5.1K",
      reach: "1.9M",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&fit=crop&auto=format&q=80"
    },
    {
      name: "Hamza Clips",
      niche: "Self Improvement",
      avatar: "HC",
      color: "#10b981",
      before: "11K",
      after: "39K",
      avgViews: "3.2K",
      reach: "1.2M",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&fit=crop&auto=format&q=80"
    },
    {
      name: "Luke Belmar Clips",
      niche: "Crypto & Wealth",
      avatar: "LB",
      color: "#8b5cf6",
      before: "9K",
      after: "35K",
      avgViews: "2.8K",
      reach: "980K",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&fit=crop&auto=format&q=80"
    },
    {
      name: "Patrick Bet-David",
      niche: "Entrepreneurship",
      avatar: "PB",
      color: "#06b6d4",
      before: "32K",
      after: "110K",
      avgViews: "7.4K",
      reach: "3.1M",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&fit=crop&auto=format&q=80"
    },
    {
      name: "Tristan Tate Clips",
      niche: "Lifestyle",
      avatar: "TT",
      color: "#ec4899",
      before: "16K",
      after: "52K",
      avgViews: "4.1K",
      reach: "1.5M",
      image: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=150&fit=crop&auto=format&q=80"
    },
    {
      name: "Gary Vee Clips",
      niche: "Marketing",
      avatar: "GV",
      color: "#f97316",
      before: "45K",
      after: "130K",
      avgViews: "8.9K",
      reach: "4.2M",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&fit=crop&auto=format&q=80"
    },
    {
      name: "Jordan Peterson",
      niche: "Psychology",
      avatar: "JP",
      color: "#14b8a6",
      before: "28K",
      after: "88K",
      avgViews: "5.7K",
      reach: "2.6M",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&fit=crop&auto=format&q=80"
    },
    {
      name: "Joe Rogan Clips",
      niche: "Podcast",
      avatar: "JR",
      color: "#a855f7",
      before: "55K",
      after: "180K",
      avgViews: "12K",
      reach: "5.8M",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&fit=crop&auto=format&q=80"
    },
    {
      name: "Chris Bumstead",
      niche: "Fitness",
      avatar: "CB",
      color: "#22c55e",
      before: "19K",
      after: "61K",
      avgViews: "3.9K",
      reach: "1.7M",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&fit=crop&auto=format&q=80"
    }
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
      <div className="absolute top-[5%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-200/40 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[45%] right-[5%] w-[500px] h-[500px] rounded-full bg-indigo-200/30 blur-[120px] pointer-events-none z-0" />


      {/* ─── TOP STATS BAR ─── */}
      <section className="py-6 flex justify-center items-center relative z-10">
        {/* Unified Bounding Card Container */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 bg-slate-50 border border-black/[0.07] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] rounded-2xl px-8 py-4 w-full max-w-[700px] mx-4">
          {[
            { icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm14 10v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75", label: "Active Clippers", value: fmt(clippersCount) },
            { icon: "M13 10V3L4 14h7v7l9-11h-7z", label: "Campaigns Running", value: "97" },
            { icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", label: "Views Generated", value: fmt(liveViews) },
          ].map((s, i) => (
            <React.Fragment key={i}>
              {/* Divider line between elements */}
              {i > 0 && <div className="hidden sm:block w-px h-10 bg-black/[0.07]" />}

              {/* Stat block */}
              <div className="flex items-center gap-4 w-full sm:w-auto justify-start sm:px-6 first:pl-0 last:pr-0">
                {/* Circular Icon Badge */}
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-50 text-primary shrink-0">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                </div>

                {/* Text alignment: figure on top, label on bottom */}
                <div className="flex flex-col items-start leading-tight">
                  <strong className="text-gray-900 text-[1.15rem] font-bold tracking-tight">{s.value}</strong>
                  <span className="text-[0.75rem] text-slate-500 mt-0.5 whitespace-nowrap">{s.label}</span>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ─── HERO ─── */}
      <section className="pt-5 pb-12 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="flex flex-col items-start gap-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-amber-50 text-amber-600 border border-amber-200">
              ⭐ The Clipping Army That Scales Businesses
            </div>
            <h1 className="text-[2.75rem] lg:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-gray-900 font-display">
              We Scale Your <br />Business With <br /><span className="gradient-text">Clipping</span>
            </h1>
            <p className="text-lg max-w-[480px] text-slate-500">
              Launch one campaign and instantly activate thousands of clippers posting your content across multiple platforms.
            </p>
            <div className="flex xs:flex-row gap-4 w-full">
              <Link href="/book-call" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[12px] font-semibold text-white bg-gradient-to-r from-primary to-primary-accent shadow-[0_4px_14px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] transition-all duration-500">
                Book A Call
              </Link>
              <Link href="/results" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[12px] font-semibold text-gray-700 bg-white border border-black/[0.1] hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md transition-all duration-500">
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
              <div className="absolute left-1/2 -translate-x-1/2 w-[230px] sm:w-[250px] h-[450px] sm:h-[480px] bg-[#0b0f19] border-[12px] border-[#1a2035] rounded-[36px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4),0_0_30px_rgba(37,99,235,0.1)] overflow-hidden z-2">
                <div className="w-full h-full flex flex-col bg-[#07090e]">
                  <div className="h-10 bg-[#111422] flex items-center justify-center relative border-b border-white/5">
                    <div className="absolute top-0 w-[70px] h-3.5 bg-[#1a2035] rounded-b-xl" />
                    <span className="text-[0.75rem] font-bold text-slate-400 mt-2.5">FlexNScale App</span>
                  </div>
                  <div className="p-5 flex flex-col gap-4 flex-1">
                    <span className="text-[0.65rem] uppercase text-slate-500 tracking-wide">Campaign Overview</span>
                    <span className="text-[1.6rem] font-extrabold text-white font-display">182,280,000</span>
                    <div className="bg-white/[0.04] rounded-xl p-2 border border-white/5">
                      <svg width="100%" height="80" viewBox="0 0 100 50">
                        <path d="M0 45 Q 20 20, 40 35 T 80 10 T 100 5 L 100 50 L 0 50 Z" fill="url(#pgGrad)" opacity="0.4" />
                        <path d="M0 45 Q 20 20, 40 35 T 80 10 T 100 5" stroke="#3b82f6" strokeWidth="3" fill="none" />
                        <defs><linearGradient id="pgGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#3b82f6" stopOpacity="0" /></linearGradient></defs>
                      </svg>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white/[0.05] rounded-lg p-2 flex flex-col gap-1">
                        <span className="text-[0.55rem] text-slate-400">Clipping Army</span>
                        <strong className="text-[0.9rem] text-white">16,082</strong>
                      </div>
                      <div className="flex-1 bg-white/[0.05] rounded-lg p-2 flex flex-col gap-1">
                        <span className="text-[0.55rem] text-slate-400">Active Now</span>
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
              <div className="glass-card absolute -bottom-[5%] -left-[15%] w-[200px] !p-3.5 z-10 !rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="live-dot" />
                  <span className="text-[0.75rem] font-bold text-gray-800">Live Activity</span>
                </div>
                <div className="flex flex-col gap-2">
                  {activities.map((a) => (
                    <div key={a.id} className="flex items-center gap-2 animate-fade-in">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0 ${platformColors[a.platform]}`}>
                        {platformIconSmall(a.platform)}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[0.65rem] text-slate-500 leading-tight">{a.text}</p>
                        <span className="text-[0.55rem] text-slate-400">{a.time}</span>
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
      <section className="pt-8 relative z-10 flex justify-center items-center">
        {/* Main Outer Card */}
        <div className="w-full max-w-[1150px] mx-4 bg-slate-50 border-b border-black/[0.07]  rounded-3xl p-8 flex flex-col items-center relative">

          {/* Floating Top Badge */}
          <div className="absolute -top-3.5 flex items-center gap-2 bg-white border border-black/[0.08] px-3.5 py-1 rounded-full shadow-md">
            <span className="text-[0.7rem] font-medium text-slate-500">Live Views</span>
            <div className="flex items-center gap-1.5 ml-1 border-l border-black/[0.07] pl-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[0.65rem] font-bold text-emerald-600 tracking-wider uppercase">LIVE</span>
            </div>
          </div>

          {/* Section Title */}
          <span className="text-[0.75rem] font-bold text-slate-400 tracking-tight mt-2 mb-1">
            Live Views Generated
          </span>

          {/* Giant Number Display */}
          <h2 className="text-5xl md:text-7xl font-extrabold font-display tracking-tight text-primary mb-8">
            {fmt(liveViews)}+
          </h2>

          {/* Bottom Sub-Cards Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Card 1: Views */}
            <div className="bg-slate-50 border border-black/[0.05] rounded-2xl p-5 flex items-center gap-4 w-full">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <PlayCircleOutlineOutlined style={{ fontSize: 34 }} />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <h3 className="text-[1.8rem] font-bold text-gray-900 tracking-tight">1.2B+</h3>
                <p className="text-[0.8rem] font-bold text-slate-500 mt-0.5">Views</p>
              </div>
            </div>

            {/* Card 2: Followers Gained */}
            <div className="bg-slate-50 border border-black/[0.05] rounded-2xl p-5 flex items-center gap-4 w-full">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <PeopleAltOutlined style={{ fontSize: 34 }} />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <h3 className="text-[1.8rem] font-bold text-gray-900 tracking-tight">14M+</h3>
                <p className="text-[0.8rem] font-bold text-slate-500 mt-0.5 whitespace-nowrap">Followers Gained</p>
              </div>
            </div>

            {/* Card 3: Viral Posts */}
            <div className="bg-slate-50 border border-black/[0.05] rounded-2xl p-5 flex items-center gap-4 w-full">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <RocketLaunchOutlined style={{ fontSize: 34 }} />
              </div>
              <div className="flex flex-col items-start leading-tight">
                <h3 className="text-[1.8rem] font-bold text-gray-900 tracking-tight">984+</h3>
                <p className="text-[0.8rem] font-bold text-slate-500 mt-0.5">Viral Posts</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ─── RESULTS COOKED ─── */}
      <section className="pt-10 relative z-10 select-none">
        <div className="max-w-[1350px] mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-[32px] md:text-[38px] font-black text-[#1e293b] tracking-tight">
              Results <span className="text-[#2563eb]">Cooked</span> 🔥
            </h2>
          </div>

          {/* Horizontal Slider Layout Container */}
          <div className="relative max-w-[1320px] mx-auto">

            {/* Left Navigation Arrow */}
            <button
              onClick={() => { const el = document.getElementById('results-scroll'); if (el) el.scrollBy({ left: -340, behavior: 'smooth' }); }}
              className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200/80 text-slate-600 flex items-center justify-center hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all z-20 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Scrollable Wrapper */}
            <div
              id="results-scroll"
              className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {clientCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-100 rounded-[22px] p-5 flex flex-col gap-5 min-w-[325px] max-w-[335px] shrink-0 snap-start shadow-[0_8px_24px_rgba(0,0,0,0.015)]"
                >
                  {/* Header: User Profile Details */}
                  <div className="flex items-center gap-3">
                    <div className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0 ring-2 ring-slate-100/50">
                      <img
                        src={card.image || "/avatar-fallback.png"}
                        alt={card.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex flex-col">
                      <h4 className="text-[15px] font-black text-[#0f172a] tracking-tight truncate">
                        {card.name}
                      </h4>
                      <span className="text-[11px] font-medium text-slate-400 mt-0.5">
                        Niche: {card.niche}
                      </span>
                    </div>
                  </div>

                  {/* Split Data Container: Main Split metrics box row */}
                  <div className="grid grid-cols-2  rounded-xl gap-2 relative">

                    {/* Left Segment: Before Data Metrics */}
                    <div className="flex flex-col bg-white border border-[#e8f7ee] rounded-2xl p-4 gap-4 pl-5">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Before</span>
                        <strong className="text-[26px] font-black text-[#1e293b] tracking-tight leading-none">
                          {card.before}
                        </strong>
                        <span className="text-[11px] font-semibold text-slate-400 mt-1">Followers</span>
                      </div>

                      <div className="flex flex-col pt-2">
                        <strong className="text-[18px] font-extrabold text-[#1e293b] tracking-tight leading-none">
                          {card.avgViews}
                        </strong>
                        <span className="text-[11px] font-semibold text-slate-400 mt-1">Avg Views</span>
                      </div>
                    </div>

                    {/* Absolute Central Arrow Indicator */}
                    <div className="absolute left-1/2 top-4 -translate-x-1/2 flex items-center justify-center pointer-events-none text-slate-300">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Right Segment: After Tinted Container */}
                    <div className="flex flex-col bg-[#f4fbf7] border border-[#e8f7ee] rounded-2xl p-4 gap-4 pl-5">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-[#16a34a] uppercase tracking-wider mb-2">After</span>
                        <strong className="text-[26px] font-black text-[#16a34a] tracking-tight leading-none flex items-center gap-1">
                          {card.after}
                          <span className="text-xs text-[#16a34a] font-black">↗</span>
                        </strong>
                        <span className="text-[11px] font-semibold text-[#16a34a]/80 mt-1">Followers</span>
                      </div>

                      <div className="flex flex-col pt-1">
                        <strong className="text-[18px] font-extrabold text-[#16a34a] tracking-tight leading-none">
                          {card.reach}
                        </strong>
                        <span className="text-[11px] font-semibold text-[#16a34a]/80 mt-1">Reach</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Right Navigation Arrow */}
            <button
              onClick={() => { const el = document.getElementById('results-scroll'); if (el) el.scrollBy({ left: 340, behavior: 'smooth' }); }}
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200/80 text-slate-600 flex items-center justify-center hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all z-20 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
            >
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>
        </div>
      </section>

      {/* ─── PROBLEM vs SOLUTION ─── */}
      <section className="pt-10 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT: The Problem */}
          <div className="relative bg-slate-50 border border-black/[0.06] rounded-[20px] p-8 flex flex-col gap-6 shadow-[0_2px_16px_rgba(0,0,0,0.05)] overflow-hidden">

            {/* Red gradient background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,80,80,0.08)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,100,100,0.05)_0%,transparent_60%)] pointer-events-none" />

            {/* Badge */}
            <span className="text-[11px] font-semibold tracking-wide text-slate-500 flex items-center gap-1 relative z-10">
              The Problem 😢
            </span>

            {/* Heading */}
            <h3 className="text-[22px] font-extrabold text-gray-900 leading-snug relative z-10">
              Why Your Main Account<br />
              <span className="text-red-500">Isn't Scaling</span>
            </h3>

            {/* Steps Row */}
            <div className="flex items-center justify-between gap-2 mt-2 flex-wrap relative z-10">

              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.07] flex items-center justify-center text-slate-600 shadow-sm">
                  <PermIdentityOutlined style={{ fontSize: 26 }} />
                </div>
                <span className="text-[11px] text-slate-500 font-medium leading-tight">One<br />Account</span>
              </div>

              <span className="text-slate-300 text-lg font-bold">→</span>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.07] flex items-center justify-center text-slate-600 shadow-sm">
                  <AttachMoneyOutlined style={{ fontSize: 26 }} />
                </div>
                <span className="text-[11px] text-slate-500 font-medium leading-tight">$100K+<br />Spent On Ads</span>
              </div>

              <span className="text-slate-300 text-lg font-bold">→</span>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.07] flex items-center justify-center text-slate-600 shadow-sm">
                  <PeopleAltOutlined style={{ fontSize: 26 }} />
                </div>
                <span className="text-[11px] text-slate-500 font-medium leading-tight">1-2<br />Editors</span>
              </div>

              <span className="text-slate-300 text-lg font-bold">→</span>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.07] flex items-center justify-center text-slate-600 shadow-sm">
                  <FileCopyOutlined style={{ fontSize: 26 }} />
                </div>
                <span className="text-[11px] text-slate-500 font-medium leading-tight">3-6<br />Clips Per Week</span>
              </div>

              <span className="text-red-400 text-lg font-bold">→</span>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 rounded-full bg-red-500 border border-red-600 flex items-center justify-center text-white shadow-md">
                  <DangerousOutlined style={{ fontSize: 30 }} />
                </div>
                <span className="text-[11px] text-red-500 font-bold leading-tight">No<br />Results!</span>
              </div>

            </div>
          </div>

          {/* RIGHT: The Solution */}
          {/* RIGHT: The Solution */}
          <div className="relative bg-slate-100 border border-black/[0.06] rounded-[20px] p-8 flex flex-col gap-6 shadow-[0_2px_16px_rgba(0,0,0,0.05)] overflow-hidden">

            {/* Blue gradient background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,153,255,0.05)_0%,transparent_60%)] pointer-events-none" />

            {/* Badge */}
            <span className="text-[11px] font-semibold tracking-wide text-emerald-600 flex items-center gap-1 relative z-10">
              The Solution ✅
            </span>

            {/* Heading */}
            <h3 className="text-[26px] font-extrabold text-gray-900 leading-snug relative z-10">
              The <span className="text-blue-600">FlexNScale</span> Strategy
            </h3>

            {/* 4 Inner Cards Row */}
            <div className="flex items-stretch gap-3 mt-2 relative z-10">

              {/* Curved arrow SVG underneath
              <svg className="absolute -bottom-2 left-0 w-full h-8 pointer-events-none z-0" viewBox="0 0 400 30" fill="none" preserveAspectRatio="none">
                <path d="M10 15 Q120 40 200 15 Q280 -10 390 15" stroke="#60a5fa" strokeWidth="2" strokeDasharray="0" fill="none" markerEnd="url(#arrowBlue)" />
                <defs>
                  <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                    <path d="M0 0 L6 3 L0 6 Z" fill="#60a5fa" />
                  </marker>
                </defs>
              </svg> */}

              {/* Step 1 */}
              <div className="flex-1 relative bg-slate-50 border border-black/[0.06] rounded-[16px] p-4 flex flex-col justify-between min-h-[160px] overflow-hidden shadow-sm">
                <div className="flex flex-col gap-2">
                  <span className="w-6 h-6 bg-blue-600 rounded-full text-white text-[11px] font-bold flex items-center justify-center">1</span>
                  <span className="text-[13px] text-slate-800 font-semibold leading-snug mt-1">You Send<br />Content</span>
                </div>
                <div className="absolute bottom-3 right-3 text-blue-500 opacity-90">
                  <FileUploadOutlined style={{ fontSize: 38 }} />
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex-1 relative bg-slate-50 border border-black/[0.06] rounded-[16px] p-4 flex flex-col justify-between min-h-[160px] overflow-hidden shadow-sm">
                <div className="flex flex-col gap-2">
                  <span className="w-6 h-6 bg-blue-600 rounded-full text-white text-[11px] font-bold flex items-center justify-center">2</span>
                  <span className="text-[13px] text-slate-800 font-semibold leading-snug mt-1">Campaign<br />Launch</span>
                </div>
                <div className="absolute bottom-3 right-3 text-blue-500 opacity-90">
                  <RocketLaunchOutlined style={{ fontSize: 38 }} />
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex-1 relative bg-slate-50 border border-black/[0.06] rounded-[16px] p-4 flex flex-col justify-between min-h-[160px] overflow-hidden shadow-sm">
                <div className="flex flex-col gap-2">
                  <span className="w-6 h-6 bg-blue-600 rounded-full text-white text-[11px] font-bold flex items-center justify-center">3</span>
                  <span className="text-[13px] text-slate-800 font-semibold leading-snug mt-1">Clippers<br />Edit & Post</span>
                </div>
                <div className="absolute bottom-3 right-3 text-blue-500 opacity-90">
                  <EditNoteOutlined style={{ fontSize: 38 }} />
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex-1 relative bg-slate-50 border border-black/[0.06] rounded-[16px] p-4 flex flex-col justify-between min-h-[160px] overflow-hidden shadow-sm">
                <div className="flex flex-col gap-2">
                  <span className="w-6 h-6 bg-blue-600 rounded-full text-white text-[11px] font-bold flex items-center justify-center">4</span>
                  <span className="text-[13px] text-slate-800 font-semibold leading-snug mt-1">Traffic<br />Flows To You</span>
                </div>
                <div className="absolute bottom-3 right-3 text-blue-500 opacity-90">
                  <BarChartOutlined style={{ fontSize: 38 }} />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── CLIPPING ARMY ─── */}
      <section className="pt-10 w-full">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* Main Banner Container (Removed items-center here) */}
          <div className="bg-slate-50/50 border-b-[2px] border-slate-200 rounded-[32px] p-8 md:p-12 pb-0 md:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-3  overflow-hidden">

            {/* Left Column: Metrics & Heading (Centered vertically via self-center) */}
            <div className="lg:col-span-3 flex flex-col justify-center self-center pb-8 md:pb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                The Clipping Army
              </span>

              <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-[1.15]">
                <span className="text-blue-600 block mb-1">{fmt(clippersCount)}</span>
                Active Clippers <br />
                Ready To Hunt Views
              </h2>

              {/* Avatar Stack */}
              <div className="flex items-center gap-3 mt-8">
                <div className="flex -space-x-3 overflow-hidden">
                  <img className="inline-block h-9 w-9 rounded-full ring-4 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="User 1" />
                  <img className="inline-block h-9 w-9 rounded-full ring-4 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="User 2" />
                  <img className="inline-block h-9 w-9 rounded-full ring-4 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="User 3" />
                  <img className="inline-block h-9 w-9 rounded-full ring-4 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="User 4" />
                  <div className="inline-block h-9 w-9 rounded-full bg-blue-600 ring-4 ring-white flex items-center justify-center text-[0.65rem] font-bold text-white">
                    +{fmt(clippersCount)}
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-semibold tracking-wide uppercase ml-1">
                  Trained. Verified. Ready.
                </span>
              </div>
            </div>

            {/* Center Column: Army Image Graphic (Forced flush to the absolute bottom via self-end) */}
            <div className="lg:col-span-6 flex justify-center items-end self-end w-full">
              <img
                src="/army.png"
                alt="The Clipping Army"
                className="w-full h-auto object-contain max-h-[340px] block select-none pointer-events-none drop-shadow-md transform translate-y-px"
              />
            </div>

            {/* Right Column: Features List (Centered vertically via self-center) */}
            <div className="lg:col-span-3 w-full self-center pb-8 md:pb-12">
              <div className="flex flex-col gap-1">
                {[
                  {
                    title: "Trained Clippers",
                    desc: "Experts in creating viral clips",
                    color: "bg-blue-50 text-blue-600",
                    path: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  },
                  {
                    title: "Multi Platform Posting",
                    desc: "3 Platforms, 3 Accounts, 3 Posts",
                    color: "bg-indigo-50 text-indigo-600",
                    path: "M7 4v16M17 4v16M3 8h18M3 16h18"
                  },
                  {
                    title: "AI Powered System",
                    desc: "Smart distribution & optimization",
                    color: "bg-purple-50 text-purple-600",
                    path: "M9.813 15.904L9 21l-1.813-5.096L2.091 15 7.188 13.187 9 8.091l1.813 5.096 5.096 1.813-5.096 1.813zM19.071 4.929a10 10 0 00-14.142 0M16.243 7.757a6 6 0 00-8.486 0"
                  },
                  {
                    title: "Real Time Tracking",
                    desc: "Live stats & performance",
                    color: "bg-blue-50 text-blue-500",
                    path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2zm9-10v10M9 21h9"
                  }
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100/80 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${feature.color}`}>
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.path} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 leading-snug">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 font-medium">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS MATH ─── */}
      <section className="pt-10 relative z-10 select-none">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Clean Main White Container */}
          <div className="bg-slate-50/50 border border-slate-100 rounded-[24px] p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.02)]">



            {/* 3-Column Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[2.3fr_2fr_1.2fr] gap-8 xl:gap-12 items-center">

              {/* LEFT COLUMN: Main Core Stats */}
              <div className="flex flex-col gap-5 justify-center">
                {/* Label: How It Works ? */}
                <div className="text-[11px] tracking-[0.12em] font-bold uppercase text-slate-400 mb-8">
                  How It Works ?
                </div>
                <ul className="flex flex-col gap-1">
                  {[["3", "Platforms"], ["3", "Accounts"], ["3", "Posts Per Platform"]].map(([n, l]) => (
                    <li key={l} className="text-[28px] md:text-[32px] font-black tracking-tight text-[#1e293b] line-height-[1.2]">
                      <span className="text-[#2563eb] mr-2">{n}</span>{l}
                    </li>
                  ))}
                </ul>

                <div className="inline-flex items-center justify-center px-5 py-2.5 mt-2 rounded-xl text-xs font-bold bg-white text-[#334155] border border-slate-200/80 shadow-sm w-fit">
                  9 Posts Per Clipper
                </div>
              </div>

              {/* MIDDLE COLUMN: Layout Box Math Units */}
              <div className="flex flex-col gap-4 w-full">

                {/* Top Row: Platforms Addition Math Row */}
                <div className="flex items-center justify-between gap-3 bg-white rounded-2xl w-full">
                  <div className="flex items-center gap-3">
                    {[
                      { icon: <TikTokIcon size={20} />, bg: "bg-black", sub: "x3" },
                      { icon: <InstagramIcon size={20} />, bg: "bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600", sub: "x3" },
                      { icon: <YouTubeIcon size={20} />, bg: "bg-[#ef4444]", sub: "x3" },
                    ].map((p, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <span className="text-lg font-bold text-slate-300/90">+</span>}
                        <div className="flex flex-col items-center gap-2 bg-white border border-slate-100/80 p-4 rounded-2xl min-w-[76px] shadow-[0_4px_16px_rgba(0,0,0,0.02)]">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white ${p.bg} shadow-sm`}>
                            {p.icon}
                          </div>
                          <span className="text-[11px] font-bold text-slate-400">{p.sub}</span>
                        </div>
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Equals Outputs Result */}
                  <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
                    <span className="text-xl font-bold text-slate-300">=</span>
                    <div className="flex flex-col items-center">
                      <strong className="text-[36px] font-black text-[#2563eb] leading-none">9</strong>
                      <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 mt-1.5 whitespace-nowrap">Posts Per Clipper</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Core Compound Multiplication Row */}
                <div className="flex items-center justify-between bg-[#f8fafc] border border-slate-50 p-6 rounded-2xl w-full">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <strong className="text-[38px] font-black text-[#2563eb] leading-none">9</strong>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-1">Posts</span>
                    </div>

                    <span className="text-md font-bold text-slate-300">&times;</span>

                    <div className="flex flex-col">
                      <strong className="text-[38px] font-black text-[#1e293b] leading-none">16,000</strong>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-1">Clippers</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pl-4 border-l border-slate-200/60">
                    <span className="text-md font-bold text-slate-300">=</span>
                    <div className="flex flex-col items-start">
                      <strong className="text-[38px] font-black text-[#16a34a] leading-none">144,000</strong>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#16a34a] flex items-center gap-1 mt-1">
                        Clips Daily <span className="text-xs">🔥</span>
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: The Interactive Globe Context Graphic */}
              <div className="flex items-center justify-center lg:justify-end w-full">
                <div className="relative w-[310px] h-[310px] sm:w-[370px] sm:h-[370px] shrink-0 aspect-square">
                  {/* Ambient Radial Soft Light Layer - Scaled up for the larger image */}
                  <div className="absolute inset-[-20px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)] blur-3xl z-0" />

                  {/* Custom Image Resource asset wrapper */}
                  <img
                    src="/glove.png"
                    alt="Global Distribution"
                    className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_16px_48px_rgba(37,99,235,0.14)]"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING / RPM CALCULATOR ─── */}
      <section className="pt-10 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-slate-50/50 border-b-[2px] border-slate-200 rounded-[24px] px-10 py-10">
            <div className="grid grid-cols-7 gap-10 items-center">

              {/* LEFT COLUMN: 2 cols */}
              <div className="col-span-2 flex flex-col gap-4 items-start">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Pricing
                </span>
                <h2 className="text-[2rem] font-extrabold leading-tight text-blue-600">
                  You Only<br />Pay For Results
                </h2>
                <ul className="flex flex-col gap-3 mt-2">
                  {["No Upfront Fees", "No Long Contracts", "No Monthly Retainers"].map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-[15px] text-slate-700 font-medium">
                      <span className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center shrink-0">
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              {/* MIDDLE COLUMN: 3 cols */}
              <div className="col-span-3 bg-slate-50 border-b border-black/[0.08] rounded-[20px] border-slate-200 p-7 flex flex-col gap-5 relative overflow-hidden">
                <h3 className="text-[17px] font-bold text-gray-900">RPM Calculator</h3>

                {/* Views Input */}
                <div className="flex flex-col gap-1.5 w-[55%]">
                  <label className="text-[12px] font-semibold text-slate-500">Enter Views</label>
                  <input
                    type="text"
                    value={views}
                    onChange={handleViewsChange}
                    placeholder="10,000"
                    className="border border-black/[0.1] rounded-xl px-4 py-3 text-gray-900 text-[15px] font-semibold w-full outline-none focus:border-blue-400 transition-all bg-white"
                  />
                </div>

                {/* Estimated Payout */}
                <div className="flex flex-col gap-1 w-[55%]">
                  <span className="text-[12px] font-semibold text-slate-500">Estimated Payout</span>
                  <strong className="text-[32px] font-extrabold text-blue-600 leading-tight">
                    ${payout.toFixed(2)}
                  </strong>
                </div>

                {/* Money image — bottom right overflow */}
                <div className="absolute bottom-0 right-0 w-[220px] h-[220px] pointer-events-none">
                  <img
                    src="/money.png"
                    alt="Money"
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>
              </div>

              {/* RIGHT COLUMN: 2 cols */}
              <div className="col-span-2 flex flex-col gap-3 pl-4 relative overflow-hidden min-h-[200px]">
                <span className="text-[12px] font-semibold text-slate-400">How It Works?</span>
                <div className="flex flex-col gap-1">
                  <p className="text-[20px] font-bold text-gray-900 leading-snug">We get you views.</p>
                  <p className="text-[20px] font-bold text-gray-900 leading-snug">You get paid.</p>
                  <p className="text-[20px] font-bold text-gray-900 leading-snug">It's that simple.</p>
                </div>

                {/* Giant dollar watermark — right side, partially cropped */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="220" height="220" viewBox="0 0 24 24" fill="none" className="opacity-[0.08]">
                    <path
                      d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
                      stroke="#2563eb"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-2 relative z-10 select-none">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Wrapper */}
          <div className="relative pt-[100px] overflow-hidden">

            {/* Rocket */}
            <div className="absolute right-[0px] top-[-150px] h-[500px] w-[340px] md:w-[420px] lg:w-[460px] pointer-events-none z-[999]">
              <img
                src="/rocket.png"
                alt="Rocket Scaling Blast off"
                className="w-full h-full object-contain object-bottom scale-110 origin-bottom-right"
              />
            </div>

            {/* Main Container */}
            <div className="relative w-full bg-[#090d16] border border-white/[0.05]  rounded-[24px] px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-start gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)]">

              {/* LEFT SIDE */}
              <div className="flex flex-col gap-2 max-w-[600px] z-10 text-left">
                <span className="text-[13px] font-semibold text-slate-400 tracking-wide">
                  Ready To Scale Like Never Before?
                </span>

                <h2 className="text-[32px] md:text-[44px] font-black text-white tracking-tight flex items-center gap-3 leading-tight">
                  Start Scaling Today <span className="text-amber-400">⚡</span>
                </h2>

                <p className="text-[14px] text-slate-400 leading-relaxed max-w-[480px] mt-1">
                  Join 16,000+ creators who are already scaling their businesses with
                  the power of the Clipping Army.
                </p>
              </div>
              {/* Vertical Divider */}
              <div className="hidden md:flex relative mx-12 self-stretch shrink-0 items-center">
                {/* Glow */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-24 bg-white/20 blur-md" />

                {/* Line */}
                <div className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              </div>
              {/* RIGHT SIDE */}
              <div className="flex flex-col pl-20 items-start md:items-center gap-4 z-10">
                {/* CTA */}
                <a
                  href="/book-call"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-[15px] text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors duration-300 shadow-lg min-w-[260px] justify-center"
                >
                  Book A Call Now

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="ml-1"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* Social Proof */}
                <div className="flex flex-col items-start md:items-center gap-2">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      {[
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&auto=format&q=80",
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&auto=format&q=80",
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&auto=format&q=80",
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop&auto=format&q=80",
                      ].map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt="Creator Avatar"
                          className="w-6 h-6 rounded-full border-2 border-[#090d16] object-cover"
                        />
                      ))}

                      <div className="h-6 px-2 rounded-full bg-slate-800 border-2 border-[#090d16] text-[10px] font-bold flex items-center justify-center text-slate-300">
                        +16082
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] text-slate-400 font-semibold tracking-wide uppercase">
                    Creators Trust FlexNScale
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
