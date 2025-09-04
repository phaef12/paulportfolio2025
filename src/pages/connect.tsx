// pages/connect.tsx
import { Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import PageTitle from "@components/PageTitle";

export default function Connect() {
  return (
    <div className="flex flex-col text-white">
      <main className="flex-grow p-6 flex flex-col items-center gap-8">
      <PageTitle>WHOIS paul.haefeli</PageTitle>
      <div className="bg-blue-200 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-md w-full">
        <div className="flex flex-col gap-4">
          {/* LinkedIn */}
          <Link
            href="https://linkedin.com/in/paulhaefeli/"
            target="_blank"
            className="flex items-center gap-3 p-4 rounded-lg bg-neutral-800 text-blue-200 hover:bg-blue-500 hover:text-white transition-colors shadow"
          >
            <Linkedin className="w-6 h-6" />
            <span className="font-medium">LinkedIn</span>
          </Link>

          {/* YouTube */}
          <Link
            href="https://www.youtube.com/@pjh08"
            target="_blank"
            className="flex items-center gap-3 p-4 rounded-lg bg-neutral-800 text-blue-200 hover:bg-red-500 hover:text-white transition-colors shadow"
          >
            <Youtube className="w-6 h-6" />
            <span className="font-medium">YouTube</span>
          </Link>
        </div>
      </div>
       </main>
    </div>
  )
};
