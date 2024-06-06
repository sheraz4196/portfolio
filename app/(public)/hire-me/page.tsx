import HireMeForm from '@/components/forms/hire-me';

export default function HireMe() {
  return (
    <main className="flex-1 p-4 lg:p-6">
      <section className="flex items-center justify-center">
        <div className="max-w-5xl">
          <HireMeForm />
        </div>
      </section>
    </main>
  );
}
