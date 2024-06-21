'use client';
import Link from 'next/link';
import TypewriterComponent from 'typewriter-effect';
import SocialMedia from '../general/social-media';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function HireMeHero() {
  return (
    <section className="grid min-h-[90vh] p-4 lg:grid-cols-2 lg:p-6">
      <div className="flex items-center justify-center lg:justify-start">
        <div className="flex flex-col gap-4 text-center text-3xl lg:gap-6 lg:text-left lg:text-4xl xl:text-5xl">
          <h1>
            Elevate Your <span className="text-primary-600">Business</span>
          </h1>
          <h1>to New Heights</h1>

          <div className="mx-auto flex items-center gap-4 lg:mx-0">
            <Button className="mt-4 max-w-max lg:mt-6" asChild>
              <Link href={'#hire-me'}>Hire Me</Link>
            </Button>
            <Button className="mt-4 max-w-max lg:mt-6" variant={'outline'} asChild>
              <Link href={'/about'}>Learn More About Me</Link>
            </Button>
          </div>
          <SocialMedia className="mx-auto lg:mx-0" />
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center lg:mt-0 lg:justify-self-end">
        <Image
          src={'/assets/general/business.jpg'}
          alt="Team Working"
          width={1200}
          height={500}
          className="h-auto w-auto rounded-xl"
        />
      </div>
    </section>
  );
}
