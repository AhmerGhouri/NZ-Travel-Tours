import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | NZ Travels & Tours',
  description: 'How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-dark py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif text-white font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last Updated: May 6, 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
          <p className="lead text-lg text-slate-600 mb-10">At NZ Travels & Tours, we are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner.</p>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us when you make an inquiry or booking. This may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Passport details (for bookings requiring international travel)</li>
              <li>Payment information (processed securely via third-party providers)</li>
              <li>Travel preferences and special requirements</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your bookings and manage your travel arrangements</li>
              <li>Communicate with you regarding your inquiries or bookings</li>
              <li>Send you newsletters and promotional materials (with your consent)</li>
              <li>Improve our services and website experience</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">3. Data Sharing</h2>
            <p>We share your information only with third-party service providers (such as hotels, airlines, and local tour operators) as necessary to complete your travel arrangements. We do not sell your personal data to third parties.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">4. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or disclosure.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at nztravelsandtours@gmail.com.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif text-brand-dark mb-4">6. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience and analyze traffic. You can adjust your browser settings to refuse cookies if you prefer.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
