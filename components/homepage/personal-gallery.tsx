import { Aesthetics } from '@/contants';
import { DirectionAwareHover } from '../ui/direction-awaze-hover';

export default function PersonalGallery() {
  return (
    <section className="flex gap-6 p-4 lg:p-6">
      {Aesthetics.map((picture, index) => (
        <DirectionAwareHover imageUrl={picture} key={index} />
      ))}
    </section>
  );
}
