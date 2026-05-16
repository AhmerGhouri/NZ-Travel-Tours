import Link from 'next/link';
import { Tour } from '@/data/tours';

interface RelatedToursProps {
  currentTourId: string;
  allTours: Tour[];
}

export default function RelatedTours({ currentTourId, allTours }: RelatedToursProps) {
  const currentTour = allTours.find((t) => t.id === currentTourId);
  if (!currentTour) return null;

  // Get tours from the same region, excluding the current one
  const samRegion = allTours
    .filter((t) => t.id !== currentTourId && t.region === currentTour.region)
    .slice(0, 3);

  // If not enough from the same region, fill with other tours
  const otherTours = allTours
    .filter((t) => t.id !== currentTourId && t.region !== currentTour.region)
    .slice(0, 3 - samRegion.length);

  const related = [...samRegion, ...otherTours];

  return (
    <section className="mt-16 pt-12 border-t border-slate-200">
      <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-8">
        Explore More Packages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {related.map((tour) => (
          <Link
            key={tour.id}
            href={`/tours/${tour.id}`}
            className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={tour.imageUrl}
                alt={tour.imageAltTags?.[0] || tour.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-brand-dark group-hover:text-brand transition-colors line-clamp-1">
                {tour.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">{tour.location} · {tour.duration}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        <Link href="/tours" className="text-brand font-medium hover:underline flex items-center gap-1">
          View All Tours →
        </Link>
        <Link href="/contact" className="text-brand font-medium hover:underline flex items-center gap-1">
          Contact NZ Travel &amp; Tours →
        </Link>
      </div>
    </section>
  );
}
