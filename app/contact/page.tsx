"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

export default function ContactPage() {
  // Supabase client initialization moved inside the component
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
    try {
      const { data, error } = await supabase.from("messages").insert([
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

      if (error) {
        setStatus(`❌ Error: ${error.message}`);
      } else {
        setStatus("✅ Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }
    } catch (err) {
      setStatus(`❌ Unexpected error: ${err.message || err}`);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-teal-50/30 to-coral-50/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-teal-600 to-coral-500 bg-clip-text text-transparent">
              Us
            </span>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-coral-500 hover:from-teal-700 hover:to-coral-600 text-white shadow-lg"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
                {status && (
                  <p
                    className={`mt-4 text-center ${
                      status.startsWith("✅")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-white border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <CardContent className="p-6">
                  <a
                    href="mailto:info@jkltechno.com?subject=Inquiry from Website&body=Hello SparkleSmart Technologies,%0D%0A%0D%0AI would like to inquire about your services.%0D%0A%0D%0AThank you."
                    className="flex items-center space-x-4 w-full"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600 hover:text-teal-600 transition-colors">
                        info@jkltechno.com
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <CardContent className="p-6">
                  <a href="tel:+26656864062/62623825" className="flex items-center space-x-4 w-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600 hover:text-red-600 transition-colors">
                        +266-56864062/62623825
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <CardContent className="p-6">
                  <a
                    href="https://www.google.com/maps/search/Hatsolo+By-Pass+Maseru+Lesotho"
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
                        Hatsolo (By-Pass)
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
                      <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
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
  );
}