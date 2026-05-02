"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo/1.png" alt="NZ Travels & Tours Logo" className="h-12 w-auto" />
              <span className="text-xl font-serif font-bold text-brand-dark tracking-wide hidden sm:block">
                {/* NZ Travels <span className="text-brand">&</span> Tours */}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-600 hover:text-brand font-medium transition-colors">
              Home
            </Link>
            <Link href="/tours" className="text-slate-600 hover:text-brand font-medium transition-colors">
              Tours
            </Link>
            <Link href="/destinations" className="text-slate-600 hover:text-brand font-medium transition-colors">
              Destinations
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-brand font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-brand font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-brand text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-dark transition-colors shadow-md hover:shadow-lg"
            >
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-brand focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link
              href="/"
              className="text-slate-600 font-medium hover:text-brand transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tours"
              className="text-slate-600 font-medium hover:text-brand transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tours
            </Link>
            <Link
              href="/destinations"
              className="text-slate-600 font-medium hover:text-brand transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link
              href="/about"
              className="text-slate-600 font-medium hover:text-brand transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 font-medium hover:text-brand transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-brand text-white px-6 py-3 rounded-md font-medium text-center hover:bg-brand-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Plan Your Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
