import { SkillsSet } from '@/contants';

export default function SkillsSection() {
  return (
    <section className="p-4 lg:p-6">
      <h3 className="mb-12 text-3xl font-bold lg:text-6xl">
        Mastering the Craft: <span className="text-primary-600">My Skill Set</span>
      </h3>
      <p className=" mb-12 max-w-5xl lg:text-xl">
        In my journey as a developer, I have honed a diverse set of skills that enable me to tackle
        a wide range of projects. From front-end design to back-end development, I am equipped with
        the tools and knowledge necessary to bring your vision to life. Here are the key skills that
        I bring to the table, each one sharpened through years of experience and continuous
        learning.
      </p>
      <ol>
        {SkillsSet.map((skill, key) => (
          <li className="mb-2 list-inside list-disc text-xl" key={key}>
            {skill}
          </li>
        ))}
      </ol>
    </section>
  );
}
