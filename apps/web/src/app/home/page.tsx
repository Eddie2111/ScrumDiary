"use client";
import Hero from './_components/hero'
import Features from './_components/features'
import Testimonials from './_components/testimonial'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
    </div>
  )
}

