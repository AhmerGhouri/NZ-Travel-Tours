import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | NZ Travels & Tours',
  description: 'Thank you for contacting NZ Travels & Tours. We will get back to you shortly.',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-20">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-10 md:p-16 text-center">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6 font-bold">
          Thank You!
        </h1>
        
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
          Your inquiry has been successfully sent. Our travel experts are reviewing your request and will get back to you within 2-4 hours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-8 py-4 bg-brand text-white rounded-xl font-semibold hover:bg-brand-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Return Home
          </Link>
          <Link 
            href="/tours"
            className="px-8 py-4 bg-white text-brand border-2 border-brand rounded-xl font-semibold hover:bg-slate-50 transition-all duration-300"
          >
            Explore More Tours
          </Link>
        </div>
      </div>
    </div>
  );
}
