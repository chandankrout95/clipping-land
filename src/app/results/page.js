"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ResultsPage() {
  const [selectedCase, setSelectedCase] = useState("hormozi");

  const caseStudies = {
    hormozi: {
      name: "Alex Hormozi Clips", niche: "Business & Sales", growth: "+214% in 30 days",
      beforeFollowers: "14,200", afterFollowers: "44,600", views: "1.8M Reach", avgViews: "4.5K per post",
      desc: "By editing long-form business lectures into highly engaging, fast-paced clippable content with dynamic caption styles, the Clipping Army successfully launched 9 accounts that went viral within the first two weeks.",
      chartData: [20, 24, 30, 28, 35, 41, 44],
    },
    gadzhi: {
      name: "Iman Gadzhi Clips", niche: "Self-Improvement & Agency", growth: "+254% in 45 days",
      beforeFollowers: "22,000", afterFollowers: "78,300", views: "2.3M Reach", avgViews: "6.2K per post",
      desc: "For the Agency model niche, clippers created aesthetic visual assets with clean dark-academia aesthetics. The hyper-segmented target audience responded to daily motivational formats, creating massive cross-channel traffic.",
      chartData: [22, 28, 39, 48, 55, 66, 78],
    },
    tate: {
      name: "Andrew Tate Clips", niche: "Motivation & Mindset", growth: "+261% in 30 days",
      beforeFollowers: "18,000", afterFollowers: "65,100", views: "1.9M Reach", avgViews: "5.1K per post",
      desc: "Clippers extracted polarizing mindset quotes from podcast videos, coupling them with cinematic high-contrast background videos. This recipe immediately generated multiple millions of impressions on TikTok.",
      chartData: [18, 22, 33, 44, 52, 59, 65],
    },
  };

  const currentCase = caseStudies[selectedCase];

  const generatePath = (data) => {
    const w = 500, h = 150, xStep = w / (data.length - 1), minV = 10, maxV = 80, range = maxV - minV;
    return data.map((v, i) => `${i * xStep},${h - ((v - minV) / range) * (h - 30) - 15}`).join(" ");
  };

  return (
    <div className="relative py-16 pb-24 overflow-hidden">
      <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none z-0" />

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-primary/10 text-blue-400 border border-primary/25 mb-4">Case Studies</div>
        <h1 className="text-[2.75rem] font-extrabold text-white font-display mb-4">Results Cooked In Our Kitchen</h1>
        <p className="text-lg text-text-secondary max-w-[600px] mx-auto">See how creators are achieving viral distribution, doubling their followings, and scaling their personal brands with the Clipping Army.</p>
      </section>

      {/* Interactive Showroom */}
      <section className="max-w-[1280px] mx-auto px-6 mb-16">
        <div className="glass-card !p-12">
          <div className="flex justify-center gap-4 border-b border-white/5 pb-6 mb-10 flex-wrap">
            {Object.keys(caseStudies).map((key) => (
              <button key={key} onClick={() => setSelectedCase(key)} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCase === key ? "bg-primary text-white border-primary" : "bg-white/[0.02] border border-white/[0.08] text-text-secondary hover:bg-primary hover:text-white hover:border-primary"}`}>
                {caseStudies[key].name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div className="flex flex-col items-start gap-5">
              <span className="text-xs font-bold text-secondary uppercase">{currentCase.niche}</span>
              <h2 className="text-3xl font-extrabold text-white font-display">{currentCase.name}</h2>
              <div className="bg-success/10 text-success border border-success/20 px-3 py-1.5 rounded-full text-sm font-bold">{currentCase.growth}</div>
              <p className="text-text-secondary leading-relaxed">{currentCase.desc}</p>
              <div className="flex gap-8 w-full border-t border-white/5 pt-6 mt-4 flex-wrap">
                {[
                  { label: "Followers Before", val: currentCase.beforeFollowers, cls: "text-white" },
                  { label: "Followers After", val: currentCase.afterFollowers, cls: "text-success" },
                  { label: "Total Reach", val: currentCase.views, cls: "text-blue-500" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <span className="text-xs text-text-muted">{s.label}</span>
                    <strong className={`text-xl font-display ${s.cls}`}>{s.val}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <span className="text-sm text-text-secondary font-semibold">Growth Curve (Followers in Thousands)</span>
                <div className="flex items-center gap-1.5 bg-blue-500/10 text-blue-500 text-[0.7rem] font-bold px-2 py-1 rounded">
                  <span className="live-dot" /><span>Verified</span>
                </div>
              </div>
              <svg width="100%" height="180" viewBox="0 0 500 150" preserveAspectRatio="none" className="overflow-visible">
                <path d={`M 0,150 L ${generatePath(currentCase.chartData)} L 500,150 Z`} fill="url(#cGrad)" opacity="0.2" />
                <polyline fill="none" stroke="#3b82f6" strokeWidth="4" points={generatePath(currentCase.chartData)} strokeLinecap="round" />
                <defs><linearGradient id="cGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#3b82f6" stopOpacity="0" /></linearGradient></defs>
              </svg>
              <div className="flex justify-between text-xs text-text-muted mt-4">
                <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1280px] mx-auto px-6 mb-16">
        <div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-white font-display">What Creators Say</h2><p className="text-text-secondary mt-2">Feedback from professional creators scaling channels globally.</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { text: "The scale is insane. I used to manage two editors and it was a headache. Now I have hundreds of clippers posting daily.", name: "Jason D.", role: "Fitness Influencer", color: "#ec4899" },
            { text: "We got over 5 million views in our first month. The pay-per-results calculation means we only pay when we scale.", name: "Sarah K.", role: "Tech Reviewer", color: "#10b981" },
            { text: "Unbelievable speed. Uploading one long podcast episode generates 30 high-quality shorts distributed by active clippers.", name: "Marcus R.", role: "Podcast Host", color: "#f59e0b" },
          ].map((t, i) => (
            <div key={i} className="glass-card flex flex-col gap-6 justify-between">
              <div className="text-5xl font-display text-primary leading-[0.8] h-5">&ldquo;</div>
              <p className="text-sm text-text-secondary italic leading-relaxed">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: t.color }}>{t.name.split(" ").map((n) => n[0]).join("")}</div>
                <div><h5 className="text-sm font-semibold text-white">{t.name}</h5><span className="text-xs text-text-muted">{t.role}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-6 flex justify-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-4xl font-extrabold text-white font-display">Ready to Cook Your Results?</h2>
          <p className="text-lg text-text-secondary max-w-[480px] text-center">Book a slot today and launch your clipping campaign within 48 hours.</p>
          <Link href="/book-call" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-primary-accent shadow-[0_4px_14px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] transition-all duration-500">Get Started Now</Link>
        </div>
      </section>
    </div>
  );
}
