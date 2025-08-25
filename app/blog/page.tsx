"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Justice Lithane",
      date: "March 15, 2025",
      category: "Web Development",
    },
    {
      title: "Mobile App Development Best Practices",
      excerpt: "Learn the essential best practices for building successful mobile applications.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Justice Lithane",
      date: "March 10, 2025",
      category: "Mobile Development",
    },
    {
      title: "Cloud Migration Strategies for Businesses",
      excerpt: "A comprehensive guide to successfully migrating your business to the cloud.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Justice Lithane",
      date: "March 5, 2025",
      category: "Cloud Solutions",
    },
    {
      title: "Digital Marketing in the AI Era",
      excerpt: "How artificial intelligence is transforming digital marketing strategies.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Justice Lithane",
      date: "February 28, 2025",
      category: "Digital Marketing",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-teal-50/30 to-coral-50/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and tips from our technology experts
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-teal-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="p-0">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="text-teal-600 text-sm font-medium mb-2">{post.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-teal-600 to-coral-500 hover:from-teal-700 hover:to-coral-600 text-white">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
