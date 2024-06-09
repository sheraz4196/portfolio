import { cn } from '@/lib/utils';

type ContentWriterProps = {
  itemNumber: string;
  title: string;
  description: string;
  className?: string;
};
export default function ContentWriter({
  itemNumber,
  title,
  description,
  className,
}: ContentWriterProps) {
  return (
    <li className={cn('flex items-center gap-5 self-start', className)}>
      <div className="self-start text-xl text-white/70">{itemNumber}</div>
      <p>
        <strong>{title}</strong> {description}
      </p>
    </li>
  );
}
