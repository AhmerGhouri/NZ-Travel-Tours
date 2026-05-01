import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-serif font-bold text-white tracking-wide mb-4 inline-block">
              NZ Travels <span className="text-accent">&</span> Tours
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Curating unforgettable, premium travel experiences across the breathtaking landscapes of New Zealand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-slate-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/tours" className="text-slate-300 hover:text-accent transition-colors">Our Tours</Link></li>
              <li><Link href="/destinations" className="text-slate-300 hover:text-accent transition-colors">Destinations</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact" className="text-slate-300 hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-slate-300 hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link href="/terms" className="text-slate-300 hover:text-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-slate-300 hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-white">Newsletter</h3>
            <p className="text-slate-300 text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 w-full rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button 
                type="submit" 
                className="bg-accent text-brand-dark px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} NZ Travels & Tours. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social Icons Placeholders */}
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
