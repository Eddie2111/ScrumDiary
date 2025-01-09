'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const LoginFormHooks = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    console.log(data); // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (data.email === 'user@example.com' && data.password === 'password') {
        router.push('/dashboard');
      } else {
        form.setError('email', { message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return {
    form,
    formState: form.formState,
    onSubmit,
  };
};
