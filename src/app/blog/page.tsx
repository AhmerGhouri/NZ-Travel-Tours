import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export const metadata = {
  title: 'Travel Blog | NZ Travels & Tours',
  description: 'Expert travel tips, destination guides, and spiritual journey insights from the team at NZ Travels & Tours.',
};

export default function BlogPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-brand-dark py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">Travel Insights</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
            Expert advice, local secrets, and stories from the road to help you plan your next extraordinary journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <Link href={`/blog/${post.slug}`} className="relative h-64 overflow-hidden block">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-serif text-brand-dark font-bold mb-4 group-hover:text-brand transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                  </div>
                  
                  <Link href={`/blog/${post.slug}`} className="text-brand font-bold text-sm hover:underline flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
