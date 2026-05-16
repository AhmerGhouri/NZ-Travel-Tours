import HeroSection from '@/components/HeroSection';
import TourCard from '@/components/TourCard';
import Link from 'next/link';
import { getFeaturedTours } from '@/lib/cms';

export default async function Home() {
  const featuredTours = await getFeaturedTours();

  return (
    <>
      <HeroSection />

      {/* Featured Destinations Section */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand font-semibold tracking-wider uppercase text-sm mb-2 block">Our Top Picks</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4">Featured Experiences</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
              Handpicked journeys that showcase the very best landscapes, culture, and adventure.
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
      <section className="py-20 md:py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-light/20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">The Najaf Zohaib Travel Difference</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 leading-tight">Why Choose Us?</h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                We don&apos;t just book trips, we craft experiences that stay with you long after you&apos;re home. Our team at NZ Travel &amp; Tours (Najaf Zohaib Travel &amp; Tours) brings local expertise and genuine care to every itinerary we build.
              </p>

              <div className="space-y-5">
                {[
                  { icon: '🎯', title: 'Personalized Travel Planning', desc: 'Every itinerary is tailored to your interests, pace, and budget - no cookie-cutter packages.' },
                  { icon: '💰', title: 'Budget-Friendly Packages', desc: 'Premium experiences at honest prices. We find the best value without cutting corners.' },
                  { icon: '⚡', title: 'Quick Customer Support', desc: 'Fast response on WhatsApp and email. We\'re here when you need us, before and during your trip.' },
                  { icon: '👨‍👩‍👧‍👦', title: 'Custom Itineraries for All', desc: 'Families, couples, solo travellers, groups - we design trips that work for everyone.' },
                  { icon: '🛡️', title: 'Trusted Travel Assistance', desc: 'End-to-end guidance from booking to trip completion. You\'re never on your own.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-first lg:order-last">
              <img
                src="/images/why-journey.png"
                alt="Najaf Zohaib Travel & Tours team guiding travellers through beautiful global landscapes"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Banner */}
      <section className="py-16 bg-brand text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4">Ready to Start Planning?</h2>
          <p className="text-white/80 mb-8 text-base sm:text-lg">Get a free, no-obligation quote for your dream trip. We respond within hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-dark px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-colors shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/6491234567"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
