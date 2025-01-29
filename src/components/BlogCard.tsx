import Link from "next/link";
import { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold text-slate-800 mb-2">{post.title}</h2>
      <div className="text-gray-600 italic mb-4">{post.date}</div>
      <p className="text-gray-600 mb-4">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="inline-block bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700"
      >
        Read More
      </Link>
    </article>
  );
}
