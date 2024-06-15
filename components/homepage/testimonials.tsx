'use client';
import { useReviews } from '@/utils/rq/hooks/useReviews';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { BackgroundGradient } from '../ui/glowing-background';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

export default function Testimonials() {
  const { data: reviews, isLoading, error } = useReviews();
  return (
    <section className="p-4 lg:p-6">
      <BentoGrid className="hidden lg:grid">
        {reviews?.map((review, index) => (
          <BentoGridItem
            key={index}
            header={<Image src={''} alt="" width={150} height={150} />}
            title={review.clientName}
            description={review.review}
          />
        ))}
      </BentoGrid>
      <Carousel className="lg:hidden">
        <CarouselContent>
          {reviews?.map((review, index) => (
            <CarouselItem key={index} className="sm:basis-1/2">
              <BackgroundGradient key={index} className="w-full basis-1 rounded-[22px] bg-zinc-900">
                <BentoGridItem
                  key={index}
                  header={
                    <Image
                      src={review.picture || '/avatar.png'}
                      alt={review.picture ? `${review.clientName}'s Photo` : 'Profile Avatar'}
                      width={150}
                      height={150}
                    />
                  }
                  title={review.clientName}
                  description={review.review}
                />
              </BackgroundGradient>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
