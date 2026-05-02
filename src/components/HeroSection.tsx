"use client";

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import Image from 'next/image';
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
    <div className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={HeroBanner}
          alt="NZ Landscape"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full flex flex-col items-center mt-12">
        <span className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4 animate-fade-in-up">
          Discover The Extraordinary
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 drop-shadow-lg animate-fade-in-up animation-delay-100">
          Experience the Magic <br /> of NZ Travel & Tours
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light drop-shadow animate-fade-in-up animation-delay-200">
          Tailor-made luxury and adventure tours to the most breathtaking destinations on Earth.
        </p>

        {/* Search Widget */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md p-3 rounded-2xl md:rounded-full shadow-2xl animate-fade-in-up animation-delay-300">
          <form onSubmit={handleSearch} className="bg-white rounded-xl md:rounded-full flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-200 overflow-hidden">

            <div className="flex-1 px-6 py-3 flex flex-col items-start justify-center">
              <label htmlFor="destination" className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Destination</label>
              <input
                type="text"
                id="destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where to?"
                className="w-full text-slate-900 font-medium focus:outline-none bg-transparent placeholder-slate-400"
              />
            </div>

            <div className="flex-1 px-6 py-3 flex flex-col items-start justify-center">
              <label htmlFor="date" className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Date</label>
              <input
                type="text"
                id="date"
                placeholder="When?"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                className="w-full text-slate-900 font-medium focus:outline-none bg-transparent placeholder-slate-400"
              />
            </div>

            <div className="flex-1 px-6 py-3 flex flex-col items-start justify-center">
              <label htmlFor="guests" className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Guests</label>
              <select
                id="guests"
                className="w-full text-slate-900 font-medium focus:outline-none bg-transparent cursor-pointer"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4+">4+ Guests</option>
              </select>
            </div>

            <button type="submit" className="bg-brand text-white px-8 py-4 md:py-0 font-medium hover:bg-brand-dark transition-colors flex items-center justify-center gap-2">
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
