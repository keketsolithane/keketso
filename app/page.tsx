"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Users, Target, Zap, Shield, Award, Settings, Code, Smartphone, Cloud } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden hero-gradient">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-100/30 to-transparent rounded-full blur-3xl animate-subtle-glow"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-100/30 to-transparent rounded-full blur-3xl animate-subtle-glow delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <Badge className="bg-gradient-to-r from-teal-50 to-red-50 text-teal-800 border border-teal-200/50 px-4 py-2 font-semibold">
              🚀 Digital Innovation Leaders
            </Badge>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Welcome To{" "}
                <span className="bg-gradient-to-r from-teal-600 via-red-500 to-teal-600 bg-clip-text text-transparent animate-gradient-shift">
                  JKL Technologies
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl font-medium">
                JKL Technologies is dedicated to collaborating with inspired partners and clients to deliver
                user-centric digital solutions that enrich lives, expand opportunities, and empower organizations to
                drive sustainable development impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button
                  size="lg"
                  className="btn-primary px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-outline px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 accent-gradient rounded-lg p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-gray-600 font-medium">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600 font-medium">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">2+</div>
                <div className="text-gray-600 font-medium">Years</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Digital Technology Solutions"
                className="w-full h-auto rounded-2xl elegant-shadow-lg border border-gray-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 to-red-500/5 rounded-2xl"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full animate-float shadow-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full animate-float delay-700 shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Settings className="w-8 h-8" />,
                title: "IT Consultancy",
                description: "Strategic technology consulting and digital transformation guidance",
                featured: true,
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies",
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications for iOS and Android",
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and migration services",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`card-gradient elegant-border hover:border-teal-300/50 transition-all duration-300 transform hover:scale-105 elegant-shadow hover:shadow-lg ${
                  service.featured ? "ring-1 ring-teal-200/50" : ""
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r from-teal-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg ${
                      service.featured ? "ring-2 ring-teal-200/50" : ""
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  {service.featured && (
                    <Badge className="mb-2 bg-teal-50 text-teal-700 border border-teal-200/50 font-medium">
                      Featured
                    </Badge>
                  )}
                  <p className="text-gray-600 font-medium">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                className="btn-primary px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                View All Services <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose JKLTechno Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">
                JKL TECHNOLOGIES
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              We combine cutting-edge technology with innovative solutions to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description: "Skilled professionals with years of experience in digital solutions",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Targeted Solutions",
                description: "Customized approaches tailored to your specific business needs",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Delivery",
                description: "Quick turnaround times without compromising on quality",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Reliable Support",
                description: "24/7 support and maintenance for all our solutions",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="card-gradient elegant-border hover:border-red-300/50 transition-all duration-300 transform hover:scale-105 elegant-shadow hover:shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 font-medium">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 accent-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            Let's work together to create innovative solutions that drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button
                size="lg"
                className="btn-primary px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="btn-outline px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
