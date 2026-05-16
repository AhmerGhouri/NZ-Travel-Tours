const benefits = [
  { icon: '🎯', text: 'Customized packages based on your budget' },
  { icon: '🤝', text: 'Professional travel guidance and support' },
  { icon: '📋', text: 'Flexible itinerary options' },
  { icon: '👨‍👩‍👧‍👦', text: 'Family, honeymoon, and group-friendly tours' },
  { icon: '⚡', text: 'Fast response on WhatsApp & Email' },
];

export default function WhyBookWithUs() {
  return (
    <section className="bg-gradient-to-br from-brand-dark to-brand py-16 px-6 rounded-2xl text-white mt-12">
      <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
        Why Book with NZ Travel &amp; Tours?
      </h2>
      <p className="text-slate-200 mb-8 leading-relaxed max-w-2xl">
        We provide personalized travel planning and carefully designed packages to make your journey smooth and stress-free. Our goal is to deliver affordable travel options, flexible itineraries, and complete guidance from booking to trip completion.
      </p>
      <ul className="space-y-4">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-center gap-3 text-lg">
            <span className="text-2xl flex-shrink-0">{b.icon}</span>
            <span className="text-slate-100">{b.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
