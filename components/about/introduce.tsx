import Link from 'next/link';
import TextBlock from '../general/text-block';
import { Button } from '../ui/button';

export default function Introduce() {
  return (
    <section className="grid min-h-[90vh] p-4 lg:grid-cols-2 lg:p-6">
      <div className="mb-8 flex items-center justify-center lg:mb-0">
        <div className="h-96 w-96 bg-primary-700"></div>
      </div>
      <div className="mb-20 flex items-center justify-center">
        <div>
          <h1 className="mb-4 text-center text-3xl uppercase lg:mb-6 lg:text-4xl xl:text-5xl">
            LET ME <span className="text-primary-600">INTRODUCE,</span> MYSELF
          </h1>
          <div className="flex flex-col gap-4 lg:gap-6">
            <TextBlock
              description={`Greetings, I'm Sherazz Manzoor, a fervent frontend developer originating from the culturally rich city of Gujrat, Pakistan. Born on October 21, 2004, my foray into coding commenced during my 10th standard, fueled by the conviction that real-world experience surpasses the confines of traditional academic degrees.`}
            />
            <TextBlock
              description={`Inspired by my cousin, Faizan Arif, a software engineer, I began my journey into web development in April 2023 while balancing my studies in the 12th standard. With Faizan's support and online courses he purchased for me, I delved into HTML, CSS, and Sass, and then progressed to JavaScript, React, and Next.js. Despite his busy schedule, Faizan was always there to help whenever I was stuck, allowing me to learn frontend development and its frameworks in just eight months.`}
            />
            <TextBlock
              description={`After passing my 12th standard, I decided to leave formal education behind and fully embrace the world of web development. By the end of 2023, I started working with clients, leveraging my skills to create responsive, dynamic web applications. At the start of 2024, I took a significant step in my career by joining Infinity Devs as a frontend developer. Here, I continue to grow, learning new technologies and refining my craft every day.`}
            />
            <TextBlock
              description={`I am passionate about creating exceptional digital experiences and continually seek to push the boundaries of frontend development. Join me as I share insights, tutorials, and tricks to help others navigate the ever-evolving landscape of web technology.`}
            />
            <Button asChild>
              <Link href={''} className="self-start">
                Hire Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
