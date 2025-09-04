"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const taglines = [
  "SELECT * FROM paul.life;",
  "SELECT DISTINCT skills FROM experience;",
  "JOINing technical & management",
  "INSERT INTO known_rdbms VALUES ('SQL Server','PostgreSQL','MySQL','MariaDB');",
  "Committed to optimization, uptime, and scalability",
  "Optimized for performance",
  "Now with fewer deadlocks",
  "High availability, low latency",
  "Oh hi, Mark",
];

export default function Taglines() {
  const pathname = usePathname(); // gets the current route
  const [tagline, setTagline] = useState("");

  useEffect(() => {
    // Pick a random tagline on page load or route change
    const random = taglines[Math.floor(Math.random() * taglines.length)];
    setTagline(random);
  }, [pathname]); // <- dependency ensures update on navigation

  return (
    <p className="text-base text-blue-100 font-mono font-normal px-2">
      {tagline}
    </p>
  );
}
