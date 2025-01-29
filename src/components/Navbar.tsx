import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white py-4">
      <div className="max-w-4xl mx-auto px-4">
        <ul className="flex gap-8">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          {/* <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
