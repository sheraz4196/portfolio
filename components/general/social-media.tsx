import { SocialMediaLinks } from '@/contants';
import Image from 'next/image';
import Link from 'next/link';

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-4">
      {SocialMediaLinks.map((link, index) => (
        <Link
          className="block rounded-lg border bg-zinc-400 p-2 shadow-md shadow-white transition-all hover:bg-primary-600 hover:shadow-primary-600"
          href={link.profileUrl}
          key={index}
        >
          <Image src={link.icon} alt={link.platform} width={30} height={30} />
        </Link>
      ))}
    </div>
  );
}
