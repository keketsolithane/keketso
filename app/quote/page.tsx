'use client'

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { supabase } from "@/lib/supabaseClient"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    description: "",
    services: [] as string[],
    budget: "",
    timeline: "",
  })

  const [message, setMessage] = useState("")

  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "Digital Marketing",
    "UI/UX Design",
    "Cybersecurity",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCheckbox = (service: string) => {
    setFormData(prev => {
      const selected = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
      return { ...prev, services: selected }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.from('quotes').insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        title: formData.title,
        description: formData.description,
        services: formData.services,
        budget: formData.budget,
        timeline: formData.timeline,
      }
    ])

    if (error) {
      setMessage(`Failed to submit: ${error.message}`)
    } else {
      setMessage("Quote request successfully submitted.")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        title: "",
        description: "",
        services: [],
        budget: "",
        timeline: "",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-teal-50/30 to-coral-50/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get A <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">Quote</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your project and we'll provide you with a detailed quote
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-gray-200 shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label>First Name *</label>
                    <Input name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div>
                    <label>Last Name *</label>
                    <Input name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>
                  <div>
                    <label>Email *</label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div>
                    <label>Phone</label>
                    <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="md:col-span-2">
                    <label>Company</label>
                    <Input name="company" value={formData.company} onChange={handleChange} />
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <label>Project Title *</label>
                  <Input name="title" value={formData.title} onChange={handleChange} required />

                  <label className="mt-4 block">Services Needed *</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleCheckbox(service)}
                        />
                        <label htmlFor={service}>{service}</label>
                      </div>
                    ))}
                  </div>

                  <label className="mt-4 block">Project Description *</label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    required
                  />

                  <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <label>Budget</label>
                      <select name="budget" value={formData.budget} onChange={handleChange} className="w-full p-3 border rounded-md">
                        <option value="">Select</option>
                        <option value="5000-10000">M2,500 - M5,000</option>
                        <option value="10000-25000">M5,000 - M10,000</option>
                        <option value="25000-50000">M10,000 - M15,000</option>
                        <option value="50000+">M15,000+</option>
                      </select>
                    </div>
                    <div>
                      <label>Timeline</label>
                      <select name="timeline" value={formData.timeline} onChange={handleChange} className="w-full p-3 border rounded-md">
                        <option value="">Select</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6-12months">6-12 months</option>
                        <option value="12months+">1 year +</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full mt-4">
                  Submit Quote Request
                </Button>
                {message && <p className="text-center mt-4 text-gray-700">{message}</p>}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
