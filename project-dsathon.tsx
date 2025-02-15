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

//Internal imports
import Countdown from "./components/basicComponents/CountDown"
import CurvedTimeline from "./components/basicComponents/CurvedTimeLine"

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
      <nav className="fixed top-0 w-full bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 backdrop-blur-sm border-b border-emerald-200 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex-1 flex items-center space-x-8 relative">
              <div className="relative group z-10">
                <span className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 hover:scale-105 transform transition-all duration-500 cursor-pointer">
                  Project DSAthon
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </div>
              <div>
                <span>
                  <span></span>
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100/90 via-white/90 to-gray-100/90 blur-xl -z-10 rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-gray-50/40 to-white/40 backdrop-blur-md -z-5 rounded-3xl"></div>
            </div>

            {/* main logo */}
            <div className="flex-1 flex justify-center transition-transform duration-300 hover:scale-105">
              <img src="/assets/gfgSVG.png" alt="" className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="flex-1 hidden md:flex items-center justify-end space-x-12">
              <a href="#timeline" className="group flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-all duration-300">
                <Clock className="w-5 h-5 text-pink-500 group-hover:rotate-12 transform transition-all duration-500" />
                <span className="font-semibold group-hover:translate-x-1 transition-transform duration-300 relative">
                  Timeline
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></div>
                </span>
              </a>
              <a href="#setup" className="group flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-all duration-300">
                <Code className="w-5 h-5 text-violet-500 group-hover:scale-110 transform transition-all duration-500" />
                <span className="font-semibold group-hover:translate-x-1 transition-transform duration-300 relative">
                  Setup
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300"></div>
                </span>
              </a>
              <a href="#faq" className="group flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-all duration-300">
                <BookOpen className="w-5 h-5 text-sky-500 group-hover:-translate-y-1 transform transition-all duration-500" />
                <span className="font-semibold group-hover:translate-x-1 transition-transform duration-300 relative">
                  FAQ
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 group-hover:w-full transition-all duration-300"></div>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="p-4 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 space-y-3 border-t border-emerald-500/20 bg-gradient-to-b from-emerald-400/95 via-teal-300/95 to-emerald-400/95 backdrop-blur-lg animate-slide-up rounded-b-2xl shadow-xl">
              <a
                href="#timeline"
                className="flex items-center space-x-3 px-8 py-5 text-white hover:bg-white/20 hover:text-pink-200 rounded-xl transition-all duration-300 group"
              >
                <Clock className="w-5 h-5 text-pink-200 group-hover:rotate-12 transition-transform duration-500" />
                <span className="font-semibold">Timeline</span>
              </a>
              <a
                href="#setup"
                className="flex items-center space-x-3 px-8 py-5 text-white hover:bg-white/20 hover:text-purple-200 rounded-xl transition-all duration-300 group"
              >
                <Code className="w-5 h-5 text-purple-200 group-hover:scale-110 transition-transform duration-500" />
                <span className="font-semibold">Setup</span>
              </a>
              <a
                href="#faq"
                className="flex items-center space-x-3 px-8 py-5 text-white hover:bg-white/20 hover:text-blue-200 rounded-xl transition-all duration-300 group"
              >
                <BookOpen className="w-5 h-5 text-blue-200 group-hover:-translate-y-1 transition-transform duration-500" />
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
        <section className="flex items-center justify-center bg-gradient-to-b from-green-50 via-white to-green-50 h-screen">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-green-600 to-emerald-600 px-4 py-2 mb-8 animate-fade-in transform hover:scale-105 transition-all duration-300 [text-shadow:_3px_3px_6px_rgba(0,0,0,0.2)] hover:[text-shadow:_5px_5px_10px_rgba(0,0,0,0.3)] [transform-style:preserve-3d] [perspective:1000px] [transform:rotateX(10deg)] hover:[transform:rotateX(0deg)]">
              Welcome to Project DSAthon
            </h1>
            <p className="text-xl mb-12 text-emerald-600 transform [transform-style:preserve-3d] [perspective:1000px] [transform:translateZ(20px)] [text-shadow:_1px_1px_2px_rgba(0,0,0,0.2)]"> February 16 - March 23, 2025</p>

            <div className="flex justify-center items-center">
              <Countdown />
            </div>
          </div>
        </section>

        {/* Project Tracks Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-lg hover:scale-105 transition-transform [text-shadow:_4px_4px_8px_rgba(0,0,0,0.3)]">Build the Future of Learning</h2>
            
            <p className="text-2xl mb-12 text-gray-600 font-medium">
              Create an intelligent tutoring platform using DSA
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="text-green-600 mb-6">
                  <Users size={48} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Personalized Learning</h3>
                <p className="text-gray-600 text-lg">Customized learning paths tailored to each user's pace and style</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="text-green-600 mb-6">
                  <Users size={48} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Collaborative Groups</h3>
                <p className="text-gray-600 text-lg">Topic-based study groups for enhanced learning through collaboration</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="text-green-600 mb-6">
                  <MessageCircle size={48} className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Smart Feedback</h3>
                <p className="text-gray-600 text-lg">Real-time feedback system adapting to user sentiment and progress</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        {/* <section id="timeline" className="py-20 px-4 bg-gradient-to-r from-green-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-lg hover:scale-105 transition-transform [text-shadow:_4px_4px_8px_rgba(0,0,0,0.3)]">Project Timeline</h2>
            <p className="text-2xl mb-12 text-gray-600 animate-slide-up font-medium">
              Key milestones for Project DSAthon
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 1</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    16th FEB, Sunday
                  </time>
                  <p className="text-gray-600">Orientation + Array</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 2</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    17th FEB, Monday
                  </time>
                  <p className="text-gray-600">Strings</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 3</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    22nd FEB, Saturday
                  </time>
                  <p className="text-gray-600">Searching + Problem Practice</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 4</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    23rd FEB, Sunday
                  </time>
                  <p className="text-gray-600">Basic Recursion</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 5</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    16th MAR, Sunday
                  </time>
                  <p className="text-gray-600">Stack</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 6</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    17th MAR, Monday
                  </time>
                  <p className="text-gray-600">Queue</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 7</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    22nd MAR, Saturday
                  </time>
                  <p className="text-gray-600">Linked List - Part 1</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.25)] transition-all duration-300 group border-2 border-green-100">
                <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-2 h-24 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full group-hover:h-32 transition-all duration-300"></div>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">SESSION 8</h3>
                  <time className="text-gray-500 font-medium mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    23rd MAR, Sunday
                  </time>
                  <p className="text-gray-600">Linked List - Part 2</p>
                </div>
                <div className="absolute -right-2 -bottom-2 w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section> */}

        <CurvedTimeline />

        {/* Prerequisites Section */}
        <section id="setup" className="py-20 px-4 bg-gradient-to-br from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-12 text-center animate-fade-in drop-shadow-lg hover:scale-105 transition-transform [text-shadow:_4px_4px_8px_rgba(0,0,0,0.3)]">Prerequisites & Setup</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <h3 className="text-3xl font-bold mb-6 text-green-600">Required Tools</h3>
                <ul className="space-y-6">
                  <li className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                    <Code size={24} className="text-green-600" />
                    <span className="text-lg">Visual Studio Code</span>
                  </li>
                  <li className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                    <Code size={24} className="text-green-600" />
                    <span className="text-lg">Git Bash</span>
                  </li>
                  <li className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                    <Code size={24} className="text-green-600" />
                    <span className="text-lg">MinGW</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <h3 className="text-3xl font-bold mb-6 text-green-600">Required Accounts</h3>
                <ul className="space-y-6">
                  <li className="flex items-center space-x-4 hover:translate-x-2 transition-transform">
                    <Code size={24} className="text-green-600" />
                    <span className="text-lg">GitHub Account</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

         {/* Learning Resources Section */}
         <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-md hover:scale-105 transition-transform [text-shadow:_2px_2px_4px_rgba(0,0,0,0.2)] text-center">Pre-requisite Resources</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Essential learning materials and video tutorials to help you prepare for the challenge.
            </p>

            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-12 h-12 text-green-600 mr-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-green-600">Data Structures Basics</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Introduction to fundamental data structures concepts.
                </p>
                <a href="https://youtu.be/EAR7De6Goz4?si=CBgdw--ZGuQPKS5i" className="inline-block text-green-600 hover:text-green-700 text-lg font-semibold hover:underline">Watch Video →</a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-12 h-12 text-green-600 mr-4 animate-pulse" />
                  <h3 className="text-2xl font-bold text-green-600">Algorithm Analysis</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Learn about time complexity and algorithm efficiency.
                </p>
                <a href="https://youtu.be/1jCFUv-Xlqo?si=RlSVwNNNYUgPuPeL" className="inline-block text-green-600 hover:text-green-700 text-lg font-semibold hover:underline">Watch Video →</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 mb-6 animate-fade-in drop-shadow-lg hover:scale-105 transition-transform [text-shadow:_4px_4px_8px_rgba(0,0,0,0.3)] text-center">Frequently Asked Questions</h2>
            <p className="text-2xl mb-12 text-center text-gray-600">
              Find answers to common questions about Project DSAthon
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-600">What is the Minimum Guaranteed Wage (Min GW)?</h3>
                <p className="text-gray-600 text-lg">
                The Minimum Guaranteed Wage refers to the lowest amount an employer is legally required to pay employees, ensuring a basic standard of living.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-600">How is the Minimum Guaranteed Wage determined?</h3>
                <p className="text-gray-600 text-lg">
                It is typically set by the government based on economic conditions, cost of living, inflation, and labor market conditions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-600">What is the Digital Services Act (DSA)?
                </h3>
                <p className="text-gray-600 text-lg">
                The DSA is an EU regulation aimed at increasing transparency, accountability, and safety in digital platforms and online services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Is there a team size limit?</h3>
                <p className="text-gray-600 text-lg">
                  Teams can have 2-4 members. Solo participation is also allowed but team collaboration is encouraged.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-600">What support is available?</h3>
                <p className="text-gray-600 text-lg">
                  We provide mentorship, technical documentation, and community support through Discord and forums.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Are there any prerequisites?</h3>
                <p className="text-gray-600 text-lg">
                  Basic programming knowledge and familiarity with data structures and algorithms is required.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-600">I use a different tech stack than the ones taught
                </h3>
                <p className="text-gray-600 text-lg">
                  That's fine! You can implement the project using your preferred tech stack as long as you meet the
                  requirements.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-green-600">How does the DSA impact social media platforms?</h3>
                <p className="text-gray-600 text-lg">
                Social media companies must take stronger action against illegal content, misinformation, and harmful activities.
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

