import Link from 'next/link';

export const metadata = {
  title: 'Destinations | NZ Travels & Tours',
  description: 'Explore the stunning destinations across New Zealand.',
};

export default function DestinationsPage() {
  const regions = [
    {
      id: "north-island",
      name: "North Island",
      description: "Discover geothermal wonders, Maori culture, and pristine beaches.",
      imageUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "south-island",
      name: "South Island",
      description: "Experience majestic fjords, alpine scenery, and thrilling adventures.",
      imageUrl: "https://images.unsplash.com/photo-1469521669194-babbdf900920?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">Explore Destinations</h1>
          <p className="text-slate-300 text-lg">
            From the sub-tropical North to the alpine South, discover the unique regions of Aotearoa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {regions.map(region => (
            <div key={region.id} className="group relative rounded-2xl overflow-hidden shadow-lg h-[500px]">
              <img 
                src={region.imageUrl} 
                alt={region.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h2 className="text-4xl font-serif text-white font-bold mb-3">{region.name}</h2>
                <p className="text-slate-200 text-lg mb-6">{region.description}</p>
                <Link 
                  href={`/tours?region=${encodeURIComponent(region.name)}`}
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white text-white hover:text-brand-dark backdrop-blur-sm px-6 py-3 rounded-full font-medium transition-all"
                >
                  View Tours
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
