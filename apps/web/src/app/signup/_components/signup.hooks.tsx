"use client";

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const signupSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z
      .string()
      .min(1, 'Please confirm your password')
})

export const SignupFormHooks = () => {
    const router = useRouter()
      const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: zodResolver(signupSchema),
      })
      const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
      })
    
      const onSubmit = async (data: z.infer<typeof signupSchema>) => {
        // Simulate API call
        console.log(data);
        try {
          await new Promise((resolve) => setTimeout(resolve, 1500))
          // router.push('/dashboard') // Redirect to dashboard on successful signup
        } catch (error) {
          console.error('Signup failed', error)
        }
      }

    return {
        form,
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        onSubmit
    }
}