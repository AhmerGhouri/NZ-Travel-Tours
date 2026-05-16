import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | NZ Travels & Tours',
  description: 'Our terms of service and booking conditions for travel packages.',
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-dark py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif text-white font-bold mb-4">Terms & Conditions</h1>
          <p className="text-slate-400">Effective Date: May 6, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">1. Booking and Payment</h2>
            <p>To confirm a booking, a deposit is required at the time of reservation. The remaining balance must be paid in full by the date specified in your booking confirmation, typically 30-60 days before the tour commencement date.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">2. Cancellation Policy</h2>
            <p>Cancellations must be received in writing. The following cancellation fees apply:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>More than 60 days before departure: Loss of deposit.</li>
              <li>31-60 days before departure: 50% of the total tour price.</li>
              <li>30 days or less before departure: 100% of the total tour price.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">3. Travel Insurance</h2>
            <p>It is a condition of booking that all travelers have comprehensive travel insurance covering medical expenses, personal accident, loss of luggage, and trip cancellation.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">4. Liability</h2>
            <p>NZ Travels & Tours acts only as an agent for the various independent suppliers that provide transportation, sightseeing, activities, and hotel accommodations. We are not liable for any injury, damage, loss, or delay due to any act or default of any company or person engaged in transporting passengers or rendering services.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">5. Health and Fitness</h2>
            <p>Travelers are responsible for ensuring they are in good health and possess the physical fitness required for their chosen itinerary. Some tours may involve walking on uneven terrain or light hiking.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">6. Passports and Visas</h2>
            <p>It is the traveler&apos;s responsibility to ensure they hold a valid passport and all necessary visas for the countries being visited.</p>
          </section>

          <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-500 italic">
            These terms are subject to change. Please contact us for the most current version.
          </div>
        </div>
      </div>
    </div>
  );
}
