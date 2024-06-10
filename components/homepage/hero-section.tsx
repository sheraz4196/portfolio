'use client';
import TypewriterComponent from 'typewriter-effect';
import { Button } from '../ui/button';
import Link from 'next/link';
export default function HeroSection() {
  return (
    <section className="grid min-h-[90vh] p-4 lg:grid-cols-2 lg:p-6">
      <div className="flex items-center justify-center lg:justify-start">
        <div className="flex flex-col gap-4 text-center text-3xl lg:gap-6 lg:text-left lg:text-4xl xl:text-5xl">
          <h1>
            Hi, There! <span>👋</span>
          </h1>
          <h1 className="uppercase">
            I&apos;M <span className="text-primary-600">Sheraz Manzoor</span>,
          </h1>
          <h1 className="uppercase">
            <TypewriterComponent
              options={{
                strings: ['Software Engineer', 'Blogger', 'Student'],
                autoStart: true,
                loop: true,
                cursor: '|',
              }}
            />
          </h1>
          <div className="flex items-center gap-4">
            <Button className="mt-4 max-w-max lg:mt-6" asChild>
              <Link href={'/hire-me'}>Hire Me</Link>
            </Button>
            <Button className="mt-4 max-w-max lg:mt-6" variant={'outline'} asChild>
              <Link href={'/about'}>Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center lg:mt-0 lg:justify-self-end">
        <div className="h-96 w-96 bg-primary-700"></div>
      </div>
    </section>
  );
}
