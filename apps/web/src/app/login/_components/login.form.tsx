'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'
import { Alert, AlertDescription } from '@/shared/components/ui/alert'
import { Loader2 } from 'lucide-react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulating API call
      if (email === 'user@example.com' && password === 'password') {
        router.push('/dashboard') // Redirect to dashboard on successful login
      } else {
        setError('Invalid email or password')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  return(
<form onSubmit={handleSubmit}>
<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email" className="text-gray-200">Email</Label>
    <Input
      id="email"
      type="email"
      placeholder="you@example.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
    />
  </div>
  <div className="space-y-2">
    <Label htmlFor="password" className="text-gray-200">Password</Label>
    <Input
      id="password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
    />
  </div>
  {error && (
    <Alert variant="destructive" className="bg-red-900 border-red-800 text-red-200">
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  )}
  <Button 
    type="submit" 
    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
    disabled={isLoading}
  >
    {isLoading ? (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Logging in...
      </>
    ) : (
      'Log in'
    )}
  </Button>
</div>
</form>)};