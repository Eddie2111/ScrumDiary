import { Button } from '@/shared/components/ui/button'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Organize Your Work with ScrumDiary
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Create boards, manage tasks, and boost productivity. Perfect for developers, students, teachers, HR professionals, and finance teams.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
          Get Started for Free
        </Button>
      </div>
    </section>
  )
}

