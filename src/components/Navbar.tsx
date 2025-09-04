import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-blue-200 shadow z-50">
      {/* Name / Title */}
      <div className="flex justify-left px-6 py-4 text-2xl font-bold bg-neutral-900">
        Paul Haefeli 
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-center gap-6 py-2 bg-gray-800">
        <Link href="/" className="font-semibold hover:text-blue-400 transition-colors">
          Home
        </Link>
        <Link href="/experience" className="font-semibold hover:text-blue-400 transition-colors">
          Experience
        </Link>
        <Link href="/connect" className="font-semibold hover:text-blue-400 transition-colors">
          Portfolio
        </Link>
        <Link href="/connect" className="font-semibold hover:text-blue-400 transition-colors">
          Connect
        </Link>
      </nav>
    </header>
  );
}
