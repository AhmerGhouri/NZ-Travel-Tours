'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense, useState, FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const interestParam = searchParams.get('interest') || 'Custom Itinerary';
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      formRef.current.reset();
      router.push('/thankyou');
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
      <h3 className="text-2xl font-serif text-brand-dark mb-2">Send an Inquiry</h3>
      <p className="text-slate-500 mb-8">Plan your dream trip with our local experts. No commitment required.</p>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
            <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors" placeholder="John" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
            <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors" placeholder="Doe" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors" placeholder="john@example.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">WhatsApp / Phone</label>
            <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors" placeholder="+64 XXX XXXX" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">Primary Interest</label>
            <select id="interest" name="interest" defaultValue={interestParam} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors bg-white">
              <option value="Custom Itinerary">Custom Itinerary</option>
              <option value="Luxury Lodge Retreat">Luxury Lodge Retreat</option>
              <option value="Adventure & Active">Adventure & Active</option>
              <option value="Family Holiday">Family Holiday</option>
              <option value="Honeymoon / Romantic">Honeymoon / Romantic</option>
              <option value="Umrah Pilgrimage">Umrah Pilgrimage</option>
              <option value="International Tour">International Tour</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">Estimated Budget (PKR)</label>
            <select id="budget" name="budget" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors bg-white">
              <option value="flexible">Flexible / Not Sure</option>
              <option value="under-300000">Under Rs. 300,000</option>
              <option value="300000-800000">Rs. 300,000 - Rs. 800,000</option>
              <option value="800000-1500000">Rs. 800,000 - Rs. 1,500,000</option>
              <option value="1500000+">Rs. 1,500,000+</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="travelDate" className="block text-sm font-medium text-slate-700 mb-2">Planned Travel Date</label>
          <input type="date" id="travelDate" name="travelDate" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors resize-none" placeholder="Tell us about your dream trip..."></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Inquiry — Free Plan'}
        </button>
      </form>
    </div>
  );
}

export default function ContactClient() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-dark py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">Start Your Journey</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Have a question or ready to start planning? Our local experts are here to craft your perfect Global International Travel & Tours itineraries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-8">Get in Touch</h2>
            <p className="text-slate-600 mb-12 text-lg leading-relaxed">
              Whether you are looking for a bespoke luxury escape, an adventurous road trip, or a spiritual pilgrimage, we are dedicated to making every detail perfect. Our team responds to most inquiries within 2–4 hours.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mr-6 shadow-sm">
                  <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-dark mb-2">Our Office</h4>
                  {/* <p className="text-slate-600 leading-relaxed">Level 4, 152 Quay Street<br/>Auckland CBD, 1010<br/>New Zealand</p> */}
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mr-6 shadow-sm">
                  <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-dark mb-2">Email Us</h4>
                  <p className="text-slate-600 text-lg">nztravelsandtours@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mr-6 shadow-sm">
                  <svg className="w-7 h-7 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-brand-dark mb-2">Call & WhatsApp</h4>
                  <p className="text-slate-600 leading-relaxed text-lg">+92 336 3050077<br/>Mon - Sun, 9am - 9pm PKT</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="text-xl font-serif text-brand-dark mb-4">Why Book With Us?</h4>
              <ul className="space-y-4">
                {['100% Tailor-made itineraries', 'Direct expert WhatsApp access', 'Best price guarantee', 'Local knowledge & hidden gems'].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form with Suspense */}
          <Suspense fallback={<div className="bg-white p-8 rounded-2xl animate-pulse h-[600px] shadow-xl border border-slate-100"></div>}>
            <ContactForm />
          </Suspense>

        </div>
      </div>
    </div>
  );
}
