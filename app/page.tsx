import Hero from "./hero-section";
import Trailor from "./trailors-section";
import Header from "./_components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white flex flex-col overflow-auto">
        <Hero />
        <Trailor />
      </main>
    </>
  );
}
