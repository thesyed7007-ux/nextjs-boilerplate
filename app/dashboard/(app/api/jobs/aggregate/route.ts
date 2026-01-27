import { NextResponse } from 'next/server'

// Aggregates jobs from multiple sources
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q') || 'developer'
  const location = searchParams.get('location') || ''
  const page = parseInt(searchParams.get('page') || '1')

  try {
    // Fetch from multiple sources in parallel
    const [naukriJobs, governmentJobs, linkedinJobs, indeedJobs] = await Promise.all([
      fetchNaukriJobs(query, location, page),
      fetchGovernmentJobs(query, location),
      fetchLinkedInJobs(query, location),
      fetchIndeedJobs(query, location)
    ])

    // Combine and deduplicate
    const allJobs = [...naukriJobs, ...governmentJobs, ...linkedinJobs, ...indeedJobs]
    const uniqueJobs = removeDuplicates(allJobs)

    return NextResponse.json({
      jobs: uniqueJobs,
      total: uniqueJobs.length,
      sources: ['naukri.com', 'government', 'linkedin', 'indeed'],
      query,
      location
    })

  } catch (error) {
    console.error('Job aggregation error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch jobs', jobs: [] },
      { status: 500 }
    )
  }
}

// Naukri.com scraper
async function fetchNaukriJobs(query: string, location: string) {
  try {
    // Using Naukri API or web scraping
    const response = await fetch(
      `https://www.naukri.com/jobapi/v3/search?noOfResults=50&urlType=search_by_keyword&searchType=adv&keyword=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 CareerCopilot/1.0',
          'Accept': 'application/json'
        }
      }
    )
    
    if (!response.ok) throw new Error('Naukri fetch failed')
    
    const data = await response.json()
    return data.jobDetails.map((job: any) => ({
      id: `naukri_${job.jobId}`,
      title: job.title,
      company: job.companyName,
      location: job.placeholders[0]?.label || location,
      salary: job.placeholders[1]?.label || 'Not disclosed',
      description: job.jobDescription,
      url: job.seoUrl,
      source: 'naukri.com',
      posted_date: job.createdDate,
      is_remote: job.title.toLowerCase().includes('remote'),
      type: job.jobType || 'Full-time'
    }))
  } catch (error) {
    console.error('Naukri error:', error)
    return []
  }
}

// Government jobs aggregator
async function fetchGovernmentJobs(query: string, location: string) {
  try {
    // Government job portals (India specific)
    const portals = [
      'https://www.sarkariresult.com/',
      'https://www.freejobalert.com/',
      'https://www.govtjobs.allindiajobs.in/'
    ]

    const jobs = []
    for (const portal of portals) {
      // Simplified - in production use proper scraping
      jobs.push({
        id: `gov_${Date.now()}_${portal}`,
        title: `${query} Government Job`,
        company: 'Government Sector',
        location: location || 'Multiple Locations',
        salary: 'As per government norms',
        description: `Government job for ${query} position. Apply through official portal.`,
        url: portal,
        source: 'government',
        posted_date: new Date().toISOString(),
        is_remote: false,
        type: 'Government'
      })
    }
    return jobs
  } catch (error) {
    console.error('Government jobs error:', error)
    return []
  }
}

// LinkedIn Jobs (using unofficial API)
async function fetchLinkedInJobs(query: string, location: string) {
  try {
    // Note: This requires LinkedIn API access or web scraping
    // For demo, returning mock data
    return [
      {
        id: `linkedin_${Date.now()}`,
        title: `${query} - LinkedIn`,
        company: 'Tech Company',
        location: location || 'Remote',
        salary: '$100,000 - $150,000',
        description: 'Looking for skilled professionals.',
        url: 'https://linkedin.com/jobs',
        source: 'linkedin',
        posted_date: new Date().toISOString(),
        is_remote: true,
        type: 'Full-time'
      }
    ]
  } catch (error) {
    console.error('LinkedIn error:', error)
    return []
  }
}

// Indeed Jobs
async function fetchIndeedJobs(query: string, location: string) {
  try {
    // Indeed RSS feed or API
    const response = await fetch(
      `https://rss.indeed.com/rss?q=${encodeURIComponent(query)}&l=${encodeURIComponent(location)}&sort=date`
    )
    
    const text = await response.text()
    // Parse RSS feed
    return parseRSSFeed(text, 'indeed')
  } catch (error) {
    console.error('Indeed error:', error)
    return []
  }
}

// Helper to remove duplicate jobs
function removeDuplicates(jobs: any[]) {
  const seen = new Set()
  return jobs.filter(job => {
    const key = `${job.title}-${job.company}-${job.location}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function parseRSSFeed(xml: string, source: string) {
  // Parse RSS/XML feed
  return [] // Implement RSS parsing
      }
