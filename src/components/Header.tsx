// src/components/Header.tsx
// src/components/Header.tsx
"use client";
import { forwardRef } from "react";
import NavButton from "./NavButton";
import Taglines from "./Taglines";

const Header = forwardRef<HTMLElement>(function Header(_, ref) {
  return (
    <header ref={ref} className="fixed top-0 left-0 w-full z-50">
      <div className="flex flex-col items-start px-6 py-3 bg-neutral-900 shadow">
        <h1 className="text-5xl text-blue-500 font-mono font-bold">Paul Haefeli v2</h1>
        <Taglines />
      </div>
      <nav className="font-mono flex justify-center gap-4 py-4 bg-gray-800">
        <NavButton href="/" label="Home" />
        <NavButton href="/experience" label="Experience" />
        <NavButton href="/skills" label="Skills" />
        <NavButton href="/connect" label="Connect" />
      </nav>
    </header>
  );
});

export default Header;
