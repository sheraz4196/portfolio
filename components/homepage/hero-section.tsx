"use client";
import TypewriterComponent from "typewriter-effect";
import { Button } from "../ui/button";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2 p-4 lg:p-6 h-full">
      <div className="flex items-center justify-center">
        <div className="text-3xl text-center lg:text-left lg:text-4xl xl:text-5xl flex flex-col gap-4 lg:gap-6">
          <h1>
            Hi, There! <span>👋</span>
          </h1>
          <h1 className="uppercase">
            I&apos;M <span className="text-primary-600">Sheraz Manzoor</span>,
          </h1>
          <h1 className="uppercase">
            <TypewriterComponent
              options={{
                strings: ["Software Engineer", "Blogger", "Student"],
                autoStart: true,
                loop: true,
                cursor: "|",
              }}
            />
          </h1>
          <Button
            className="text-3xl px-4 py-2 h-auto lg:text-4xl xl:text-5xl max-w-max mt-4 lg:mt-6"
            size={"lg"}
            asChild
          >
            <Link href={"/about"}>Learn More About Me</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="h-96 w-96 bg-primary-700"></div>
      </div>
    </section>
  );
}
