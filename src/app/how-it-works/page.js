"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    { num: "01", title: "Content Handover", desc: "You connect your raw video files, past streams, or podcast recordings via our secure cloud portal. No need for pre-edits; our team and clippers evaluate all materials." },
    { num: "02", title: "Clipper Allocation", desc: "Your assets are dispatched to clippers in your specific niche (Business, Tech, Gaming, Lifestyle). These clippers are vetted through strict quality checks." },
    { num: "03", title: "Viral Processing", desc: "Clippers add high-retention caption styles, background music sync, split-screen layouts, and visual zooms. They draft at least 3 distinct hook variations per clip." },
    { num: "04", title: "Mass Distribution", desc: "We push clips out across multiple optimized account channels on TikTok, YouTube Shorts, and Instagram Reels. This creates a blanket SEO coverage for your brand." },
  ];

  const faqs = [
    { q: "How does the Clipper Army scale so fast?", a: "Our clippers work on a performance basis. By incentivizing creators to hit views benchmarks, we align clippers' payout directly with your visibility, drawing top talent from all platforms." },
    { q: "Do I need to manage the clippers myself?", a: "No. The entire Clipping Army is managed by our internal system and campaign directors. You just provide content, and we handle scaling, QA, and clippers payouts." },
    { q: "Can clippers post negative or off-brand content?", a: "No. All clippers adhere to strict brand manuals and guidelines. No content goes live without passing through automated and manual moderation checks." },
    { q: "What platforms do clippers target?", a: "We actively optimize distribution for TikTok, YouTube Shorts, and Instagram Reels, as these platforms currently offer the highest organic reach algorithm benefits." },
  ];

  return (
    <div className="relative py-16 pb-24 overflow-hidden">
      <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] rounded-full bg-primary-accent/[0.08] blur-[130px] pointer-events-none z-0" />

      {/* Hero */}
      <section className="max-w-[1280px] mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide bg-secondary/10 text-secondary border border-secondary/20 mb-4">Workflow</div>
        <h1 className="text-[2.75rem] font-extrabold text-white font-display mb-4">How FlexNScale Works</h1>
        <p className="text-lg text-text-secondary max-w-[600px] mx-auto">We turn your raw long-form content into a massive army of short-form videos posting across all platforms, taking organic scaling to the extreme.</p>
      </section>

      {/* Steps */}
      <section className="max-w-[1280px] mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="glass-card flex flex-col gap-4 items-start hover:border-secondary/25 hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.1)] transition-all duration-300">
              <div className="flex items-center gap-4">
                <span className="bg-gradient-to-r from-primary to-primary-accent text-white font-display font-bold text-sm px-3 py-1.5 rounded-lg">{step.num}</span>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-[0.95rem] text-text-secondary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1280px] mx-auto px-6 mb-16">
        <div className="text-center mb-12"><h2 className="text-3xl font-extrabold text-white font-display">Frequently Asked Questions</h2><p className="text-text-secondary mt-2">Everything you need to know about the Clipping Army process.</p></div>
        <div className="max-w-[800px] mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card !p-0 overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full bg-transparent border-none text-white p-6 text-lg font-semibold text-left cursor-pointer flex items-center justify-between outline-none">
                <span>{faq.q}</span>
                <span className={`text-xl text-primary transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>&darr;</span>
              </button>
              <div className={`overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${openFaq === i ? "max-h-[200px]" : "max-h-0"}`}>
                <p className="px-6 pb-6 text-[0.95rem] text-text-secondary leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-6 flex justify-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-4xl font-extrabold text-white font-display">Ready to Scale Your Channels?</h2>
          <p className="text-lg text-text-secondary">Get set up in less than 5 minutes and see your first clips within days.</p>
          <Link href="/book-call" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-primary to-primary-accent shadow-[0_4px_14px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.6)] transition-all duration-500">Launch Your Campaign</Link>
        </div>
      </section>
    </div>
  );
}
