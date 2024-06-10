import ApproachSection from '@/components/homepage/approach-section';
import GithubActivity from '@/components/homepage/github-activity';
import HeroSection from '@/components/homepage/hero-section';
import fetchContributions from '@/lib/get-contributions';
import { GET_GITHUB_CONTRIBUTIONS } from '@/utils/rq/hooks/useGithubContibutions';
import { getQueryClient } from '@/utils/rq/react-query-client';
import { ReactQueryHydrate } from '@/utils/rq/react-query-hydrate';

export default async function Home() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_GITHUB_CONTRIBUTIONS],
    queryFn: () => fetchContributions('sheraz4196'),
  });
  return (
    <main className="flex-1 overflow-y-auto 2xl:px-40">
      <ReactQueryHydrate>
        <GithubActivity />
      </ReactQueryHydrate>
      <HeroSection />
      <ApproachSection />
    </main>
  );
}
