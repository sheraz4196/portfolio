'use client';
import { NavigationLinks } from '@/contants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Menu } from 'lucide-react';
export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden items-center justify-center lg:flex">
        <ol className="flex items-center justify-center gap-8">
          {NavigationLinks.map((route, index) => (
            <li
              key={index}
              className={`rounded-md text-lg transition-all hover:bg-opacity-50 ${
                route.link === pathname ? 'border bg-primary-950' : 'bg-primary-600'
              }`}
            >
              <Link className="inline-block px-4 py-2" href={route.link}>
                {route.text}
              </Link>
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
                    className={`rounded-md px-4 py-2 text-lg transition-all hover:bg-opacity-50 ${
                      route.link === pathname ? 'text-primary-950' : 'text-primary-600'
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
