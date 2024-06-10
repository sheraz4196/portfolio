import ApproachSection from '@/components/homepage/approach-section';
import HeroSection from '@/components/homepage/hero-section';
import fetchContributions from '@/lib/get-contributions';

export default async function Home() {
  const contributions = await fetchContributions('sheraz4196');
  console.log(contributions.length);
  return (
    <main className="flex-1 overflow-y-auto 2xl:px-40">
      <pre>{JSON.stringify(contributions, null, 2)}</pre>
      <HeroSection />
      <ApproachSection />
    </main>
  );
}
