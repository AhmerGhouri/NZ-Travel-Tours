"use client";

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroBanner from '../../assets/Banner.jpeg'

export default function HeroSection() {
  const router = useRouter();
  const [destination, setDestination] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) {
      params.set('destination', destination);
    }
    router.push(`/tours?${params.toString()}`);
  };

  return (
    <div className="relative min-h-[70vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={HeroBanner}
          alt="Global Travel Landscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full flex flex-col items-center py-12 md:py-0">
        <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 animate-fade-in-up">
          Discover The Extraordinary
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif text-white font-bold mb-6 drop-shadow-lg animate-fade-in-up animation-delay-100 leading-tight">
          Experience the Magic <br className="hidden sm:block" /> of NZ Travel &amp; Tours
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto font-light drop-shadow animate-fade-in-up animation-delay-200 px-4">
          Tailor-made luxury and adventure tours to the most breathtaking destinations across the globe, including New Zealand.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto px-6 sm:px-0 animate-fade-in-up animation-delay-250">
          <Link
            href="/contact"
            className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Plan Your Global Adventure
          </Link>
          <Link
            href="/tours"
            className="bg-white/15 hover:bg-white hover:text-brand-dark backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-white/30 flex items-center justify-center"
          >
            Browse All Tours
          </Link>
        </div>

        {/* Search Widget */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-2 sm:p-3 rounded-2xl md:rounded-full shadow-2xl animate-fade-in-up animation-delay-300 mx-4">
          <form onSubmit={handleSearch} className="bg-white rounded-xl md:rounded-full flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100 overflow-hidden">

            <div className="flex-1 px-5 sm:px-6 py-3 flex flex-col items-start justify-center">
              <label htmlFor="destination" className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Destination</label>
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where to?"
                className="w-full text-slate-900 font-semibold focus:outline-none bg-transparent placeholder-slate-400 text-sm sm:text-base"
              />
            </div>

            <div className="flex-1 px-5 sm:px-6 py-3 flex flex-col items-start justify-center">
              <label htmlFor="date" className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Travel Date</label>
              <input
                type="text"
                id="date"
                placeholder="When?"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full text-slate-900 font-semibold focus:outline-none bg-transparent placeholder-slate-400 text-sm sm:text-base"
              />
            </div>

            <div className="flex-1 px-5 sm:px-6 py-3 flex flex-col items-start justify-center">
              <label htmlFor="guests" className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Guests</label>
              <select
                id="guests"
                className="w-full text-slate-900 font-semibold focus:outline-none bg-transparent cursor-pointer text-sm sm:text-base"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4+">4+ Guests</option>
              </select>
            </div>

            <button type="submit" className="bg-brand text-white px-8 py-4 md:py-0 font-bold hover:bg-brand-dark transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
