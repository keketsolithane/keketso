"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Facebook, Twitter, Linkedin, Youtube, Menu, X, ArrowRight } from "lucide-react"
import { Logo } from "./logo"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium">
          <div className="flex items-center space-x-6">
            <a
              href="mailto:info@sparklesmartec.com?subject=Inquiry from Website&body=Hello SparkleSmart Technologies,%0D%0A%0D%0AI would like to inquire about your services.%0D%0A%0D%0AThank you."
              className="flex items-center space-x-2 hover:text-teal-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@jkltechno.com</span>
            </a>
            <a href="tel:+26663651639" className="flex items-center space-x-2 hover:text-teal-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+266-56864062/62623825</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Follow Us:</span>
            <div className="flex space-x-2">
              <Facebook className="w-4 h-4 hover:text-teal-200 cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 hover:text-teal-200 cursor-pointer transition-colors" />
              <Linkedin className="w-4 h-4 hover:text-teal-200 cursor-pointer transition-colors" />
              <Youtube className="w-4 h-4 hover:text-teal-200 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Logo className="w-12 h-12 shadow-md" />
            <span className="text-2xl font-bold text-gray-900">JKL Technologies</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
              Home
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
              Services
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
              About Us
            </Link>
            <Link href="/portfolio" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
              Portfolio
            </Link>
            <Link href="/team" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
              Team
            </Link>
            <Link href="/cisco-learning" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
              Cisco Learning Academy
            </Link>
            <Link href="/blog" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
              Contact
            </Link>
            <Link href="/quote">
              <Button className="btn-primary px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Get A Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white border border-gray-200 rounded-lg p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
                Home
              </Link>
              <Link href="/services" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
                Services
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
                About Us
              </Link>
              <Link href="/portfolio" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
                Portfolio
              </Link>
              <Link href="/team" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
                Team
              </Link>
              <Link
                href="/cisco-learning"
                className="text-gray-800 hover:text-teal-600 transition-colors font-semibold"
              >
                Cisco Learning Academy
              </Link>
              <Link href="/blog" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-teal-600 transition-colors font-semibold">
                Contact
              </Link>
              <Link href="/quote">
                <Button className="btn-primary w-full font-semibold">Get A Quote</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
