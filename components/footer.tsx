import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import { Logo } from "./logo"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-transparent to-red-900/10"></div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <Logo className="w-8 h-8" />
              </div>
              <span className="text-xl font-bold text-white">JKL Technologies</span>
            </div>
            <p className="text-gray-300 leading-relaxed font-medium">
              Delivering user-centric digital solutions that enrich lives, expand opportunities, and empower
              organizations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-teal-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-teal-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-teal-400 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-teal-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/cisco-learning" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Cisco Learning Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 font-medium">IT Consultancy</span>
              </li>
              <li>
                <span className="text-gray-300 font-medium">Web Development</span>
              </li>
              <li>
                <span className="text-gray-300 font-medium">Mobile Apps</span>
              </li>
              <li>
                <span className="text-gray-300 font-medium">Cloud Solutions</span>
              </li>
              <li>
                <span className="text-gray-300 font-medium">Cisco Learning Academy</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@sparklesmartec.com?subject=Inquiry from Website&body=Hello SparkleSmart Technologies,%0D%0A%0D%0AI would like to inquire about your services.%0D%0A%0D%0AThank you."
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 text-red-400 group-hover:text-teal-400 transition-colors" />
                <span className="text-gray-300 font-medium group-hover:text-white">info@jkltechno.com</span>
              </a>
              <a
                href="tel:+26656864062/62623825"
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-red-400 group-hover:text-teal-400 transition-colors" />
                <span className="text-gray-300 font-medium group-hover:text-white">+266-56864062/62623825</span>
              </a>
              <a
                href="https://www.google.com/maps/search/Transformation+Resource+Center+Maseru+Lesotho"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <MapPin className="w-5 h-5 text-red-400 group-hover:text-teal-400 transition-colors" />
                <span className="text-gray-300 font-medium group-hover:text-white">
                  Hatsolo(By-Pass)
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 font-medium">© 2025 JKL Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
