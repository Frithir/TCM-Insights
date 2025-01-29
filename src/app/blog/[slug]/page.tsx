// File: src/app/blog/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../data/posts";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  // Simulate async behavior
  return blogPosts.find((post: { slug: string }) => post.slug === slug);
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="text-slate-800 hover:underline inline-block mb-6"
      >
        ← Back to Home
      </Link>

      <article className="bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">{post.title}</h1>
        <div className="text-gray-600 italic mb-6">{post.date}</div>
        <div className="prose max-w-none">{post.content}</div>
      </article>
    </div>
  );
}

// Add generateStaticParams to optimize static generation
export async function generateStaticParams() {
  return blogPosts.map((post: { slug: any }) => ({
    slug: post.slug,
  }));
}
