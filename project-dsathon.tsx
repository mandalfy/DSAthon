"use client"

// Add gradient background styles to body
const gradientStyle = {
  body: {
    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
    backgroundSize: "400% 400%",
    animation: "gradient 15s ease infinite",
  },
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%", 
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
}

import { useState, useEffect } from "react"
import { Menu, Instagram, Twitter, Linkedin, MessageCircle, Code, Users, Clock, BookOpen } from "lucide-react"

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ProjectDSAthon: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [countdown, setCountdown] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Set project start date
  const projectStartDate = new Date("2025-03-01").getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = projectStartDate - now

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [projectStartDate]) // Added projectStartDate to dependencies

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 backdrop-blur-sm border-b border-gray-200 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-8 relative">
              <div className="relative group z-10">
                <span className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  Project DSAthon
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></div>
              </div>
              <div>
                <span>
                  <span></span>
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100/80 via-white/80 to-gray-100/80 blur-lg -z-10 rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-gray-50/30 to-white/30 backdrop-blur-sm -z-5 rounded-2xl"></div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-16">
              <a href="#timeline" className="group flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-all duration-300">
                <Clock className="w-5 h-5 text-pink-500 group-hover:rotate-12 transition-transform duration-500" />
                <span className="font-semibold group-hover:translate-x-1 transition-transform">Timeline</span>
              </a>
              <a href="#setup" className="group flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-all duration-300">
                <Code className="w-5 h-5 text-violet-500 group-hover:scale-110 transition-transform duration-500" />
                <span className="font-semibold group-hover:translate-x-1 transition-transform">Setup</span>
              </a>
              <a href="#faq" className="group flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-all duration-300">
                <BookOpen className="w-5 h-5 text-sky-500 group-hover:-translate-y-1 transition-transform duration-500" />
                <span className="font-semibold group-hover:translate-x-1 transition-transform">FAQ</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-4 rounded-lg bg-emerald-300 hover:bg-emerald-400 transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 space-y-3 border-t border-emerald-500 bg-gradient-to-b from-emerald-400 via-teal-300 to-emerald-400 animate-slide-up">
              <a
                href="#timeline"
                className="flex items-center space-x-3 px-8 py-5 text-white hover:bg-emerald-300/50 hover:text-pink-200 rounded-xl transition-all duration-300"
              >
                <Clock className="w-5 h-5 text-pink-200" />
                <span className="font-semibold">Timeline</span>
              </a>
              <a
                href="#setup"
                className="flex items-center space-x-3 px-8 py-5 text-white hover:bg-emerald-300/50 hover:text-purple-200 rounded-xl transition-all duration-300"
              >
                <Code className="w-5 h-5 text-purple-200" />
                <span className="font-semibold">Setup</span>
              </a>
              <a
                href="#faq"
                className="flex items-center space-x-3 px-8 py-5 text-white hover:bg-emerald-300/50 hover:text-blue-200 rounded-xl transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 text-blue-200" />
                <span className="font-semibold">FAQ</span>
              </a>
            </div>
          )}
        </div>
      </nav>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-green-50/80" />


      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section with Timer */}
        <section className="py-20 px-4 bg-gradient-to-b from-green-50 via-white to-green-50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-green-600 to-emerald-600 px-4 py-2 mb-8 animate-fade-in transform hover:scale-105 transition-all duration-300 [text-shadow:_3px_3px_6px_rgba(0,0,0,0.2)] hover:[text-shadow:_5px_5px_10px_rgba(0,0,0,0.3)] [transform-style:preserve-3d] [perspective:1000px] [transform:rotateX(10deg)] hover:[transform:rotateX(0deg)]">
              Welcome to Project DSAthon
            </h1>
            <p className="text-xl mb-12 text-gray-600 transform [transform-style:preserve-3d] [perspective:1000px] [transform:translateZ(20px)] [text-shadow:_1px_1px_2px_rgba(0,0,0,0.2)]">Important Dates: February 15, 2025</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-green-600">{Math.floor((new Date('2025-02-15').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))}</div>
                <div className="text-sm text-gray-600 font-medium">Days</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-green-600">{Math.floor((new Date('2025-02-15').getTime() - new Date().getTime()) / (1000 * 60 * 60)) % 24}</div>
                <div className="text-sm text-gray-600 font-medium">Hours</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-green-600">{Math.floor((new Date('2025-02-15').getTime() - new Date().getTime()) / (1000 * 60)) % 60}</div>
                <div className="text-sm text-gray-600 font-medium">Minutes</div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-green-600">{Math.floor((new Date('2025-02-15').getTime() - new Date().getTime()) / 1000) % 60}</div>
                <div className="text-sm text-gray-600 font-medium">Seconds</div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Tracks Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-md hover:scale-105 transition-transform [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)]">Build the Future of Learning</h2>
            
            <p className="text-xl mb-12 text-gray-600">
              Create an intelligent tutoring platform using DSA
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-600 mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Personalized Learning</h3>
                <p className="text-gray-600">Customized learning paths tailored to each user's pace and style</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-600 mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Collaborative Groups</h3>
                <p className="text-gray-600">Topic-based study groups for enhanced learning through collaboration</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-600 mb-4">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Smart Feedback</h3>
                <p className="text-gray-600">Real-time feedback system adapting to user sentiment and progress</p>
              </div>
            </div>
          </div>
        </section>
        {/* Timeline Section */}
        <section id="timeline" className="py-20 px-4 bg-gradient-to-r from-green-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-lg hover:scale-105 transition-transform [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)]">Project Timeline</h2>
            <p className="text-xl mb-12 text-gray-600 animate-slide-up">
              Key milestones and deadlines for Project DSAthon
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Phase 1: Project Launch */}
              <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-green-600">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse-slow"></div>
                  <h3 className="font-bold text-xl bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">Project Launch</h3>
                </div>
                <p className="text-gray-600 font-medium">March 1, 2025</p>
                <p className="text-gray-600 mt-2">Opening ceremony and team assignments</p>
              </div>

              {/* Phase 2: Design */}
              <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-green-600">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse-slow"></div>
                  <h3 className="font-bold text-xl bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">Design Phase</h3>
                </div>
                <p className="text-gray-600 font-medium">March 15, 2025</p>
                <p className="text-gray-600 mt-2">Architecture planning and UI mockups</p>
              </div>

              {/* Phase 3: Development */}
              <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-green-600">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse-slow"></div>
                  <h3 className="font-bold text-xl bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">Development Sprint</h3>
                </div>
                <p className="text-gray-600 font-medium">April 1, 2025</p>
                <p className="text-gray-600 mt-2">Core functionality implementation</p>
              </div>

              {/* Phase 4: Testing */}
              <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-green-600">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse-slow"></div>
                  <h3 className="font-bold text-xl bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">Quality Assurance</h3>
                </div>
                <p className="text-gray-600 font-medium">April 15, 2025</p>
                <p className="text-gray-600 mt-2">Testing and performance tuning</p>
              </div>

              {/* Phase 5: Final Delivery */}
              <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-green-600">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse-slow"></div>
                  <h3 className="font-bold text-xl bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">Final Delivery</h3>
                </div>
                <p className="text-gray-600 font-medium">April 30, 2025</p>
                <p className="text-gray-600 mt-2">Project demo and documentation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Prerequisites Section */}
        <section id="setup" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-12 text-center animate-fade-in drop-shadow-md hover:scale-105 transition-transform [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)]">Prerequisites & Setup</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-green-600">Required Tools</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Code size={20} className="text-green-600" />
                    <span>Visual Studio Code</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Code size={20} className="text-green-600" />
                    <span>Git Bash</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Code size={20} className="text-green-600" />
                    <span>MinGW</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-6 text-green-600">Required Accounts</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Code size={20} className="text-green-600" />
                    <span>GitHub Account</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-md hover:scale-105 transition-transform [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)] text-center">Frequently Asked Questions</h2>
            <p className="text-xl mb-12 text-center text-gray-600">
              Find answers to common questions about Project DSAthon
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-green-600">How to choose a project?</h3>
                <p className="text-gray-600">
                  Select based on your interests and skill level. Consider the technology stack and project complexity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-green-600">Can I pick both projects?</h3>
                <p className="text-gray-600">
                  We recommend focusing on one project to ensure quality delivery and deep learning.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-green-600">What programming languages can I use?</h3>
                <p className="text-gray-600">
                  You can use any mainstream programming language, but we recommend Python, Java, or JavaScript for better community support.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-green-600">Is there a team size limit?</h3>
                <p className="text-gray-600">
                  Teams can have 2-4 members. Solo participation is also allowed but team collaboration is encouraged.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-green-600">What support is available?</h3>
                <p className="text-gray-600">
                  We provide mentorship, technical documentation, and community support through Discord and forums.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-green-600">Are there any prerequisites?</h3>
                <p className="text-gray-600">
                  Basic programming knowledge and familiarity with data structures and algorithms is required.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow md:col-span-2">
                <h3 className="text-xl font-bold mb-4 text-green-600">
                  I use a different tech stack than the ones taught
                </h3>
                <p className="text-gray-600">
                  That's fine! You can implement the project using your preferred tech stack as long as you meet the
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-md hover:scale-105 transition-transform [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)] text-center">Join Community</h2>

            <div className="flex justify-center space-x-8 mb-12">
              <a
                href="https://chat.whatsapp.com/FJX8ucNavszCQlTzYqRPFB"
                className="text-green-600 hover:text-green-700 transform hover:scale-110 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gfgsnuofficial?igsh=MWdkYTRmOWw5eHY1Mg=="
                className="text-green-600 hover:text-green-700 transform hover:scale-110 transition-transform"
              >
                <Instagram size={36} />
              </a>
              <a
                href="https://x.com/gfgsnuofficial?t=Ng1WqtLHg_W8XYOSusui-A&s=08"
                className="text-green-600 hover:text-green-700 transform hover:scale-110 transition-transform"
              >
                <Twitter size={36} />
              </a>
              <a
                href="https://www.linkedin.com/company/geeksforgeeks-snu-chapter/"
                className="text-green-600 hover:text-green-700 transform hover:scale-110 transition-transform"
              >
                <Linkedin size={36} />
              </a>
            </div>

            <p className="text-lg text-gray-600">Organized by GeeksforGeeks Chapters SNU</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ProjectDSAthon

