// components/SocialButton.tsx
interface SocialButtonProps {
  href: string;
  label: string;
}

export default function SocialButton({ href, label }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-block px-6 py-3 bg-blue-200 text-blue-800 font-semibold rounded-md overflow-hidden shadow transition"
    >
      {/* Background hover effect */}
      <span className="absolute inset-0 bg-blue-800 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

      {/* Text label */}
      <span className="relative z-10 group-hover:text-blue-200">
        {label}
      </span>
    </a>
  );
}
