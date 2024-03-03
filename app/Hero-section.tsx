import Heading from "$/components/Typography/Headings";
import Paragraph from "$/components/Typography/paragraph";

export default function Hero() {
  return (
    <main className="grid lg:grid-cols-2 box gap-4">
      <div>
        <Heading size="h1" className="!font-bold !text-4xl">
          Empowering Frontend Developers to Build Exceptional Experiences
        </Heading>
        <Paragraph size="large">
          I am dedicated frontend developer, am on a mission to redefine digital
          experiences. With a keen eye for detail and a passion for cutting-edge
          technologies, I bring creativity and innovation to every project. From
          crafting responsive designs to mastering Next.js, React, and Tailwind
          CSS, I am committed to pushing the boundaries of frontend development.
          Join me on a journey of exploration and expertise as I share insights,
          tutorials, and tricks to elevate your skills in the dynamic world of
          web development.
        </Paragraph>
      </div>
      <div></div>
    </main>
  );
}
