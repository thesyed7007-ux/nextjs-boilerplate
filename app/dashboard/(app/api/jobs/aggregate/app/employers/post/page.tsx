'use client'

import { useState } from 'react'
import { Building, DollarSign, MapPin, Briefcase, Clock, Upload } from 'lucide-react'

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    description: '',
    requirements: '',
    location: '',
    salary_min: '',
    salary_max: '',
    job_type: 'full-time',
    experience_level: 'mid',
    is_remote: false,
    application_deadline: '',
    contact_email: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [preview, setPreview] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/employers/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        alert('Job posted successfully!')
        // Reset form
        setFormData({
          title: '', company: '', description: '', requirements: '', location: '',
          salary_min: '', salary_max: '', job_type: 'full-time', experience_level: 'mid',
          is_remote: false, application_deadline: '', contact_email: ''
        })
      }
    } catch (error) {
      alert('Error posting job')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a Job Opening</h1>
          <p className="text-gray-600">Reach thousands of qualified candidates on CareerCopilot</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6">
              <div className="space-y-6">
                {/* Basic Info */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Job Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Job Title *</label>
                      <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="w-full p-3 border rounded-lg"
                        placeholder="e.g., Senior Frontend Developer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full p-3 border rounded-lg"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Location *</label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full p-3 border rounded-lg"
                        placeholder="e.g., Remote, Bangalore, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Job Type</label>
                      <select
                        value={formData.job_type}
                        onChange={(e) => setFormData({...formData, job_type: e.target.value})}
                        className="w-full p-3 border rounded-lg"
                      >
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                        <option value="remote">Remote</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Salary */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Salary Range (Optional but recommended)
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      value={formData.salary_min}
                      onChange={(e) => setFormData({...formData, salary_min: e.target.value})}
                      className="p-3 border rounded-lg"
                      placeholder="Minimum salary"
                    />
                    <input
                      type="number"
                      value={formData.salary_max}
                      onChange={(e) => setFormData({...formData, salary_max: e.target.value})}
                      className="p-3 border rounded-lg"
                      placeholder="Maximum salary"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Job Description *</h3>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full h-48 p-3 border rounded-lg resize-none"
                    placeholder="Describe the role, responsibilities, and what makes your company great..."
                  />
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Requirements *</h3>
                  <textarea
                    required
                    value={formData.requirements}
                    onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                    className="w-full h-32 p-3 border rounded-lg resize-none"
                    placeholder="List required skills, experience, and qualifications..."
                  />
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Experience Level</label>
                    <select
                      value={formData.experience_level}
                      onChange={(e) => setFormData({...formData, experience_level: e.target.value})}
                      className="w-full p-3 border rounded-lg"
                    >
                      <option value="entry">Entry Level (0-2 years)</option>
                      <option value="mid">Mid Level (2-5 years)</option>
                      <option value="senior">Senior Level (5+ years)</option>
                      <option value="executive">Executive</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Application Deadline</label>
                    <input
                      type="date"
                      value={formData.application_deadline}
                      onChange={(e) => setFormData({...formData, application_deadline: e.target.value})}
                      className="w-full p-3 border rounded-lg"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <input
                    type="email"
                    required
                    value={formData.contact_email}
                    onChange={(e) => setFormData({...formData, contact_email: e.target.value})}
                    className="w-full p-3 border rounded-lg"
                    placeholder="Contact email for applicants"
                  />
                </div>

                {/* Remote Option */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="remote"
                    checked={formData.is_remote}
                    onChange={(e) => setFormData({...formData, is_remote: e.target.checked})}
                    className="h-5 w-5"
                  />
                  <label htmlFor="remote" className="text-gray-700">
                    This is a remote position (work from anywhere)
                  </label>
                </div>

                {/* Submit */}
                <div className="pt-6 border-t">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Posting Job...' : 'Post Job Opening'}
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-3">
                    Your job will be visible to thousands of candidates immediately
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* Preview & Tips */}
          <div className="space-y-6">
            {/* Preview */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold mb-4">Job Preview</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500">Title</div>
                  <div className="font-semibold">{formData.title || 'Your job title will appear here'}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Company</div>
                  <div className="font-semibold">{formData.company || 'Company name'}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-semibold">
                    {formData.location || 'Location'} 
                    {formData.is_remote && ' • Remote'}
                  </div>
                </div>
                <button
                  onClick={() => setPreview(!preview)}
                  className="w-full py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                >
                  {preview ? 'Hide Preview' : 'Show Full Preview'}
                </button>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Building className="h-5 w-5" />
                Tips for Better Results
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Include salary range - attracts 3x more applicants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Be specific about required skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Mention company culture and benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Use clear, inclusive language</span>
                </li>
              </ul>
            </div>

            {/* Employer Benefits */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl shadow p-6">
              <h3 className="text-lg font-bold mb-4">Employer Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>AI candidate matching</span>
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Access to verified candidates</span>
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>Cost-effective hiring</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Save 70% hiring time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
        }
