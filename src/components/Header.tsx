import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-serif font-bold text-brand-dark tracking-wide">
              NZ Travels <span className="text-brand">&</span> Tours
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
            <button className="text-slate-600 hover:text-brand focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
