import Heading from "$/components/Typography/Headings";
import Paragraph from "$/components/Typography/paragraph";

export default function Hero() {
  return (
    <main className="bg-white px-4 py-6">
      <Heading>Hello World</Heading>
      <Paragraph size="large">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et animi
        praesentium rem, debitis deserunt libero soluta assumenda voluptate,
        perspiciatis alias, aspernatur maiores minima dolore doloremque itaque
        voluptates culpa a possimus?
      </Paragraph>
    </main>
  );
}
