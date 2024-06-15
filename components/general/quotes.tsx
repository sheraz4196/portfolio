import Image from 'next/image';
import { cn } from '@/lib/utils';
export default function Quote({
  imgUrl,
  author,
  quote,
  className,
}: {
  imgUrl: string;
  author: string;
  quote: string;
  className?: string;
}) {
  return (
    <section className="p-4 lg:p-6">
      <blockquote
        className={cn(
          'relative mx-auto max-w-5xl self-center rounded-lg border px-4 py-3',
          className
        )}
      >
        <div className="flex items-center gap-12">
          <Image className="rounded-full" src={imgUrl} alt={author} width={300} height={300} />
          <p className=" text-2xl md:text-4xl">
            <span className="text-7xl">&apos;&apos;</span> {quote}
          </p>
        </div>
        <p className="absolute bottom-0 right-0 p-4 text-lg text-primary-600 md:text-xl">
          -{author}
        </p>
      </blockquote>
    </section>
  );
}
