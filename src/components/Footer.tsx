import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div>© 2025 TCM Insights</div>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-300">
            Terms & Conditions
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
