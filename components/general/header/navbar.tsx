"use client";
import { NavigationLinks } from "@/contants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden lg:flex items-center justify-center">
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
      <div className="lg:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Menu />
          </DrawerTrigger>
          <DrawerContent>
            <nav className="flex items-center justify-center">
              <ol className="flex flex-col items-center  justify-center gap-8">
                {NavigationLinks.map((route, index) => (
                  <li
                    key={index}
                    className={`text-lg px-4 py-2 rounded-md hover:bg-opacity-50 transition-all ${
                      route.link === pathname
                        ? "text-primary-950"
                        : "text-primary-600"
                    }`}
                  >
                    <Link href={route.link}>{route.text}</Link>
                  </li>
                ))}
              </ol>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
