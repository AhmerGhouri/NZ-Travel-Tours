import HeroSection from '@/components/HeroSection';
import TourCard from '@/components/TourCard';
import Link from 'next/link';
import { tours } from '@/data/tours';

export default function Home() {
  const featuredTours = tours.slice(0, 3);

  return (
    <>
      <HeroSection />

      {/* Featured Destinations Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand font-semibold tracking-wider uppercase text-sm mb-2 block">Our Top Picks</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-4">Featured Experiences</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Handpicked journeys that showcase the very best of New Zealand's landscapes, culture, and adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map(tour => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/tours" 
              className="inline-flex items-center justify-center px-8 py-3 border border-brand text-brand hover:bg-brand hover:text-white transition-colors rounded-full font-medium"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-light/20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">The NZ Travels Difference</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Why Journey With Us?</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We don't just book trips; we craft unforgettable memories. With over 15 years of local expertise, our team of New Zealand specialists ensures every detail of your journey is perfect.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Bespoke Itineraries</h4>
                    <p className="text-slate-400">Tailored completely to your preferences, pace, and passions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Local Expert Guides</h4>
                    <p className="text-slate-400">Discover hidden gems only the locals know about with our elite guides.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1578339843615-188ccdf19363?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Hiking in New Zealand" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
