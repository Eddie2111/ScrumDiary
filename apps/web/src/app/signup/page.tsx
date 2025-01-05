import Link from 'next/link'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card'

import SignupForm from './_components/signup.form'

export default function SignupPage() {

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-purple-500">Sign up for ScrumDiary</CardTitle>
          <CardDescription className="text-center text-gray-400">
            Create your account to start organizing your work
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
        <CardFooter>
          <div className="text-sm text-gray-400 text-center w-full">
            Already have an account?{' '}
            <Link href="/login" className="text-purple-400 hover:text-purple-300">
              Log in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

