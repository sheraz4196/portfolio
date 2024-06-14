'use client';
import { useForm } from 'react-hook-form';
import { Form, FormField, FormControl, FormItem, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '../ui/textarea';
const contactFormSchema = z.object({
  name: z.string({ message: 'Please Enter Your Name' }),
  email: z.string().email({ message: 'Please Enter a Valid Email Address' }),
  message: z.string({ message: 'Please Enter Your Message Here' }),
});
export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  return (
    <Form {...form}>
      <form className="grid grid-cols-3 items-center p-4 lg:p-6">
        <div className="col-span-3 h-72 w-72 bg-blue-400 md:col-span-1"></div>
        <div className="col-span-3 flex flex-col gap-4 lg:col-span-2 lg:gap-6">
          <h2 className="lg:text-xl">Enter Your Good Name Here:</h2>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h2 className="lg:text-xl">Enter Your Email Address:</h2>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h2 className="lg:text-xl">Enter Your Message Here:</h2>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="My question is which framework do you prefer to use?"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
