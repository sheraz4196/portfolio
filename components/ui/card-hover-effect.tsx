'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ToolsType } from '@/types/types';
import Image from 'next/image';
import { Button } from './button';
export const HoverEffect = ({ items, className }: { items: ToolsType[]; className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3', className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group relative h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-zinc-500"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <Image
              src={item.logoUrl}
              alt={item.title}
              width={300}
              height={300}
              className="hidden h-auto w-auto"
            />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription className="flex-1">{item.description}</CardDescription>
            <div className="mt-12 flex items-center self-end justify-self-end">
              {item.myBlogUrl && (
                <Button asChild>
                  <Link href={item.myBlogUrl}>Learn More</Link>
                </Button>
              )}
              <Button asChild>
                <Link href={item.docsUrl}> View Doc</Link>
              </Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative z-20 h-full w-full overflow-hidden rounded-2xl border border-white/[0.2] bg-black p-4 group-hover:border-zinc-700',
        className
      )}
    >
      <div className="relative z-50">
        <div className="flex flex-col p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn('mt-4 font-bold tracking-wide text-zinc-100 lg:text-2xl', className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'mt-8 text-sm leading-relaxed tracking-wide text-zinc-400 lg:text-lg',
        className
      )}
    >
      {children}
    </p>
  );
};
