"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-teal-50/30 to-coral-50/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with our team today
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white border-gray-200 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input
                      type="tel"
                      className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      rows={5}
                      className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-coral-500 hover:from-teal-700 hover:to-coral-600 text-white shadow-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-white border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <CardContent className="p-6">
                  <a
                    href="mailto:info@sparklesmartec.com?subject=Inquiry from Website&body=Hello SparkleSmart Technologies,%0D%0A%0D%0AI would like to inquire about your services.%0D%0A%0D%0AThank you."
                    className="flex items-center space-x-4 w-full"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600 hover:text-teal-600 transition-colors">info@sparklesmartec.com</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <CardContent className="p-6">
                  <a href="tel:+26663651639" className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600 hover:text-red-600 transition-colors">+266-63651639</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <CardContent className="p-6">
                  <a
                    href="https://www.google.com/maps/search/Transformation+Resource+Center+Maseru+Lesotho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 w-full"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600 hover:text-teal-600 transition-colors">
                        Transformation Resource Center
                      </p>
                      <p className="text-sm text-gray-500">Maseru, Lesotho</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
