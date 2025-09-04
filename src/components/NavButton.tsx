// components/NavButton.tsx
import Link from "next/link";
import { useRouter } from "next/router";

interface NavButtonProps {
  href: string;
  label: string;
}

export default function NavButton({ href, label }: NavButtonProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`
        group relative rounded-md overflow-hidden shadow flex justify-center items-center
        border-2 border-blue-400
        ${isActive ? "border-4 shadow-lg" : "shadow"}
      `}
    >
      {/* Swipe / active overlay */}
      <span
        className={`
          absolute inset-0 bg-blue-400 transition-transform duration-300 ease-out
          ${isActive ? "translate-x-0" : "-translate-x-full"} 
          group-hover:translate-x-0
        `}
      ></span>

      {/* Text */}
      <span
        className={`
          relative z-10 px-4 py-1 text-base font-normal transition-colors duration-200
          ${isActive ? "text-blue-900" : "text-blue-200"} 
          group-hover:text-blue-900
        `}
      >
        {label}
      </span>
    </Link>
  );
}
