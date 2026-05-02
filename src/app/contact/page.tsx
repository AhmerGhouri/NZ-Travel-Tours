export const metadata = {
  title: 'Contact Us | NZ Travels & Tours',
  description: 'Get in touch with our New Zealand travel experts to plan your dream journey.',
};

export default async function ContactPage(props: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParams = await props.searchParams;
  const interestParam = typeof searchParams.interest === 'string' ? searchParams.interest : 'Custom Itinerary';

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">Start Your Journey</h1>
          <p className="text-slate-300 text-lg">
            Have a question or ready to start planning? Our local experts are here to craft your perfect New Zealand itinerary.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif text-brand-dark mb-6">Get in Touch</h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Whether you are looking for a bespoke luxury escape, an adventurous road trip, or a family holiday, we are dedicated to making it unforgettable.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mr-6">
                  <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-dark mb-1">Our Office</h4>
                  <p className="text-slate-600">Level 4, 152 Quay Street<br/>Auckland CBD, 1010<br/>New Zealand</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mr-6">
                  <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-dark mb-1">Email Us</h4>
                  <p className="text-slate-600">nztravelsandtours@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mr-6">
                  <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-dark mb-1">Call Us</h4>
                  <p className="text-slate-600">+64 9 123 4567<br/>Mon - Fri, 9am - 5pm NZST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-serif text-brand-dark mb-6">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">Primary Interest</label>
                <select id="interest" defaultValue={interestParam} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors bg-white">
                  {interestParam !== 'Custom Itinerary' && interestParam !== 'Luxury Lodge Retreat' && interestParam !== 'Adventure & Active' && interestParam !== 'Family Holiday' && interestParam !== 'Honeymoon / Romantic' && (
                    <option value={interestParam}>{interestParam}</option>
                  )}
                  <option value="Luxury Lodge Retreat">Luxury Lodge Retreat</option>
                  <option value="Adventure & Active">Adventure & Active</option>
                  <option value="Family Holiday">Family Holiday</option>
                  <option value="Honeymoon / Romantic">Honeymoon / Romantic</option>
                  <option value="Custom Itinerary">Custom Itinerary</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors resize-none" placeholder="Tell us about your dream trip..."></textarea>
              </div>

              <button type="button" className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
