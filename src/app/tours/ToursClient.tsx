'use client';

import { useSearchParams } from 'next/navigation';
import TourCard from '@/components/TourCard';
import { Tour } from '@/data/tours';
import { useState, Suspense } from 'react';

interface ToursClientProps {
  initialTours: Tour[];
}

function ToursContent({ initialTours }: { initialTours: Tour[] }) {
  const searchParams = useSearchParams();
  
  const destinationParam = searchParams.get('destination')?.toLowerCase() || '';
  const regionParam = searchParams.get('region') || 'All Destinations';
  const durationParam = searchParams.get('duration') || 'Any Duration';
  const budgetParam = searchParams.get('budget') || 'Any Budget';
  const activityParam = searchParams.get('activity') || 'All Activities';

  // Filter tours
  const filteredTours = initialTours.filter(tour => {
    // Destination string search
    if (destinationParam && !(tour.location || '').toLowerCase().includes(destinationParam) && !(tour.title || '').toLowerCase().includes(destinationParam)) {
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

    // Budget filter
    if (budgetParam !== 'Any Budget') {
      if (budgetParam === 'Under Rs. 420,000' && tour.price >= 420000) return false;
      if (budgetParam === 'Rs. 420k - Rs. 840k' && (tour.price < 420000 || tour.price > 840000)) return false;
      if (budgetParam === 'Rs. 840k+' && tour.price < 840000) return false;
    }

    // Activity filter
    if (activityParam !== 'All Activities') {
      if (tour.activityType !== activityParam.toLowerCase()) return false;
    }

    return true;
  });

  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Filters/Sorting */}
      <div className="mb-12 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-50">
          <div>
            <h3 className="text-xl font-serif text-brand-dark mb-1">Refine Your Search</h3>
            <p className="text-sm text-slate-500">Showing {filteredTours.length} packages found</p>
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden mt-4 w-full md:w-auto flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 px-6 py-2.5 rounded-xl font-semibold border border-slate-200 transition-colors"
          >
            <svg className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        <div className={`p-6 md:p-8 transition-all duration-300 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <form method="GET" action="/tours" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <input type="hidden" name="destination" value={destinationParam} />
            
            <div className="flex flex-col gap-2">
              <label htmlFor="region" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Destination</label>
              <select name="region" id="region" defaultValue={regionParam} className="bg-slate-50 border border-slate-100 text-slate-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent cursor-pointer font-medium text-sm">
                <option value="All Destinations">All Regions</option>
                <option value="South Island">South Island</option>
                <option value="North Island">North Island</option>
                <option value="International">International</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="activity" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Activity Type</label>
              <select name="activity" id="activity" defaultValue={activityParam} className="bg-slate-50 border border-slate-100 text-slate-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent cursor-pointer font-medium text-sm">
                <option value="All Activities">All Types</option>
                <option value="Adventure">Adventure</option>
                <option value="Cultural">Cultural</option>
                <option value="Nature">Nature</option>
                <option value="Relaxation">Relaxation</option>
                <option value="Spiritual">Spiritual</option>
                <option value="City">City Break</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="duration" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Duration</label>
              <select name="duration" id="duration" defaultValue={durationParam} className="bg-slate-50 border border-slate-100 text-slate-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent cursor-pointer font-medium text-sm">
                <option value="Any Duration">Any Length</option>
                <option value="1-3 Days">1-3 Days</option>
                <option value="4-7 Days">4-7 Days</option>
                <option value="8+ Days">8+ Days</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Budget (PKR)</label>
              <select name="budget" id="budget" defaultValue={budgetParam} className="bg-slate-50 border border-slate-100 text-slate-700 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent cursor-pointer font-medium text-sm">
                <option value="Any Budget">Any Budget</option>
                <option value="Under Rs. 420,000">Under Rs. 420,000</option>
                <option value="Rs. 420k - Rs. 840k">Rs. 420k - Rs. 840k</option>
                <option value="Rs. 840k+">Rs. 840k+</option>
              </select>
            </div>

            <div className="flex items-end">
              <button type="submit" className="w-full bg-brand text-white py-3 px-6 rounded-xl font-bold hover:bg-brand-dark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Apply Filters
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tour Grid */}
      {filteredTours.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredTours.map(tour => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-6xl mb-6">🔍</div>
          <h3 className="text-2xl font-serif text-slate-800 mb-2">No packages match your search</h3>
          <p className="text-slate-500 text-lg">Try adjusting your filters or search terms for better results.</p>
          <a href="/tours" className="inline-block mt-8 bg-slate-100 text-brand-dark px-8 py-3 rounded-full font-semibold hover:bg-slate-200 transition-colors">
            Clear all filters
          </a>
        </div>
      )}
    </div>
  );
}

export default function ToursClient({ initialTours }: ToursClientProps) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header - Static Part */}
      <div className="bg-brand-dark py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">Our Premium Packages</h1>
          <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover breathtaking destinations and expertly crafted itineraries. Use the filters below to find your perfect journey.
          </p>
        </div>
      </div>

      {/* Dynamic Part with Suspense */}
      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <div className="inline-block w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-slate-500">Loading your perfect tours...</p>
        </div>
      }>
        <ToursContent initialTours={initialTours} />
      </Suspense>
    </div>
  );
}
