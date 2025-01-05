"use client";
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Software Developer',
    content: 'ScrumDiary has revolutionized our team\'s workflow. It\'s intuitive and powerful!',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Sarah Lee',
    role: 'University Professor',
    content: 'I use ScrumDiary to manage my research projects. It\'s a game-changer for academia.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
  {
    name: 'Michael Chen',
    role: 'HR Manager',
    content: 'ScrumDiary helps us stay organized with hiring processes and employee onboarding.',
    avatar: '/placeholder.svg?height=40&width=40',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

