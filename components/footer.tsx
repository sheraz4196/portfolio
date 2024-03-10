import Link from "next/link";
type Links = {
  href: string;
  text: string;
};
export type FooterProps = {
  links: Links[];
  copyright: string;
};
export default function Footer({ links, copyright }: FooterProps) {
  return (
    <footer className="px-4 py-2 text-zinc-700 flex flex-col md:flex-row justify-between items-center border-t text-sm md:text-base 2xl:text-lg">
      <p className="font-medium tracking-wider mb-3 md:mb-0">
        &copy; {copyright}
      </p>
      <ol className="flex gap-2 sm:gap-4">
        {links.map((link, index) => (
          <li
            key={`${link}-${index}`}
            className="hover:text-blue-900 font-bold"
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ol>
    </footer>
  );
}
