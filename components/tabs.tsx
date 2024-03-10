import Link from "next/link";
import { ReactNode } from "react";
export type Tab = {
  children: ReactNode;
  href: string;
};
export type TabsProps = {
  tabs: Tab[];
};
export default function Tabs({ tabs }: TabsProps) {
  return (
    <ol className="flex items-center  gap-4">
      {tabs.map((tab, index) => (
        <li
          key={index}
          className="text-lg bg-blue-900 px-4 py-1 rounded-lg hover:bg-blue-500 font-bold transition-all"
        >
          <Link href={tab.href}>{tab.children}</Link>
        </li>
      ))}
    </ol>
  );
}
