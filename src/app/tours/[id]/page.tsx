import { getTourById, getTours } from '@/lib/cms';
import { allTourSeoContent, tours } from '@/data/tours';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TourInquiryForm from '@/components/TourInquiryForm';
import FaqSchema from '@/components/FaqSchema';
import RelatedTours from '@/components/RelatedTours';
import WhyBookWithUs from '@/components/WhyBookWithUs';

export async function generateStaticParams() {
  const allTours = await getTours();
  return allTours
    .filter((tour) => tour && tour.id)
    .map((tour) => ({
      id: tour.id.toString(),
    }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const tour = await getTourById(id.toString());
  if (!tour) return { title: 'Tour Not Found | NZ Travels & Tours' };

  const seo = allTourSeoContent[tour.id];

  return {
    title: seo?.seoTitle || `${tour.title} | NZ Travels & Tours`,
    description: seo?.metaDescription || `Join us for the ${tour.title} in ${tour.location}.`,
  };
}

export default async function TourDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const tour = await getTourById(resolvedParams.id.toString());
  const allTours = await getTours();

  if (!tour) {
    notFound();
  }

  const seo = allTourSeoContent[tour.id];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[65vh] w-full flex items-end pb-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{ backgroundImage: `url('${tour.imageUrl}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
              {tour.region}
            </span>
            {tour.activityType && (
              <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                {tour.activityType}
              </span>
            )}
            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {tour.rating}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4 drop-shadow-md">
            {seo?.h1 || tour.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-slate-200 text-base md:text-lg">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {tour.location}
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {tour.duration}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-slate-600 mb-12">
              <h2 className="text-3xl font-serif text-brand-dark mb-6">Experience Overview</h2>
              {seo?.fullContent ? (
                <div className="whitespace-pre-line mb-8 leading-relaxed">
                  {seo.fullContent}
                </div>
              ) : (
                <p className="mb-8 leading-relaxed">
                  {tour.description || `Embark on an unforgettable journey with our ${tour.title}. Located in the breathtaking region of ${tour.location}, this ${tour.durationDays || 'custom'}-day experience is designed to immerse you in the best that the area has to offer.`}
                </p>
              )}

              {seo?.highlights && (
                <>
                  <h3 className="text-2xl font-serif text-brand-dark mt-10 mb-4">Tour Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-none p-0">
                    {seo.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 m-0">
                        <span className="text-brand mt-1 flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-serif text-brand-dark mb-6">Suggested Itinerary</h2>
              <div className="space-y-6">
                {[...Array(Number(tour.durationDays) || 0)].map((_, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-6">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <span className="w-10 h-10 rounded-full bg-brand/10 text-brand font-bold flex items-center justify-center mb-2">
                        {index + 1}
                      </span>
                      {index < (Number(tour.durationDays) || 0) - 1 && <div className="w-px h-full bg-slate-100"></div>}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Day {index + 1}: Exploration & Discovery</h3>
                      <p className="text-slate-600 leading-relaxed">Your professional guide will coordinate a series of experiences designed to highlight the very best of this destination. All logistics, including premium local transport and entry fees, are handled so you can focus on the journey.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {seo?.faqs && seo.faqs.length > 0 && (
              <FaqSchema faqs={seo.faqs} />
            )}

            <WhyBookWithUs />
            
            <RelatedTours currentTourId={tour.id} allTours={allTours} />
          </div>

          {/* Booking & Inquiry Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex justify-between items-baseline mb-6 border-b border-slate-100 pb-6">
                  <span className="text-slate-500 font-medium">Starting from</span>
                  <span className="text-3xl font-bold text-brand-dark">Rs. {tour.price ? tour.price.toLocaleString() : 'Contact For Details'}</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-slate-600">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Duration
                    </span>
                    <span className="font-medium text-slate-900">{tour.duration}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Group Size
                    </span>
                    <span className="font-medium text-slate-900">2 - 12 People</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Tour Type
                    </span>
                    <span className="font-medium text-slate-900">Premium Guided</span>
                  </div>
                </div>

                <Link
                  href="#inquiry"
                  className="w-full block text-center bg-brand text-white font-semibold py-4 rounded-xl shadow-md hover:bg-brand-dark hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  Book This Tour
                </Link>
                
                <a 
                  href={`https://wa.me/6491234567?text=Hi, I'm interested in the ${tour.title} package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 flex items-center justify-center gap-2 border-2 border-brand text-brand font-semibold py-3 rounded-xl hover:bg-brand hover:text-white transition-all"
                >
                  Chat with Expert
                </a>
              </div>

              <div id="inquiry" className="scroll-mt-28">
                <TourInquiryForm tourTitle={tour.title} compact={true} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
