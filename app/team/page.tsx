"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail, Shield, Brain, TrendingUp, Code } from "lucide-react"

export default function TeamPage() {
  const team = [
    {
      name: "Keketso Justice Lithane",
      role: "Digitalization & Business Development Lead",
      type: "External Advisor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Driving innovation and strategic partnerships to accelerate inclusive digital transformation.",
      icon: <TrendingUp className="w-6 h-6" />,
      specialty: "Digital Strategy & Partnerships",
    },
     {
      name: "Tello Ananias Letoao",
      role: "Cybersecurity Lead",
      type: "External Advisor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Cybersecurity executive with 2+ years of experience advising on secure digital systems, data protection, and risk management across Africa.",
      icon: <Shield className="w-6 h-6" />,
      specialty: "Cybersecurity & Risk Management",
    },
    {
      name: "",
      role: "Machine Learning Engineer, AI & Data Scientist Lead",
      type: "External Advisor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Driving intelligent, data-powered solutions to supporting digital innovation efforts.",
      icon: <Brain className="w-6 h-6" />,
      specialty: "AI & Machine Learning",
    },
   
    {
      name: "",
      role: "Lead Developer",
      type: "External Advisor",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Supporting full-stack development to deliver scalable and user-centered digital products.",
      icon: <Code className="w-6 h-6" />,
      specialty: "Full-Stack Development",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-teal-50/30 to-red-50/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented professionals and advisors who make SparkleSmart Technologies exceptional
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-teal-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-100 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-r from-teal-600 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg">
                        {member.icon}
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-teal-600">{member.role}</p>
                        <Badge className="bg-red-50 text-red-700 border border-red-200 font-medium">
                          {member.type}
                        </Badge>
                      </div>
                      <div className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                        {member.specialty}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">{member.bio}</p>

                    <div className="flex justify-center space-x-4">
                      <div className="p-2 bg-gray-100 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-teal-500 transition-colors" />
                      </div>
                      <div className="p-2 bg-gray-100 rounded-full hover:bg-red-100 transition-colors cursor-pointer">
                        <Twitter className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors" />
                      </div>
                      <div className="p-2 bg-gray-100 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                        <Mail className="w-5 h-5 text-gray-400 hover:text-teal-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combined decades of experience across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-teal-50 to-white border-teal-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity</h3>
                <p className="text-gray-600 text-sm">20+ years of security expertise</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-white border-red-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & ML</h3>
                <p className="text-gray-600 text-sm">Advanced data science solutions</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-white border-teal-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Strategy</h3>
                <p className="text-gray-600 text-sm">Business transformation expertise</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-white border-red-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Development</h3>
                <p className="text-gray-600 text-sm">Full-stack technical leadership</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advisory Excellence */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Advisory{" "}
            <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our external advisors bring world-class expertise and strategic guidance to ensure we deliver cutting-edge
            solutions that meet the highest industry standards.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Specialized Domains</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
