"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo/1.png" alt="NZ Travels & Tours Logo" className="w-20 h-20 sm:w-24 sm:h-24" />
              {/* <span className="text-lg sm:text-xl font-serif font-bold text-brand-dark tracking-wide hidden lg:block">
                NZ Travels <span className="text-brand">&</span> Tours
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
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
            <Link href="/blog" className="text-slate-600 hover:text-brand font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-brand font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-brand text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-dark transition-colors shadow-md hover:shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-brand focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <div className={`lg:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full transition-all duration-300 ease-in-out origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <nav className="flex flex-col px-6 py-8 space-y-6">
          <Link
            href="/"
            className="text-slate-700 text-lg font-semibold hover:text-brand transition-colors flex items-center justify-between"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </Link>
          <Link
            href="/tours"
            className="text-slate-700 text-lg font-semibold hover:text-brand transition-colors flex items-center justify-between"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tours
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </Link>
          <Link
            href="/destinations"
            className="text-slate-700 text-lg font-semibold hover:text-brand transition-colors flex items-center justify-between"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Destinations
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </Link>
          <Link
            href="/about"
            className="text-slate-700 text-lg font-semibold hover:text-brand transition-colors flex items-center justify-between"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </Link>
          <Link
            href="/blog"
            className="text-slate-700 text-lg font-semibold hover:text-brand transition-colors flex items-center justify-between"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </Link>
          <Link
            href="/contact"
            className="text-slate-700 text-lg font-semibold hover:text-brand transition-colors flex items-center justify-between"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
            <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
          </Link>
          <div className="pt-4">
            <Link
              href="/contact"
              className="bg-brand text-white px-6 py-4 rounded-xl font-bold text-center block hover:bg-brand-dark transition-colors shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
