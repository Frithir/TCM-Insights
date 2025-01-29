import BlogCard from "@/components/BlogCard";
import { BlogPost } from "@/types";

const posts: BlogPost[] = [
  {
    id: 1,
    title: "TCM Approaches to Insomnia",
    excerpt:
      "Discover how Traditional Chinese Medicine views insomnia as an imbalance between yin and yang energies, affecting the Heart and Liver organs. Learn about natural approaches to better sleep...",
    date: "January 29, 2025",
    slug: "tcm-approaches-to-insomnia",
  },
  {
    id: 2,
    title: "Understanding Digestive Health",
    excerpt:
      "Explore how TCM views digestive health as central to overall wellbeing, with the Spleen and Stomach playing crucial roles in transforming food into Qi and Blood...",
    date: "January 29, 2025",
    slug: "understanding-digestive-health",
  },
  {
    id: 3,
    title: "Managing Stress Through TCM",
    excerpt:
      "Learn how TCM associates stress with disruption of Qi flow and how traditional techniques like acupuncture and herbs can help restore balance...",
    date: "January 29, 2025",
    slug: "managing-stress-through-tcm",
  },
];

export default function Home() {
  return (
    <>
      <header className="bg-slate-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Traditional Chinese Medicine Insights
        </h1>
        <p className="text-xl">Ancient Wisdom for Modern Wellness</p>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
