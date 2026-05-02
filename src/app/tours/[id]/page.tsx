import { getTourById } from '@/lib/cms';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const tour = await getTourById(resolvedParams.id);
  if (!tour) return { title: 'Tour Not Found | NZ Travels & Tours' };
  
  return {
    title: `${tour.title} | NZ Travels & Tours`,
    description: `Join us for the ${tour.title} in ${tour.location}.`,
  };
}

export default async function TourDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const tour = await getTourById(resolvedParams.id);

  if (!tour) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[60vh] w-full flex items-end pb-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${tour.imageUrl}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              {tour.region}
            </span>
            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {tour.rating}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4 drop-shadow-md">
            {tour.title}
          </h1>
          <div className="flex items-center gap-6 text-slate-200 text-lg">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-brand-dark mb-6">Overview</h2>
            <div className="prose prose-lg text-slate-600 mb-12">
              <p>
                Embark on an unforgettable journey with our {tour.title}. Located in the breathtaking region of {tour.location}, this {tour.durationDays}-day experience is designed to immerse you in the best that the area has to offer.
              </p>
              <p>
                From premium accommodations to expert local guides, every detail has been carefully curated for your comfort and enjoyment. Whether you're seeking adventure, relaxation, or cultural enrichment, this package delivers an exceptional experience.
              </p>
              <h3>Highlights</h3>
              <ul>
                <li>Expertly guided tours and exclusive access.</li>
                <li>Premium boutique accommodations.</li>
                <li>Gourmet dining experiences featuring local cuisine.</li>
                <li>Seamless transportation throughout the itinerary.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-serif text-brand-dark mb-6">Itinerary</h2>
            <div className="space-y-6">
              {[...Array(tour.durationDays)].map((_, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex gap-6">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <span className="w-10 h-10 rounded-full bg-brand/10 text-brand font-bold flex items-center justify-center mb-2">
                      {index + 1}
                    </span>
                    {index < tour.durationDays - 1 && <div className="w-px h-full bg-slate-200"></div>}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Day {index + 1}: Activity Description</h3>
                    <p className="text-slate-600">Enjoy a full day of exploration, dining, and relaxation tailored to highlight the region's best features.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 sticky top-28">
              <div className="flex justify-between items-baseline mb-6 border-b border-slate-100 pb-6">
                <span className="text-slate-500 font-medium">Starting from</span>
                <span className="text-4xl font-bold text-brand-dark">${tour.price}</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-slate-600">
                  <span>Duration</span>
                  <span className="font-medium text-slate-900">{tour.duration}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Group Size</span>
                  <span className="font-medium text-slate-900">2 - 12 People</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tour Type</span>
                  <span className="font-medium text-slate-900">Guided / Premium</span>
                </div>
              </div>

              <Link 
                href={`/contact?interest=${encodeURIComponent(tour.title)}`}
                className="w-full block text-center bg-brand text-white font-semibold py-4 rounded-xl shadow-md hover:bg-brand-dark hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Book This Tour
              </Link>
              
              <p className="text-xs text-slate-400 text-center mt-4">
                No payment required to inquire. Our team will contact you to confirm dates and details.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
