'use client'

import { useState, useEffect } from 'react'
import { 
  BarChart3, Briefcase, FileText, MessageSquare, DollarSign, 
  Target, Users, TrendingUp, Bell, Search, Zap, Award 
} from 'lucide-react'

export default function Dashboard() {
  const [stats, setStats] = useState({
    applications: 12,
    interviews: 3,
    offers: 1,
    wishlist: 8,
    matchScore: 85,
    savedJobs: 15
  })

  const [recentJobs, setRecentJobs] = useState([
    { id: 1, company: 'Google', title: 'Senior Frontend Developer', status: 'interview', match: 92 },
    { id: 2, company: 'Microsoft', title: 'UX Designer', status: 'applied', match: 78 },
    { id: 3, company: 'Amazon', title: 'Backend Engineer', status: 'wishlist', match: 85 },
  ])

  const [upcomingInterviews, setUpcomingInterviews] = useState([
    { id: 1, company: 'Google', date: 'Tomorrow, 2:00 PM', role: 'Senior Frontend Developer' },
    { id: 2, company: 'Meta', date: 'Friday, 10:00 AM', role: 'Product Manager' },
  ])

  const [skillGaps, setSkillGaps] = useState([
    { skill: 'AWS', current: 60, target: 85 },
    { skill: 'TypeScript', current: 75, target: 90 },
    { skill: 'Docker', current: 40, target: 75 },
  ])

  const quickActions = [
    { icon: Search, label: 'Search Jobs', color: 'blue', link: '/jobs' },
    { icon: FileText, label: 'Optimize Resume', color: 'green', link: '/resume' },
    { icon: MessageSquare, label: 'Mock Interview', color: 'purple', link: '/interview' },
    { icon: DollarSign, label: 'Salary Research', color: 'yellow', link: '/salary' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Career Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's your career progress</p>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            + Add Application
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="bg-white p-6 rounded-xl shadow">
            <div className="text-2xl font-bold text-blue-600">{value}</div>
            <div className="text-sm text-gray-600 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickActions.map((action, idx) => {
            const Icon = action.icon
            return (
              <a
                key={idx}
                href={action.link}
                className={`bg-white p-6 rounded-xl shadow hover:shadow-md transition border-l-4 border-${action.color}-500`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 bg-${action.color}-100 rounded-lg`}>
                    <Icon className={`h-6 w-6 text-${action.color}-600`} />
                  </div>
                  <div>
                    <div className="font-semibold">{action.label}</div>
                    <div className="text-sm text-gray-500">Click to start</div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Recent Applications</h2>
              <a href="/jobs" className="text-blue-600 hover:text-blue-800">View All</a>
            </div>
            <div className="space-y-4">
              {recentJobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div>
                    <div className="font-semibold">{job.company}</div>
                    <div className="text-gray-600">{job.title}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className={`px-3 py-1 rounded-full text-sm ${
                        job.status === 'interview' ? 'bg-yellow-100 text-yellow-800' :
                        job.status === 'applied' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {job.status}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{job.match}% match</div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Gaps */}
          <div className="bg-white rounded-xl shadow p-6 mt-6">
            <h2 className="text-xl font-bold mb-6">Skill Gap Analysis</h2>
            <div className="space-y-6">
              {skillGaps.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.skill}</span>
                    <span className="text-sm text-gray-600">{skill.current}% → {skill.target}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{ width: `${skill.current}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Recommended: <a href="#" className="text-blue-600">AWS Certified Solutions Architect</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Interviews */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Upcoming Interviews</h2>
            <div className="space-y-4">
              {upcomingInterviews.map((interview) => (
                <div key={interview.id} className="p-4 border rounded-lg">
                  <div className="font-semibold">{interview.company}</div>
                  <div className="text-sm text-gray-600">{interview.role}</div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-blue-600">
                    <Bell className="h-4 w-4" />
                    {interview.date}
                  </div>
                  <button className="w-full mt-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                    Prepare Interview
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* AI Suggestions */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6" />
              <h2 className="text-xl font-bold">AI Suggestions</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Award className="h-5 w-5 mt-0.5" />
                <span>Add 3 more projects to your portfolio</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 mt-0.5" />
                <span>Connect with 5 recruiters at Google</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-5 w-5 mt-0.5" />
                <span>Your resume match score increased by 12%</span>
              </li>
            </ul>
            <button className="w-full mt-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
              View All Suggestions
            </button>
          </div>

          {/* Job Alert */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">New Job Alert</h2>
            <div className="p-4 bg-green-50 rounded-lg mb-4">
              <div className="font-semibold text-green-800">Perfect Match!</div>
              <div className="text-sm text-green-600">Senior React Developer at Netflix</div>
              <div className="text-xs text-green-500 mt-1">95% match to your profile</div>
            </div>
            <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
     }
