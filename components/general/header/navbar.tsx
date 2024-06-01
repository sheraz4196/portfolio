"use client";
import { NavigationLinks } from "@/contants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-center">
      <ol className="flex items-center justify-center gap-8">
        {NavigationLinks.map((route, index) => (
          <li
            key={index}
            className={`text-lg px-4 py-2 rounded-md hover:bg-opacity-50 transition-all ${
              route.link === pathname
                ? "bg-primary-950 border"
                : "bg-primary-600"
            }`}
          >
            <Link href={route.link}>{route.text}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
