import Image from 'next/image';

export const metadata = {
  title: 'About Us | NZ Travels & Tours',
  description: 'Learn about our passion for crafting extraordinary New Zealand travel experiences.',
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        >
          <div className="absolute inset-0 bg-brand-dark/60"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-4">Our Story</h1>
          <p className="text-xl text-slate-200 font-light max-w-2xl mx-auto">
            Born from a deep love for Aotearoa, we are dedicated to sharing its magic with the world.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">Pioneers of Premium Travel</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Founded in 2010, NZ Travels & Tours started with a simple vision: to offer truly immersive, high-quality travel experiences that go beyond the typical tourist trails.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Our team consists of lifelong Kiwis and passionate explorers who have traversed every corner of this beautiful country. We leverage our local knowledge and exclusive partnerships to craft itineraries that reflect the true spirit of New Zealand.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Whether you're seeking adrenaline-pumping adventures in Queenstown, serene luxury lodges in the Bay of Islands, or cultural immersions in Rotorua, we curate journeys that resonate with your unique travel style.
            </p>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1542317826-64670275817c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Our Team in New Zealand" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand-light/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-brand-dark mb-3">Authenticity</h3>
            <p className="text-slate-600">We prioritize genuine experiences and meaningful connections with local communities and nature.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand-light/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-brand-dark mb-3">Excellence</h3>
            <p className="text-slate-600">From the moment you inquire to your journey home, we deliver uncompromising quality and service.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-brand-light/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-semibold text-brand-dark mb-3">Sustainability</h3>
            <p className="text-slate-600">We are committed to the Tiaki Promise, actively protecting New Zealand's environment for future generations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
