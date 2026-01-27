export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section with FREE badge */}
      <section className="text-center py-20 px-4">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-100 text-green-800 rounded-full">
          <span className="font-bold">🎉 100% FREE FOREVER</span>
          <span className="text-sm">No credit card, no subscriptions</span>
        </div>
        
        <h1 className="text-5xl font-bold mb-6">
          CareerCopilot: Your <span className="text-green-600">Free</span> AI Career Assistant
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Everything you need to land your dream job. <span className="font-bold">Completely free.</span> 
          No "premium" features, no paywalls, no limits.
        </p>
        
        <div className="space-y-4 max-w-md mx-auto">
          <button className="w-full py-4 bg-green-600 text-white text-lg font-bold rounded-xl hover:bg-green-700">
            Get Started - It's Free
          </button>
          <p className="text-sm text-gray-500">
            No credit card required • No hidden fees • Free forever
          </p>
        </div>
      </section>

      {/* Features - All Free */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Everything is Free. Really.</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { 
              title: "AI Resume Builder", 
              desc: "Upload any resume, AI optimizes it for each job. Unlimited rewrites.",
              free: "✓ Always free"
            },
            { 
              title: "Job Search Aggregator", 
              desc: "Search 20+ job sites at once. Real-time updates. No limits.",
              free: "✓ Always free" 
            },
            { 
              title: "Application Tracker", 
              desc: "Track unlimited applications with reminders and analytics.",
              free: "✓ Always free" 
            },
            { 
              title: "AI Mock Interviews", 
              desc: "Practice with AI that gives feedback. Unlimited sessions.",
              free: "✓ Always free" 
            },
            { 
              title: "Salary Research", 
              desc: "See exact salaries for your role. Negotiation scripts included.",
              free: "✓ Always free" 
            },
            { 
              title: "Career Analytics", 
              desc: "Track progress, skill gaps, and growth opportunities.",
              free: "✓ Always free" 
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-green-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  {feature.free}
                </span>
              </div>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Stay Free */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How We Stay Free Forever</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold mb-2">Sponsorships</h3>
              <p className="text-gray-600">Companies sponsor to reach qualified candidates</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="font-bold mb-2">Donations</h3>
              <p className="text-gray-600">Optional donations from those who can support</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">Efficient Tech</h3>
              <p className="text-gray-600">Serverless & open-source keeps costs near zero</p>
            </div>
          </div>
          <p className="mt-8 text-gray-600">
            <strong>Our promise:</strong> Core features will <strong>never</strong> become paid. 
            If we add premium features, they'll be for businesses only.
          </p>
        </div>
      </section>
    </div>
  );
        }
