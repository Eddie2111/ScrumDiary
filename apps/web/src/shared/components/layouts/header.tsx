"use client";
import Link from 'next/link'
import { Button } from '@/shared/components/ui/button'
import { usePathname, useRouter } from 'next/navigation';
import { Card } from '@/shared/components/ui/card';

export default function Header() {
    const router = useRouter();
    const pathname = usePathname()
    const isLoggedIn = false;
  return (
    <div className="border-b border-gray-800 bg-gray-900">
      <Card className="container mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-purple-500">
          ScrumDiary
        </Link>
        <nav className="hidden md:flex space-x-4">
        {isLoggedIn ? (
            <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
            </>
          )}
        </nav>
        <div className="flex space-x-2">
          <Button variant="ghost" className="text-gray-300 hover:text-white" onClick={() => router.push('/login')}>
            {pathname === '/login' ? 'Home' : 'Log in'}
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => router.push('/signup')}>
          {pathname === '/signup' ? 'Home' : 'Sign up'}
          </Button>
        </div>
      </Card>
    </div>
  )
}

