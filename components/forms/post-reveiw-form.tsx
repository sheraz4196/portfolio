import { useForm } from 'react-hook-form';
import { Form } from '../ui/form';
export default function PostReviewForm() {
  const form = useForm();
  return (
    <Form {...form}>
      <form></form>
    </Form>
  );
}
