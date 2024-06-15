import { Aesthetics } from '@/contants';
import { DirectionAwareHover } from '../ui/direction-awaze-hover';

export default function PersonalGallery() {
  return (
    <section className="p-4 lg:p-6">
      <article className="flex gap-6 pb-24 pt-12">
        {Aesthetics.map((picture, index) => (
          <DirectionAwareHover imageUrl={picture} key={index} />
        ))}
      </article>
    </section>
  );
}
