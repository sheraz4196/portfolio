import HireMeForm from '@/components/forms/hire-me';
import HeroSection from '@/components/homepage/hero-section';

export default function Home() {
  return (
    <main className="flex-1 overflow-auto">
      <HeroSection />
      <HireMeForm />
    </main>
  );
}
