"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  // Advanced Calculator state
  const [calcViews, setCalcViews] = useState(50000); // 50k default
  const [calcCPM, setCalcCPM] = useState(1.20); // $1.20 CPM default
  const [selectedNiche, setSelectedNiche] = useState("business");
  const [selectedPlatform, setSelectedPlatform] = useState("all");

  const niches = {
    business: { label: "Business & Sales", multiplier: 1.5 },
    gaming: { label: "Gaming & Streaming", multiplier: 0.8 },
    lifestyle: { label: "Lifestyle & Vlogs", multiplier: 1.1 },
    finance: { label: "Finance & Crypto", multiplier: 2.0 }
  };

  const platforms = {
    all: { label: "All Platforms (TikTok, YT, IG)", multiplier: 1.3 },
    tiktok: { label: "TikTok Only", multiplier: 0.9 },
    youtube: { label: "YouTube Shorts Only", multiplier: 1.1 },
    instagram: { label: "Instagram Reels Only", multiplier: 1.0 }
  };

  const calculatePayout = () => {
    const basePayout = (calcViews / 1000) * calcCPM;
    const nicheMult = niches[selectedNiche].multiplier;
    const platMult = platforms[selectedPlatform].multiplier;
    return basePayout * nicheMult * platMult;
  };

  const plans = [
    {
      badge: "Starter",
      name: "Micro Scale",
      price: "$0 Upfront",
      desc: "Perfect for testing clippers quality with one channel focus.",
      features: [
        "1 Platform Focus",
        "15-20 Active Clippers",
        "Daily Post Feed Queue",
        "Standard Client Dashboard"
      ],
      cta: "Apply Now",
      featured: false
    },
    {
      badge: "Pro scaling",
      name: "Creator Growth",
      price: "$0 Upfront",
      desc: "Our flagship clipping model covering all major platform feeds.",
      features: [
        "3 Platforms Coverage",
        "80-150 Dedicated Clippers",
        "Strategic Hook Optimization",
        "Premium Analytics Suite",
        "Weekly Campaign Manager Reviews"
      ],
      cta: "Start Campaign",
      featured: true
    },
    {
      badge: "Enterprise",
      name: "Brand Takeover",
      price: "Custom",
      desc: "For large agencies, media hubs, and high-frequency content creators.",
      features: [
        "Multi-Niche Synergy Campaign",
        "500+ Coordinated Clippers",
        "White-labeled Dashboard API",
        "Dedicated Account Executives",
        "Custom SLA Agreements"
      ],
      cta: "Contact Enterprise",
      featured: false
    }
  ];

  return (
    <div className="relative py-16 pb-24 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-[5%] left-[5%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[140px] pointer-events-none z-0"></div>

      {/* Hero Header */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 text-sm font-semibold rounded-full border bg-primary-accent/10 text-violet-400 border-violet-500/25 mb-4">
            Pricing Models
          </div>
          <h1 className="text-[2.75rem] font-extrabold text-white mb-4 font-display leading-tight">
            Performance Pricing Model
          </h1>
          <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
            We align clippers payouts directly with the views generated. No monthly retainers, no massive upfront agency bills.
          </p>
        </div>
      </section>

      {/* Advanced RPM Calculator Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-card p-10">
            <h2 className="text-[1.75rem] font-bold text-white mb-2">ROI &amp; Payout Simulator</h2>
            <p className="text-[0.95rem] text-text-secondary mb-10">
              Adjust the variables below to simulate your earnings and campaign payout metrics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
              {/* Sliders and Controls */}
              <div className="flex flex-col gap-8">
                {/* Views Slider */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between font-semibold text-sm text-text-secondary">
                    <label>Target Views Per Month</label>
                    <span className="text-primary font-bold">{calcViews.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="1000000"
                    step="5000"
                    value={calcViews}
                    onChange={(e) => setCalcViews(Number(e.target.value))}
                  />
                </div>

                {/* CPM Slider */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between font-semibold text-sm text-text-secondary">
                    <label>Estimated Base RPM ($)</label>
                    <span className="text-primary font-bold">${calcCPM.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.50"
                    max="5.00"
                    step="0.10"
                    value={calcCPM}
                    onChange={(e) => setCalcCPM(Number(e.target.value))}
                  />
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nicheSelect" className="text-sm text-text-secondary font-semibold">
                      Niche
                    </label>
                    <select
                      id="nicheSelect"
                      value={selectedNiche}
                      onChange={(e) => setSelectedNiche(e.target.value)}
                      className="bg-surface-opaque border border-white/8 rounded-[10px] py-3.5 px-4 text-white text-sm outline-none cursor-pointer [&_option]:bg-[#0b0f19] [&_option]:text-white"
                    >
                      {Object.keys(niches).map((key) => (
                        <option key={key} value={key}>
                          {niches[key].label} (x{niches[key].multiplier})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="platformSelect" className="text-sm text-text-secondary font-semibold">
                      Platform Focus
                    </label>
                    <select
                      id="platformSelect"
                      value={selectedPlatform}
                      onChange={(e) => setSelectedPlatform(e.target.value)}
                      className="bg-surface-opaque border border-white/8 rounded-[10px] py-3.5 px-4 text-white text-sm outline-none cursor-pointer [&_option]:bg-[#0b0f19] [&_option]:text-white"
                    >
                      {Object.keys(platforms).map((key) => (
                        <option key={key} value={key}>
                          {platforms[key].label} (x{platforms[key].multiplier})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Calculator Output */}
              <div className="bg-primary/[0.04] border border-primary/20 rounded-[20px] p-10 text-center flex flex-col items-center gap-4">
                <span className="text-[0.95rem] text-text-secondary font-semibold">Projected Payout</span>
                <strong className="text-[3.5rem] font-extrabold text-blue-400 font-display drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                  ${calculatePayout().toFixed(2)}
                </strong>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Based on {calcViews.toLocaleString()} views, targeting a {niches[selectedNiche].label} niche on {platforms[selectedPlatform].label} distribution setup.
                </p>
                <Link
                  href="/book-call"
                  className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-center inline-block"
                >
                  Lock In This Campaign &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan comparisons */}
      <section className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Campaign Tier Framework</h2>
            <p className="text-text-secondary">Select the baseline scale suited for your current channel reach.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card p-10 flex flex-col items-start gap-5
                  ${plan.featured
                    ? "border-primary shadow-[0_10px_40px_-10px_rgba(37,99,235,0.25)] md:-translate-y-2"
                    : ""
                  }`}
              >
                <span
                  className={`text-xs font-bold uppercase px-2.5 py-1 rounded
                    ${plan.featured
                      ? "bg-gradient-to-r from-primary to-primary-accent text-white"
                      : "bg-white/5 text-text-secondary"
                    }`}
                >
                  {plan.badge}
                </span>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <div className="text-[2.25rem] font-extrabold font-display text-white">{plan.price}</div>
                <p className="text-sm text-text-secondary">{plan.desc}</p>

                <ul className="list-none flex flex-col gap-3.5 border-t border-white/5 pt-5 w-full">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-text-secondary flex items-center gap-2">
                      <span className="text-success font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book-call"
                  className={`w-full mt-4 py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 inline-block
                    ${plan.featured
                      ? "text-white bg-gradient-to-r from-primary to-primary-accent hover:shadow-lg hover:shadow-primary/25"
                      : "text-text-secondary border border-white/10 hover:border-primary hover:text-white bg-transparent"
                    }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
