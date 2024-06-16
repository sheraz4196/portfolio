import ContactForm from '@/components/forms/contact-form';
import Link from 'next/link';

export default function ContactMe() {
  return (
    <main className="flex min-h-[90vh] flex-1 items-center justify-center overflow-y-auto 2xl:px-40">
      <section className=" p-4 lg:p-6">
        <h3 className="mb-12 text-3xl font-bold lg:text-6xl">
          Reach Out And <span className="text-primary-600">Connect</span> with me today
        </h3>
        <p className="mx-auto mb-12 max-w-5xl text-center lg:text-xl">
          If you have any questions, comments, or just want to say hello, I&apos;m all ears! Whether
          it&apos;s about a potential project or anything else, feel free to drop me a message using
          the form below. For inquiries related to hiring me for a project or my professional
          services, please check out the <Link href={'/hire-me'}>Hire Me</Link> form. Your message
          is important to me, and I look forward to connecting with you soon.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
