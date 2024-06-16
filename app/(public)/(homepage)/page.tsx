import Quote from '@/components/general/quotes';
import ApproachSection from '@/components/homepage/approach-section';
import HeroSection from '@/components/homepage/hero-section';
import PersonalGallery from '@/components/homepage/personal-gallery';
import Testimonials from '@/components/homepage/testimonials';
import { getAllReviews } from '@/lib/client-reviews/get-all-reviews';
import fetchContributions from '@/lib/get-contributions';
import { GET_GITHUB_CONTRIBUTIONS } from '@/utils/rq/hooks/useGithubContibutions';
import { GET_USER_REVIEWS } from '@/utils/rq/hooks/useReviews';
import { getQueryClient } from '@/utils/rq/react-query-client';
import { ReactQueryHydrate } from '@/utils/rq/react-query-hydrate';
import { dehydrate } from '@tanstack/react-query';

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_GITHUB_CONTRIBUTIONS],
    queryFn: () => fetchContributions('sheraz4196'),
  });
  await queryClient.prefetchQuery({
    queryKey: [GET_USER_REVIEWS],
    queryFn: () => getAllReviews(),
  });
  return (
    <main className="flex-1 overflow-y-auto 2xl:px-40">
      <HeroSection />
      <PersonalGallery />
      <ReactQueryHydrate hydrate={dehydrate(queryClient)}>
        <Testimonials />
      </ReactQueryHydrate>
      <Quote
        author="Steve Jobs"
        quote="The only way to do great work is to love what you do."
        imgUrl="/assets/authors/steve-jobs.jpg"
        className="my-4 lg:my-6"
      />
      <ApproachSection />
    </main>
  );
}
