import TourCard from '@/components/TourCard';
import { tours } from '@/data/tours';

export const metadata = {
  title: 'Our Tours | NZ Travels & Tours',
  description: 'Explore our premium selection of New Zealand travel packages.',
};

export default async function ToursPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const destinationParam = typeof searchParams.destination === 'string' ? searchParams.destination.toLowerCase() : '';
  const regionParam = typeof searchParams.region === 'string' ? searchParams.region : 'All Destinations';
  const durationParam = typeof searchParams.duration === 'string' ? searchParams.duration : 'Any Duration';

  // Filter tours
  const filteredTours = tours.filter(tour => {
    // Destination string search
    if (destinationParam && !tour.location.toLowerCase().includes(destinationParam) && !tour.title.toLowerCase().includes(destinationParam)) {
      return false;
    }
    
    // Region filter
    if (regionParam !== 'All Destinations') {
      if (tour.region !== regionParam && tour.region !== 'Both') return false;
    }

    // Duration filter
    if (durationParam !== 'Any Duration') {
      if (durationParam === '1-3 Days' && tour.durationDays > 3) return false;
      if (durationParam === '4-7 Days' && (tour.durationDays < 4 || tour.durationDays > 7)) return false;
      if (durationParam === '8+ Days' && tour.durationDays < 8) return false;
    }

    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-brand-dark py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4">Our Premium Tours</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Discover the perfect itinerary for your New Zealand adventure. Filter by destination, duration, or experience type.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Filters/Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
          <form method="GET" action="/tours" className="flex flex-wrap gap-4 mb-4 md:mb-0 w-full md:w-auto items-end">
            <input type="hidden" name="destination" value={destinationParam} />
            <div>
              <label htmlFor="region" className="sr-only">Region</label>
              <select name="region" id="region" defaultValue={regionParam} className="bg-slate-50 border border-slate-200 text-slate-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent">
                <option value="All Destinations">All Destinations</option>
                <option value="South Island">South Island</option>
                <option value="North Island">North Island</option>
              </select>
            </div>
            <div>
              <label htmlFor="duration" className="sr-only">Duration</label>
              <select name="duration" id="duration" defaultValue={durationParam} className="bg-slate-50 border border-slate-200 text-slate-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent">
                <option value="Any Duration">Any Duration</option>
                <option value="1-3 Days">1-3 Days</option>
                <option value="4-7 Days">4-7 Days</option>
                <option value="8+ Days">8+ Days</option>
              </select>
            </div>
            <button type="submit" className="bg-brand text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-dark transition-colors">
              Filter
            </button>
          </form>
          <div className="text-sm text-slate-500 font-medium">
            Showing {filteredTours.length} tours
            {destinationParam && ` for "${destinationParam}"`}
          </div>
        </div>

        {/* Tour Grid */}
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map(tour => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif text-slate-700 mb-2">No tours found</h3>
            <p className="text-slate-500">Try adjusting your filters or search terms.</p>
            <a href="/tours" className="inline-block mt-6 text-brand font-medium hover:underline">Clear all filters</a>
          </div>
        )}

      </div>
    </div>
  );
}
