"use client";

import React, { useState } from "react";

export default function BookCall() {
  const [step, setStep] = useState(1); // 1: Select Date/Time, 2: Fill Details, 3: Confirmed
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Form Fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    channel: "",
    views: "10k-50k"
  });

  const timeSlots = ["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"];

  // Mock June 2026 calendar days
  // June 1 2026 is Monday. We'll start with empty blocks to offset the calendar grid.
  const calendarOffset = 1; // 1 empty block
  const daysInMonth = 30;
  const clickableDays = [16, 17, 18, 19, 22, 23, 24, 25, 26, 29, 30]; // Future weekdays

  const handleDateClick = (day) => {
    if (clickableDays.includes(day)) {
      setSelectedDate(day);
      setSelectedTime(null); // Reset time when changing date
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleNextStep = () => {
    if (selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setStep(3);
    }
  };

  return (
    <div className="relative py-16 pb-24 overflow-hidden">
      {/* Glow circle */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-primary/8 blur-[140px] pointer-events-none z-0"></div>

      {/* Hero */}
      <section className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block px-3 py-1 text-sm font-semibold rounded-full border bg-success/10 text-success border-success/25 mb-4">
            Scheduling
          </div>
          <h1 className="text-[2.75rem] font-extrabold text-white mb-4 font-display leading-tight">
            Schedule Your Scaling Strategy Call
          </h1>
          <p className="text-lg text-text-secondary max-w-[600px] mx-auto">
            Pick a time that works for you, and align with a senior campaign strategist to map out your short-form domination strategy.
          </p>
        </div>
      </section>

      {/* Scheduler */}
      <section className="py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-card max-w-[850px] mx-auto p-10">

            {/* Step 1: Calendar & Timeslots */}
            {step === 1 && (
              <div className="w-full grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 animate-fade-in">
                {/* Calendar Column */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">June 2026</h3>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 mt-4">
                    {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                      <span key={d} className="text-xs font-bold text-text-muted text-center py-1">
                        {d}
                      </span>
                    ))}

                    {/* Empty padding blocks */}
                    {Array.from({ length: calendarOffset }).map((_, i) => (
                      <div key={`empty-${i}`} className="aspect-square"></div>
                    ))}

                    {/* June Days */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const dayNum = i + 1;
                      const isClickable = clickableDays.includes(dayNum);
                      const isSelected = selectedDate === dayNum;

                      return (
                        <button
                          key={`day-${dayNum}`}
                          className={`aspect-square rounded-lg text-sm font-semibold flex items-center justify-center transition-all duration-300 border
                            ${isSelected
                              ? "bg-gradient-to-r from-primary to-primary-accent text-white border-primary shadow-[0_4px_10px_rgba(37,99,235,0.3)]"
                              : isClickable
                                ? "cursor-pointer text-text-primary bg-white/3 border-white/8 hover:bg-primary/20 hover:border-primary"
                                : "cursor-not-allowed text-text-muted bg-white/[0.01] border-white/[0.03]"
                            }`}
                          disabled={!isClickable}
                          onClick={() => handleDateClick(dayNum)}
                        >
                          {dayNum}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Timeslots Column */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Available Slots</h3>
                  <p className="text-sm text-text-secondary mb-6">Select a time after selecting your preferred date.</p>

                  <div className="flex flex-col gap-3.5 mb-8">
                    {timeSlots.map((time) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          className={`w-full py-3.5 px-4 rounded-[10px] font-semibold transition-all duration-300 outline-none border
                            ${isSelected
                              ? "bg-primary text-white border-primary"
                              : !selectedDate
                                ? "opacity-50 cursor-not-allowed bg-white/[0.02] border-white/8 text-text-secondary"
                                : "cursor-pointer bg-white/[0.02] border-white/8 text-text-secondary hover:border-primary hover:text-white hover:bg-primary/5"
                            }`}
                          disabled={!selectedDate}
                          onClick={() => handleTimeClick(time)}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300
                      ${selectedDate && selectedTime
                        ? "bg-gradient-to-r from-primary to-primary-accent hover:shadow-lg hover:shadow-primary/25 cursor-pointer"
                        : "bg-primary/30 cursor-not-allowed opacity-60"
                      }`}
                    disabled={!selectedDate || !selectedTime}
                    onClick={handleNextStep}
                  >
                    Confirm Date &amp; Time &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Information Form */}
            {step === 2 && (
              <div className="w-full animate-fade-in">
                <div className="flex justify-between items-center border-b border-white/5 pb-6 mb-8">
                  <button
                    className="bg-transparent border-none text-text-secondary font-semibold text-[0.95rem] cursor-pointer transition-colors duration-300 hover:text-white"
                    onClick={() => setStep(1)}
                  >
                    &larr; Back
                  </button>
                  <div className="bg-primary/8 border border-primary/20 px-3.5 py-1.5 rounded-full text-sm font-bold text-blue-400">
                    📅 June {selectedDate}, 2026 at {selectedTime}
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-bold text-white mb-6">Tell Us About Your Brand</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nameInput" className="text-sm text-text-secondary font-semibold">
                        Full Name
                      </label>
                      <input
                        id="nameInput"
                        type="text"
                        name="name"
                        required
                        className="bg-white/[0.02] border border-white/8 rounded-[10px] py-3.5 px-4 text-white text-[0.95rem] outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_10px_rgba(37,99,235,0.2)]"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="emailInput" className="text-sm text-text-secondary font-semibold">
                        Email Address
                      </label>
                      <input
                        id="emailInput"
                        type="email"
                        name="email"
                        required
                        className="bg-white/[0.02] border border-white/8 rounded-[10px] py-3.5 px-4 text-white text-[0.95rem] outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_10px_rgba(37,99,235,0.2)]"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="channelInput" className="text-sm text-text-secondary font-semibold">
                        Channel / Website URL
                      </label>
                      <input
                        id="channelInput"
                        type="text"
                        name="channel"
                        className="bg-white/[0.02] border border-white/8 rounded-[10px] py-3.5 px-4 text-white text-[0.95rem] outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_10px_rgba(37,99,235,0.2)]"
                        placeholder="youtube.com/@mybrand"
                        value={formData.channel}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="viewsSelect" className="text-sm text-text-secondary font-semibold">
                        Estimated Monthly Views
                      </label>
                      <select
                        id="viewsSelect"
                        name="views"
                        className="bg-white/[0.02] border border-white/8 rounded-[10px] py-3.5 px-4 text-white text-[0.95rem] outline-none transition-all duration-300 cursor-pointer focus:border-primary focus:shadow-[0_0_10px_rgba(37,99,235,0.2)] [&_option]:bg-[#0b0f19] [&_option]:text-white"
                        value={formData.views}
                        onChange={handleFormChange}
                      >
                        <option value="under-10k">Under 10,000 views</option>
                        <option value="10k-50k">10,000 - 50,000 views</option>
                        <option value="50k-200k">50,000 - 200,000 views</option>
                        <option value="over-200k">Over 200,000 views</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-primary to-primary-accent hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer"
                  >
                    Complete Schedule Booking
                  </button>
                </form>
              </div>
            )}

            {/* Step 3: Confirmation Screen */}
            {step === 3 && (
              <div className="w-full flex flex-col items-center gap-6 max-w-[500px] mx-auto text-center animate-fade-in">
                <div className="w-[72px] h-[72px] rounded-full bg-success/10 text-success border-2 border-success flex items-center justify-center mb-2">
                  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h2 className="text-3xl font-extrabold text-white">Booking Confirmed!</h2>
                <p className="text-lg text-text-secondary leading-relaxed text-center">
                  Your strategy call has been locked in for <strong className="text-white">June {selectedDate}, 2026 at {selectedTime}</strong>.
                </p>

                <div className="glass-card w-full p-8 text-left bg-white/[0.015] flex flex-col gap-3 mt-4">
                  <h4 className="text-lg font-bold text-white">Calendar Invite Details</h4>
                  <p className="text-sm text-text-secondary">
                    Check <strong className="text-white">{formData.email}</strong> for instructions and Google Meet link invitation.
                  </p>

                  <div className="flex gap-8 border-t border-white/5 pt-4 mt-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-text-muted">Host:</span>
                      <strong className="text-[0.95rem] text-text-primary">FlexNScale Strategy</strong>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-text-muted">Duration:</span>
                      <strong className="text-[0.95rem] text-text-primary">30 Minutes</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}
