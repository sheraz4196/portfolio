import CapaBilitiesSection from '@/components/homepage/capabilities-section';
import HeroSection from '@/components/homepage/hero-section';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <CapaBilitiesSection />
    </main>
  );
}
