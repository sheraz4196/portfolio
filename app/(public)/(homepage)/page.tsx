import ApproachSection from '@/components/homepage/approach-section';
import HeroSection from '@/components/homepage/hero-section';

export default function Home() {
  return (
    <main className="flex-1 overflow-y-auto">
      <HeroSection />
      <ApproachSection />
    </main>
  );
}
