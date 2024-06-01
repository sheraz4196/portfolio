import { NavigationLinks } from "@/contants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 lg:p-6 border-t flex items-center justify-between">
      <p className="flex-1">&copy; Sheraz Manzoor, All rights reserved.</p>
      <nav className="flex-1">
        <ol className="flex items-center justify-between">
          {NavigationLinks.map((route, index) => (
            <li key={index}>
              <Link href={route.link}>{route.text}</Link>
            </li>
          ))}
        </ol>
      </nav>
      <nav className="flex-1">
        <ol className="flex items-center justify-between">
          <li>
            <Link href={""}></Link>
          </li>
        </ol>
      </nav>
    </footer>
  );
}
