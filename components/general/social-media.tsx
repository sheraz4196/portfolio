import { SocialMediaLinks } from '@/contants';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
export default function SocialMedia({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {SocialMediaLinks.map((link, index) => (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          key={index}
          className="block rounded-lg border bg-zinc-400 p-2 shadow-md shadow-white transition-all hover:bg-primary-600 hover:shadow-primary-600"
        >
          <Link href={link.profileUrl}>
            <Image src={link.icon} alt={link.platform} width={30} height={30} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
