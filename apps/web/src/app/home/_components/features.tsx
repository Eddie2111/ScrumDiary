"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Kanban, Users, BarChart3, Zap } from 'lucide-react'

const features = [
  {
    title: 'Customizable Boards',
    description: 'Create and customize boards to fit your unique workflow.',
    icon: Kanban,
  },
  {
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team members in real-time.',
    icon: Users,
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain insights into your productivity with detailed reports.',
    icon: BarChart3,
  },
  {
    title: 'Integrations',
    description: 'Connect with your favorite tools to streamline your work.',
    icon: Zap,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-700 border-gray-600">
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-4 text-purple-500" />
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

