import Link from 'next/link';

export const metadata = {
  title: 'Explore Destinations | NZ Travels & Tours',
  description: 'From the North Island geysers to South Island glaciers and international gems like the Maldives and Europe. Plan your next adventure with our local experts.',
  keywords: ['NZ North Island tours', 'NZ South Island tours', 'International travel packages', 'NZ destinations guide'],
};

export default function DestinationsPage() {
  const regions = [
    {
      id: "north-island",
      name: "North Island",
      description: "Discover geothermal wonders, Maori culture, and pristine beaches.",
      imageUrl: "https://images.unsplash.com/photo-1706643154931-fda8c8b2e846?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "south-island",
      name: "South Island",
      description: "Experience majestic fjords, alpine scenery, and thrilling adventures.",
      imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "international",
      name: "International",
      description: "Explore world-class destinations from Umrah to Europe and tropical getaways.",
      imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000",
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-dark py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">Explore the World</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            From the sub-tropical North to the alpine South of Aotearoa, and iconic international destinations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {regions.map(region => (
            <div key={region.id} className="group relative rounded-2xl overflow-hidden shadow-xl h-[500px] border border-slate-100">
              <img 
                src={region.imageUrl} 
                alt={region.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-3">{region.name}</h2>
                <p className="text-slate-200 text-base md:text-lg mb-8 leading-relaxed opacity-90">{region.description}</p>
                <Link 
                  href={`/tours?region=${encodeURIComponent(region.name)}`}
                  className="inline-flex items-center gap-2 bg-brand text-white hover:bg-brand-dark px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
                >
                  View Packages
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
