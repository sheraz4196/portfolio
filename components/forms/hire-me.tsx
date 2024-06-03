'use client';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const hireMeFormSchema = z.object({
  name: z.string().min(3, { message: 'Please Enter Your Valid Name' }),
  email: z.string().email({ message: 'Please Enter a Valid Email Address' }),
  phoneNumber: z.string().min(6, { message: 'Please Enter a Valid Phone Number' }),
  company: z.string().optional(),
  projectDescription: z
    .string()
    .min(10, { message: 'Please Provide a Detailed Project Description' }),
  budgetRange: z.enum(
    [
      'Less than $1,000',
      '$1,000 - $5,000',
      '$5,000 - $10,000',
      '$10,000 - $20,000',
      'More than $20,000',
    ],
    { message: 'Please Select a Budget Range' }
  ),
  projectDeadline: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), { message: 'Please Enter a Valid Date' }),
  websiteType: z.enum(['Personal Blog', 'Business Website', 'E-commerce', 'Portfolio', 'Other'], {
    message: 'Please Select a Website Type',
  }),
  requiredFeatures: z.array(
    z.enum([
      'Responsive Design',
      'E-commerce Functionality',
      'Contact Form',
      'Blog',
      'SEO Optimization',
      'Other',
    ])
  ),
  currentWebsite: z.string().url().optional(),
  preferredContactMethod: z.enum(['Email', 'Phone', 'Video Call'], {
    message: 'Please Select a Preferred Contact Method',
  }),
  additionalInformation: z.string().optional(),
});
export default function HireMeForm() {
  const BudgetRanges = [
    'Less than $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    'More than $20,000',
  ];
  const RequiredFeatures = [
    'Responsive Design',
    'E-commerce Functionality',
    'Contact Form',
    'Blog',
    'SEO Optimization',
    'Other',
  ];
  const form = useForm({
    resolver: zodResolver(hireMeFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      company: '',
      projectDescription: '',
      budgetRange: 'Less than $1,000',
      projectDeadline: '',
      websiteType: 'Personal Blog',
      requiredFeatures: [],
      currentWebsite: '',
      preferredContactMethod: 'Email',
      additionalInformation: '',
    },
  });
  return (
    <Form {...form}>
      <form className="grid grid-cols-2 gap-4 p-4 lg:gap-8 lg:p-6">
        <h2 className="col-span-2 lg:text-2xl">Enter Basic Info of your project</h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter Your Good Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter Your Email Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter Your Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Company or Organization (Optional)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectDescription"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Textarea
                  placeholder="Describe The Project Purpose and requirements in detail."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <h3>Please select required features.</h3>
        <FormField
          control={form.control}
          name="requiredFeatures"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <div className="flex gap-6">
                  {RequiredFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Checkbox
                        id={feature}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, feature])
                            : field.onChange(field.value?.filter((value) => value !== feature));
                        }}
                      />
                      <FormLabel htmlFor={feature}>{feature}</FormLabel>
                    </div>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budgetRange"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select {...field} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Budget Range" />
                  </SelectTrigger>
                  <SelectContent>
                    {BudgetRanges.map((range, index) => (
                      <SelectItem value={range} key={index}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectDeadline"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Project Deadline" {...field} type="date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currentWebsite"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="URL (Optional)" {...field} />
              </FormControl>
              <FormDescription>Enter Url of your current website if you have.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <h2 className="col-span-2 lg:text-2xl">Additional Information</h2>
        <FormField
          control={form.control}
          name="projectDescription"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Textarea
                  placeholder="Additional Information You want to provide (Optional)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <h3>Prefered Contact Method</h3>
        <FormField
          control={form.control}
          name="currentWebsite"
          render={({ field }) => (
            <FormItem className="bg-red-700">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex items-center gap-4"
                >
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Email" id="mail" />
                        <FormLabel htmlFor="mail">Email</FormLabel>
                      </div>
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Phone" id="phone" />
                        <FormLabel htmlFor="phone">Whatsapp</FormLabel>
                      </div>
                    </FormControl>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
