"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import {
  Settings,
  Award,
  BookOpen,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  ChevronDown,
  Menu,
  Mail,
  Phone,
} from "lucide-react"

// Simple inline components to avoid import issues
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
}

function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

function CardHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
}

function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
}

function CardDescription({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
}

function Button({
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  size = "default",
  variant = "default",
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  type?: "button" | "submit"
  size?: "default" | "lg"
  variant?: "default" | "outline"
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  const sizeClasses = size === "lg" ? "h-11 px-8" : "h-10 py-2 px-4"
  const variantClasses =
    variant === "outline"
      ? "border border-input hover:bg-accent hover:text-accent-foreground"
      : "bg-primary text-primary-foreground hover:bg-primary/90"

  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
    >
      {children}
    </div>
  )
}

function Input({
  id,
  type = "text",
  value,
  onChange,
  required = false,
  className = "",
}: {
  id?: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  className?: string
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    />
  )
}

function Textarea({
  id,
  value,
  onChange,
  placeholder,
  rows = 3,
  className = "",
}: {
  id?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  rows?: number
  className?: string
}) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    />
  )
}

function Select({
  value,
  onValueChange,
  children,
}: {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
}) {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange(e.target.value)}
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </select>
  )
}

function SelectTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function SelectValue({ placeholder }: { placeholder: string }) {
  return (
    <option value="" disabled>
      {placeholder}
    </option>
  )
}

function SelectContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
  return <option value={value}>{children}</option>
}

function Checkbox({
  id,
  checked,
  onCheckedChange,
}: {
  id?: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}) {
  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
    />
  )
}

// Header component
function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-teal-600">
          JKL Technologies
        </Link>

        <button className="md:hidden p-2 rounded text-gray-600" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu />
        </button>

        <ul
          className={`${open ? "block" : "hidden"} absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex gap-6 p-4 md:p-0 shadow-lg md:shadow-none`}
        >
          <li>
            <Link href="/" className="block py-2 text-gray-700 hover:text-teal-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="block py-2 text-gray-700 hover:text-teal-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/cisco-learning" className="block py-2 text-gray-700 hover:text-teal-600">
              Cisco Academy
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-teal-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

// Footer component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JKL Technologies</h3>
            <p className="text-gray-400 text-sm">
              Digital innovation leaders providing comprehensive technology solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/cisco-learning" className="hover:text-white">
                  Cisco Training
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@jkltechno.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+266-56864062/62623825</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} @2025 JKL Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main component
export default function CiscoLearningPage() {
  const enrollFormRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    motivation: "",
    terms: false,
  })

  const handleEnrollClick = (courseId: string) => {
    setFormData((prev) => ({ ...prev, course: courseId }))
    enrollFormRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Enrollment submitted successfully! We will contact you soon.")
    console.log("Form submitted:", formData)
  }

  const courseCategories = [
    {
      category: "Networking",
      courses: [
        {
          id: "ccna-intro",
          title: "CCNA: Introduction to Networks",
          description:
            "Learn fundamental networking concepts and protocols. Build a foundation for advanced networking studies.",
          duration: "70 hours",
          level: "Beginner",
          students: 245,
          accredited: true,
          topics: ["Network Fundamentals", "OSI Model", "TCP/IP", "Ethernet", "IPv4/IPv6", "Basic Routing"],
          featured: true,
        },
        {
          id: "ccna-switching",
          title: "CCNA: Switching, Routing, and Wireless Essentials",
          description:
            "Master switching and routing concepts, VLAN configuration, and wireless networking fundamentals.",
          duration: "70 hours",
          level: "Intermediate",
          students: 189,
          accredited: false,
          topics: ["VLANs", "STP", "EtherChannel", "OSPF", "EIGRP", "Wireless Basics"],
        },
        {
          id: "ccna-enterprise",
          title: "CCNA: Enterprise Networking, Security, and Automation",
          description:
            "Advanced enterprise networking concepts including security implementation and network automation.",
          duration: "70 hours",
          level: "Advanced",
          students: 156,
          accredited: false,
          topics: ["ACLs", "NAT", "VPN", "QoS", "Network Automation", "SDN"],
        },
        {
          id: "networking-essentials",
          title: "Networking Essentials",
          description:
            "Essential networking concepts for beginners including network types, protocols, and basic troubleshooting.",
          duration: "50 hours",
          level: "Beginner",
          students: 312,
          accredited: false,
          topics: ["Network Types", "Protocols", "Troubleshooting", "Network Devices", "Cabling", "Wireless"],
        },
        {
          id: "network-addressing",
          title: "Network Addressing and Basic Troubleshooting",
          description: "Learn IP addressing schemes, subnetting, and fundamental network troubleshooting techniques.",
          duration: "40 hours",
          level: "Beginner",
          students: 278,
          accredited: false,
          topics: ["IP Addressing", "Subnetting", "VLSM", "Troubleshooting", "Network Tools", "Documentation"],
        },
        {
          id: "networking-devices",
          title: "Networking Devices and Initial Configuration",
          description: "Hands-on experience with network devices, initial setup, and basic configuration procedures.",
          duration: "45 hours",
          level: "Intermediate",
          students: 198,
          accredited: false,
          topics: ["Router Config", "Switch Config", "IOS Commands", "Device Management", "Backup/Restore", "Security"],
        },
        {
          id: "iot-intro",
          title: "Introduction to IoT and Digital Transformation",
          description: "Explore Internet of Things concepts and their role in digital transformation initiatives.",
          duration: "35 hours",
          level: "Intermediate",
          students: 167,
          accredited: false,
          topics: ["IoT Fundamentals", "Sensors", "Connectivity", "Data Analytics", "Cloud Integration", "Security"],
        },
      ],
    },
    {
      category: "Cybersecurity",
      courses: [
        {
          id: "cybersecurity-intro",
          title: "Introduction to Cybersecurity",
          description: "Fundamental cybersecurity concepts, threat landscape, and basic security principles.",
          duration: "30 hours",
          level: "Beginner",
          students: 423,
          accredited: false,
          topics: [
            "Security Fundamentals",
            "Threat Landscape",
            "Risk Management",
            "Security Policies",
            "Compliance",
            "Awareness",
          ],
          featured: true,
        },
        {
          id: "cybersecurity-essentials",
          title: "Cybersecurity Essentials",
          description:
            "Comprehensive cybersecurity training covering threats, vulnerabilities, and defense strategies.",
          duration: "50 hours",
          level: "Intermediate",
          students: 298,
          accredited: false,
          topics: [
            "Threat Analysis",
            "Vulnerability Assessment",
            "Incident Response",
            "Forensics",
            "Security Tools",
            "Defense Strategies",
          ],
        },
        {
          id: "network-security",
          title: "Network Security",
          description: "Advanced network security concepts, firewalls, VPNs, and security monitoring techniques.",
          duration: "60 hours",
          level: "Advanced",
          students: 187,
          accredited: true,
          topics: [
            "Firewalls",
            "VPN",
            "IDS/IPS",
            "Security Monitoring",
            "Penetration Testing",
            "Security Architecture",
          ],
        },
        {
          id: "ethical-hacker",
          title: "Ethical Hacker",
          description: "Learn ethical hacking techniques, penetration testing, and vulnerability assessment methods.",
          duration: "80 hours",
          level: "Advanced",
          students: 134,
          accredited: false,
          topics: [
            "Penetration Testing",
            "Vulnerability Assessment",
            "Social Engineering",
            "Web Security",
            "Wireless Security",
            "Reporting",
          ],
        },
        {
          id: "cyberops",
          title: "CyberOps Associate",
          description: "Security operations center fundamentals, incident response, and threat analysis techniques.",
          duration: "70 hours",
          level: "Intermediate",
          students: 156,
          accredited: true,
          topics: ["SOC Operations", "Incident Response", "Threat Hunting", "SIEM", "Forensics", "Threat Intelligence"],
        },
      ],
    },
    {
      category: "Programming & Development",
      courses: [
        {
          id: "python-essentials",
          title: "Python Essentials 2",
          description: "Advanced Python programming concepts, object-oriented programming, and data structures.",
          duration: "40 hours",
          level: "Intermediate",
          students: 367,
          accredited: false,
          topics: ["OOP", "Data Structures", "File Handling", "Exception Handling", "Modules", "Libraries"],
        },
        {
          id: "css-essentials",
          title: "CSS Essentials",
          description: "Master CSS styling, responsive design, and modern web development techniques.",
          duration: "35 hours",
          level: "Beginner",
          students: 289,
          accredited: false,
          topics: ["CSS Fundamentals", "Responsive Design", "Flexbox", "Grid", "Animations", "Frameworks"],
        },
      ],
    },
    {
      category: "AI & Data Science",
      courses: [
        {
          id: "data-science-intro",
          title: "Introduction to Data Science",
          description: "Fundamental data science concepts, data analysis techniques, and statistical methods.",
          duration: "45 hours",
          level: "Beginner",
          students: 234,
          accredited: false,
          topics: [
            "Data Analysis",
            "Statistics",
            "Data Visualization",
            "Python/R",
            "Machine Learning Basics",
            "Data Ethics",
          ],
        },
        {
          id: "data-analytics",
          title: "Data Analytics Essentials",
          description: "Essential data analytics skills, visualization techniques, and business intelligence concepts.",
          duration: "50 hours",
          level: "Intermediate",
          students: 198,
          accredited: false,
          topics: ["Business Intelligence", "Data Visualization", "SQL", "Excel", "Tableau", "Power BI"],
        },
        {
          id: "data-science-python",
          title: "Data Science Essentials with Python",
          description: "Comprehensive data science training using Python, including machine learning fundamentals.",
          duration: "60 hours",
          level: "Intermediate",
          students: 167,
          accredited: false,
          topics: ["Python for Data Science", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Machine Learning"],
          beta: true,
        },
      ],
    },
    {
      category: "Cisco Packet Tracer",
      courses: [
        {
          id: "packet-tracer-networking",
          title: "Exploring Networking with Cisco Packet Tracer",
          description: "Hands-on network simulation and design using Cisco Packet Tracer software.",
          duration: "25 hours",
          level: "Beginner",
          students: 345,
          accredited: false,
          topics: [
            "Packet Tracer Basics",
            "Network Simulation",
            "Device Configuration",
            "Troubleshooting",
            "Network Design",
            "Labs",
          ],
        },
        {
          id: "packet-tracer-iot",
          title: "Exploring Internet of Things with Cisco Packet Tracer",
          description: "IoT network design and simulation using advanced Packet Tracer features and IoT components.",
          duration: "30 hours",
          level: "Intermediate",
          students: 178,
          accredited: false,
          topics: [
            "IoT Simulation",
            "Smart Devices",
            "Sensor Networks",
            "IoT Protocols",
            "Cloud Integration",
            "IoT Security",
          ],
        },
      ],
    },
    {
      category: "Information Technology",
      courses: [
        {
          id: "operating-systems",
          title: "Operating Systems Basics",
          description: "Fundamental operating system concepts, file management, and system administration basics.",
          duration: "40 hours",
          level: "Beginner",
          students: 267,
          accredited: false,
          topics: [
            "OS Fundamentals",
            "File Systems",
            "Process Management",
            "Memory Management",
            "System Administration",
            "Troubleshooting",
          ],
        },
        {
          id: "computer-hardware",
          title: "Computer Hardware Basics",
          description: "Computer hardware components, assembly, troubleshooting, and maintenance procedures.",
          duration: "35 hours",
          level: "Beginner",
          students: 234,
          accredited: false,
          topics: ["Hardware Components", "Assembly", "Troubleshooting", "Maintenance", "Upgrades", "Compatibility"],
        },
      ],
    },
    {
      category: "Digital Literacy & Professional Skills",
      courses: [
        {
          id: "digital-safety",
          title: "Digital Safety and Security Awareness",
          description: "Essential digital safety practices, privacy protection, and online security awareness.",
          duration: "20 hours",
          level: "Beginner",
          students: 456,
          accredited: false,
          topics: [
            "Digital Safety",
            "Privacy Protection",
            "Password Security",
            "Phishing Awareness",
            "Social Media Safety",
            "Online Ethics",
          ],
        },
        {
          id: "computer-mobile",
          title: "Using Computer and Mobile Devices",
          description:
            "Practical skills for using computers and mobile devices effectively in personal and professional settings.",
          duration: "25 hours",
          level: "Beginner",
          students: 389,
          accredited: false,
          topics: [
            "Computer Basics",
            "Mobile Devices",
            "Software Applications",
            "File Management",
            "Internet Usage",
            "Digital Communication",
          ],
        },
        {
          id: "business-launch",
          title: "Launching a Business Venture",
          description: "Entrepreneurship fundamentals, business planning, and startup development strategies.",
          duration: "40 hours",
          level: "Intermediate",
          students: 198,
          accredited: false,
          topics: [
            "Business Planning",
            "Market Research",
            "Financial Planning",
            "Legal Considerations",
            "Marketing",
            "Operations",
          ],
        },
        {
          id: "business-manage",
          title: "Managing a Business Venture",
          description: "Business management principles, operations, and growth strategies for entrepreneurs.",
          duration: "45 hours",
          level: "Intermediate",
          students: 167,
          accredited: false,
          topics: [
            "Operations Management",
            "Financial Management",
            "Human Resources",
            "Strategic Planning",
            "Growth Strategies",
            "Performance Metrics",
          ],
        },
      ],
    },
  ]

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry-Recognized Certifications",
      description: "Earn globally recognized Cisco certifications that validate your networking expertise.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from certified Cisco professionals with real-world industry experience.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Hands-On Labs",
      description: "Practice with real Cisco equipment and simulation tools for practical experience.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Curriculum",
      description: "Complete training programs covering all aspects of Cisco technologies and networking.",
    },
  ]

  const allCourses = courseCategories.flatMap((c) => c.courses).map((c) => ({ id: c.id, title: c.title }))

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-teal-50/30 to-red-50/30">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <Badge className="bg-gradient-to-r from-teal-100 to-red-100 text-teal-700 border-teal-200 px-4 py-2">
              🎓 Cisco Learning Academy
            </Badge>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Master{" "}
                <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">Cisco</span>{" "}
                Technologies
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advance your networking career with our comprehensive Cisco training programs. From CCNA to advanced
                cybersecurity, we provide hands-on training with industry-certified instructors to help you achieve your
                certification goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-red-500 hover:from-teal-700 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => enrollFormRef.current?.scrollIntoView({ behavior: "smooth" })}
              >
                Enroll Now <ChevronDown className="w-5 h-5 ml-2" />
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">2000+</div>
                <div className="text-gray-500">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-gray-500">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">25+</div>
                <div className="text-gray-500">Courses Available</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Cisco Learning and Training"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-red-500/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">
                Training Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Cisco certification training programs designed to advance your networking career
            </p>
          </div>

          <div className="space-y-16">
            {courseCategories.map((category) => (
              <div key={category.category}>
                <h3 className="text-3xl font-bold text-center mb-8">
                  <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">
                    {category.category}
                  </span>{" "}
                  Courses
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.courses.map((course) => (
                    <Card
                      key={course.id}
                      className={`bg-white border-gray-200 hover:border-teal-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                        course.featured ? "ring-2 ring-teal-200 bg-gradient-to-br from-teal-50/50 to-red-50/50" : ""
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge
                            className={`${
                              course.level === "Expert"
                                ? "bg-red-100 text-red-700 border-red-200"
                                : course.level === "Professional"
                                  ? "bg-orange-100 text-orange-700 border-orange-200"
                                  : course.level === "Advanced"
                                    ? "bg-purple-100 text-purple-700 border-purple-200"
                                    : "bg-green-100 text-green-700 border-green-200"
                            }`}
                          >
                            {course.level}
                          </Badge>
                          {course.featured && (
                            <Badge className="bg-teal-100 text-teal-700 border-teal-200">
                              <Star className="w-3 h-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                          {course.accredited && <Badge className="bg-green-100 text-green-700">Accredited</Badge>}
                          {course.beta && <Badge className="bg-orange-100 text-orange-700">Beta</Badge>}
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>

                        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{course.students} students</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-teal-600 mb-2">Topics Covered:</h4>
                          <div className="space-y-1">
                            {course.topics.slice(0, 3).map((topic, idx) => (
                              <div key={idx} className="flex items-center text-xs text-gray-500">
                                <CheckCircle className="w-3 h-3 text-teal-500 mr-2" />
                                {topic}
                              </div>
                            ))}
                            {course.topics.length > 3 && (
                              <div className="text-xs text-gray-400">+{course.topics.length - 3} more topics</div>
                            )}
                          </div>
                        </div>

                        <Button
                          className="w-full bg-gradient-to-r from-teal-600 to-red-500 hover:from-teal-700 hover:to-red-600 text-white shadow-lg"
                          onClick={() => handleEnrollClick(course.id)}
                        >
                          Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">
                Cisco Training?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 hover:border-red-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form Section */}
      <section className="py-20 px-4 bg-gray-50" ref={enrollFormRef} id="enrollment-form">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">
                Enroll Today
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below to enroll in your selected Cisco certification course
            </p>
          </div>

          <Card className="bg-white border-gray-200 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Enrollment Application</CardTitle>
              <CardDescription className="text-center">
                Please provide your information to complete the enrollment process
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                {/* Course Selection */}
                <div className="space-y-2">
                  <label htmlFor="course" className="text-sm font-medium text-gray-700">
                    Select Course *
                  </label>
                  <Select
                    value={formData.course}
                    onValueChange={(value) => setFormData({ ...formData, course: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {allCourses.map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          {course.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Level */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700">Current Experience Level *</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="beginner"
                        name="experience"
                        value="beginner"
                        checked={formData.experience === "beginner"}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                      />
                      <label htmlFor="beginner" className="text-sm text-gray-700">
                        Beginner - New to networking
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="intermediate"
                        name="experience"
                        value="intermediate"
                        checked={formData.experience === "intermediate"}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                      />
                      <label htmlFor="intermediate" className="text-sm text-gray-700">
                        Intermediate - Some networking experience
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="advanced"
                        name="experience"
                        value="advanced"
                        checked={formData.experience === "advanced"}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                      />
                      <label htmlFor="advanced" className="text-sm text-gray-700">
                        Advanced - Extensive networking background
                      </label>
                    </div>
                  </div>
                </div>

                {/* Motivation */}
                <div className="space-y-2">
                  <label htmlFor="motivation" className="text-sm font-medium text-gray-700">
                    Why do you want to take this course?
                  </label>
                  <Textarea
                    id="motivation"
                    placeholder="Tell us about your goals and motivation..."
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    rows={4}
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={(checked) => setFormData({ ...formData, terms: checked })}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the terms and conditions and privacy policy *
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-red-500 hover:from-teal-700 hover:to-red-600 text-white py-4 text-lg font-semibold shadow-lg"
                  disabled={!formData.terms}
                >
                  Submit Enrollment Application
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mt-8 bg-white border-gray-200">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about the enrollment process or our courses, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Email:</strong> info@jkltechno.com
                </p>
                <p>
                  <strong>Phone:</strong> +266-56864062/62623825
                </p>
                <p>
                  <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-teal-600 to-red-500 bg-clip-text text-transparent">
              Cisco Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers with our Cisco certification training
            programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-red-500 hover:from-teal-700 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => enrollFormRef.current?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started Today <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-white"
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
