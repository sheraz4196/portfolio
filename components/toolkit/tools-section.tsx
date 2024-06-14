import { Tools } from '@/contants';
import { HoverEffect } from '../ui/card-hover-effect';

export default function ToolsSection() {
  return (
    <section className="p-4 lg:p-6">
      <HoverEffect items={Tools} />
    </section>
  );
}
