import { cn } from '@/lib/utils';
import { Boxes } from '../ui/backgound-boxes';

export default function ToolkitHero() {
  return (
    <div className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-zinc-900 p-4 lg:p-6">
      <div className="pointer-events-none absolute inset-0 z-20 h-full  bg-zinc-900 [mask-image:radial-gradient(transparent,white)]" />

      <Boxes />
      <div className="flex max-w-4xl flex-col gap-6 text-center">
        <h1 className={cn('relative z-20 text-xl text-white md:text-4xl')}>
          Developer&apos;s Toolkit: Essential Tools and Libraries
        </h1>
        <p className="relative z-20 mt-2 text-center text-neutral-300">
          Discover the essential tools and libraries that streamline my development process. From
          powerful frameworks to handy utilities, this curated list covers everything you need to
          enhance your coding efficiency and build impressive projects.
        </p>
      </div>
    </div>
  );
}
