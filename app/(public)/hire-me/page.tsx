import HireMeForm from '@/components/forms/hire-me';
import HireMeHero from '@/components/hire-me/hire-me-hero';

export default function HireMe() {
  return (
    <main className="flex-1 overflow-y-auto 2xl:px-40">
      <HireMeHero />
      <section className="flex items-center justify-center" id="hire-me">
        <div className="max-w-5xl">
          <HireMeForm />
        </div>
      </section>
    </main>
  );
}
