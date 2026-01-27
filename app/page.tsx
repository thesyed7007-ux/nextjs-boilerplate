'use client'

import { useState } from 'react'
import { Search, FileText, Target, BarChart3, MessageSquare, DollarSign, Users, Award, Clock, CheckCircle } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  
  const features = [
    { icon: Search, title: "Universal Job Search", desc: "Search LinkedIn, Indeed, Glassdoor simultaneously" },
    { icon: FileText, title: "AI Resume Optimizer", desc: "Beat ATS robots with 95% match scores" },
    { icon: BarChart3, title: "Application Tracker", desc: "Track all applications in one dashboard" },
    { icon: MessageSquare, title: "AI Mock Interviews", desc: "Practice with realistic AI feedback" },
    { icon: DollarSign, title: "Salary Negotiation", desc: "Get exact salary data + scripts" },
    { icon: Users, title: "Networking Assistant", desc: "Find connections at target companies" },
  ]
  
  const stats = [
    { number: "100%", label: "Free Forever" },
    { number: "70%", label: "Faster Job Search" },
    { number: "23%", label: "Higher Offers" },
    { number: "10+", label: "Hours Saved Weekly" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">CareerCopilot</h1>
                <p className="text-sm text-gray-600">AI Career Platform • 100% Free</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="hidden md:block text-gray-600 hover:text-blue-600">Features</a>
              <a href="#how" className="hidden md:block text-gray-600 hover:text-blue-600">How It Works</a>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
                Launch App
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-100 text-green-800 rounded-full">
          <CheckCircle className="h-4 w-4" />
          <span className="font-bold">100% FREE FOREVER</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Land Your Dream Job
          <span className="block text-blue-600">With AI Assistance</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Everything you need for your job search in one platform. AI-powered, completely free.
          No subscriptions, no credit card required.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition">
            Get Started Free
          </button>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">No credit card • No hidden fees • Free forever</p>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Everything You Need, Completely Free</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="max-w-4xl mx-auto">
            {[
              { step: "1", title: "Sign Up Free", desc: "No credit card required. Get started in 30 seconds." },
              { step: "2", title: "Connect Your Profile", desc: "Import LinkedIn or upload resume." },
              { step: "3", title: "Set Preferences", desc: "Tell us your target roles, salary, location." },
              { step: "4", title: "Let AI Work", desc: "AI searches jobs, optimizes resume, tracks applications." },
              { step: "5", title: "Get Hired", desc: "Receive better offers faster with negotiation support." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Free Career Upgrade</h2>
          <p className="mb-8 opacity-90">Join thousands who found better jobs faster with CareerCopilot.</p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition">
            Launch CareerCopilot Now
          </button>
          <p className="text-sm opacity-75 mt-4">Free forever • No credit card • No hidden limits</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold">CareerCopilot</span>
              </div>
              <p className="text-gray-600">Your free AI career assistant</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-600 mb-2">Built with ❤️ to help job seekers</p>
              <p className="text-sm text-gray-500">© 2024 CareerCopilot. 100% free for users.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
      }
