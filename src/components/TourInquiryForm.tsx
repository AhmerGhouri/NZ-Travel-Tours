'use client';

import { useState, FormEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';

interface TourInquiryFormProps {
  tourTitle?: string;
  compact?: boolean;
}

export default function TourInquiryForm({ tourTitle, compact = false }: TourInquiryFormProps) {
  const router = useRouter();
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
    <div className={`bg-white ${compact ? 'p-5' : 'p-6 md:p-8'} rounded-2xl shadow-xl border border-slate-100`}>
      <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-serif text-brand-dark mb-1`}>
        Get a Free Quote
      </h3>
      <p className="text-sm text-slate-500 mb-5">No payment required. We&apos;ll plan your perfect trip.</p>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}
        <div>
          <label htmlFor="inquiry-name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
          <input
            type="text" id="inquiry-name" name="firstName" required
            placeholder="Your full name"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="inquiry-whatsapp" className="block text-sm font-medium text-slate-700 mb-1">WhatsApp Number</label>
            <input
              type="tel" id="inquiry-whatsapp" name="phone" required
              placeholder="+64 XXX XXXX"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors text-sm"
            />
          </div>
          <div>
            <label htmlFor="inquiry-email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email" id="inquiry-email" name="email" required
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="inquiry-date" className="block text-sm font-medium text-slate-700 mb-1">Travel Date</label>
            <input
              type="date" id="inquiry-date" name="travelDate"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors text-sm"
            />
          </div>
          <div>
            <label htmlFor="inquiry-people" className="block text-sm font-medium text-slate-700 mb-1">No. of People</label>
            <select
              id="inquiry-people" name="people"
              defaultValue="2"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors text-sm bg-white"
            >
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3-4">3–4 People</option>
              <option value="5-8">5–8 People</option>
              <option value="9+">9+ People</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="inquiry-destination" className="block text-sm font-medium text-slate-700 mb-1">Destination</label>
          <input
            type="text" id="inquiry-destination" name="interest"
            defaultValue={tourTitle || ''}
            placeholder="Where would you like to go?"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors text-sm"
          />
        </div>

        <div>
          <label htmlFor="inquiry-budget" className="block text-sm font-medium text-slate-700 mb-1">Budget Range (PKR)</label>
          <select
            id="inquiry-budget" name="budget"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors text-sm bg-white"
          >
            <option value="flexible">Flexible / Not Sure</option>
            <option value="under-300000">Under Rs. 300,000</option>
            <option value="300000-800000">Rs. 300,000 – Rs. 800,000</option>
            <option value="800000-1500000">Rs. 800,000 – Rs. 1,500,000</option>
            <option value="1500000+">Rs. 1,500,000+</option>
          </select>
        </div>

        <div>
          <label htmlFor="inquiry-message" className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
          <textarea
            id="inquiry-message" name="message" rows={3}
            placeholder="Any special requests or questions?"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-colors resize-none text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3.5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Inquiry — It\'s Free'}
        </button>
        <p className="text-xs text-slate-400 text-center">
          We typically respond within 2–4 hours on WhatsApp
        </p>
      </form>
    </div>
  );
}
