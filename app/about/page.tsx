"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-teal-50/30 to-coral-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">
                  JKL Technologies
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                JKL Technologies is dedicated to collaborating with inspired partners and clients to deliver
                user-centric digital solutions that enrich lives, expand opportunities, and empower organizations to
                drive sustainable development impact.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">2+</div>
                  <div className="text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                  <div className="text-gray-500">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="About SparkleSmart"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-coral-500/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-coral-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver innovative, user-centric digital solutions that empower organizations and individuals to
                  achieve their goals while driving sustainable development and positive social impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-coral-300 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-coral-500 to-teal-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading technology partner in Africa, recognized for our commitment to excellence,
                  innovation, and sustainable development through transformative digital solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnership to achieve extraordinary results.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, delivering quality solutions that exceed expectations.",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Impact",
                description:
                  "We are committed to creating positive impact through technology that enriches lives and communities.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-teal-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-coral-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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
