import Image from 'next/image';
import Link from 'next/link';

interface TourCardProps {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  imageUrl: string;
  rating: number;
}

export default function TourCard({ id, title, location, duration, price, imageUrl, rating }: TourCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 w-full overflow-hidden">
        {/* Placeholder for Next.js Image component, using an img tag for remote placeholder if domain is not configured */}
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
          <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-semibold text-slate-700">{rating}</span>
        </div> */}
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 text-sm text-slate-500 mb-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </div>

        <h3 className="text-xl font-serif font-semibold text-brand-dark mb-2 line-clamp-1 group-hover:text-brand transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            {/* <span className="text-xs text-slate-500 block mb-1">From</span> */}
            {/* <span className="text-xl font-bold text-brand-dark">${price}</span> */}
          </div>
          <Link
            href={`/tours/${id}`}
            className="text-sm font-semibold text-brand hover:text-brand-dark flex items-center gap-1 transition-colors"
          >
            Explore
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
