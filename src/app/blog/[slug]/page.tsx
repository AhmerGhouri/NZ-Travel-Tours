import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | NZ Travels & Tours Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen">
      {/* Article Header */}
      <header className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="bg-brand text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-slate-200 text-sm md:text-base font-medium">
            <div>{post.date}</div>
            <div className="w-1.5 h-1.5 bg-brand rounded-full hidden sm:block"></div>
            <div className="hidden sm:block">{post.readTime}</div>
          </div>
        </div>
      </header>

      {/* Content Area */}
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-brand-dark prose-a:text-brand hover:prose-a:text-brand-dark transition-all">
          <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 border-l-4 border-brand pl-6 italic">
            {post.excerpt}
          </p>
          
          <div className="whitespace-pre-line leading-relaxed text-slate-700">
            {post.content}
          </div>
        </div>

        {/* Share & Newsletter */}
        <div className="mt-20 pt-12 border-t border-slate-100">
          <div className="bg-slate-50 p-8 rounded-3xl md:p-12 text-center">
            <h3 className="text-2xl font-serif text-brand-dark mb-4">Want More Travel Tips?</h3>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Join our community of explorers. We send out monthly destination guides, exclusive deals, and local secrets.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="flex-grow px-6 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand outline-none"
              />
              <button className="bg-brand text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-dark transition-all shadow-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex items-center justify-between">
          <Link href="/blog" className="text-slate-500 hover:text-brand font-bold flex items-center gap-2 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>
          
          <div className="flex gap-4">
            <Link href="/tours" className="text-brand font-bold hover:underline">
              Browse All Packages
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
