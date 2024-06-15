'use client';
import { useReviews } from '@/utils/rq/hooks/useReviews';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { BackgroundGradient } from '../ui/glowing-background';
import Image from 'next/image';

export default function Testimonials() {
  const { data: reviews, isLoading, error } = useReviews();
  return (
    <section className="p-4 lg:p-6">
      <BentoGrid>
        {reviews?.map((review, index) => (
          <BentoGridItem
            key={index}
            header={<Image src={''} alt="" width={150} height={150} />}
            title={review.clientName}
            description={review.review}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
