import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | NZ Travels & Tours',
  description: 'Find answers to common questions about our NZ tours, booking process, and travel requirements.',
};

const faqs = [
  {
    question: "When is the best time to visit New Zealand?",
    answer: "New Zealand is a year-round destination. Summer (December-February) is ideal for hiking and beaches. Winter (June-August) is perfect for skiing in the South Island. Autumn (March-May) and Spring (September-November) offer beautiful colors and fewer crowds."
  },
  {
    question: "Do I need a visa to visit New Zealand?",
    answer: "Many visitors can enter New Zealand for up to 3-6 months without a visa but must have an NZeTA (New Zealand Electronic Travel Authority). Check the official Immigration New Zealand website for the most up-to-date requirements based on your nationality."
  },
  {
    question: "Are your tours suitable for solo travelers?",
    answer: "Absolutely! Many of our guests travel solo. Our small group tours are a great way to meet like-minded people. We can also arrange private solo tours if you prefer a more personal experience."
  },
  {
    question: "What is included in the tour price?",
    answer: "Generally, our tours include premium accommodation, local transport, professional guides, and specified entry fees. International flights, travel insurance, and personal expenses are usually not included unless specified."
  },
  {
    question: "Can I customize an existing itinerary?",
    answer: "Yes, we specialize in bespoke travel. Any of our listed tours can be modified to suit your preferences, duration, and budget. Just contact our experts to start planning your custom journey."
  },
  {
    question: "Do you handle Umrah and International bookings?",
    answer: "Yes, we have specialized packages for Umrah and various international destinations including Dubai, Maldives, and Singapore. We handle all logistics including visas and local arrangements."
  }
];

export default function FaqPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-brand-dark py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-slate-300 text-lg">Everything you need to know about planning your journey with us.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-brand-dark mb-4 flex items-start gap-3">
                <span className="bg-brand/10 text-brand w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">Q</span>
                {faq.question}
              </h3>
              <div className="flex items-start gap-3 text-slate-600 leading-relaxed pl-11">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Still have questions?</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">Our travel experts are ready to help you plan your perfect trip to New Zealand or beyond.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-brand px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">Contact Us</a>
            <a href="https://wa.me/6491234567" className="bg-brand-dark text-white px-8 py-3 rounded-full font-bold border border-white/20 hover:bg-black/20 transition-colors">WhatsApp Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
