import { NextResponse } from 'next/server'

// Scrape public job boards (legal & ethical)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q') || 'developer'
  const location = searchParams.get('location') || 'remote'
  
  // Use public APIs that don't require payment
  const jobs = await Promise.allSettled([
    fetch(`https://api.github.com/search/issues?q=label:hiring+${query}`),
    fetch(`https://hn.algolia.com/api/v1/search?tags=job&query=${query}`),
    fetch(`https://www.reddit.com/r/forhire/search.json?q=${query}&restrict_sr=on`),
  ]).then(results => {
    return results
      .filter(result => result.status === 'fulfilled')
      .map(result => (result as PromiseFulfilledResult<any>).value)
  })
  
  return NextResponse.json({
    jobs: jobs.flat().slice(0, 50), // Limit to stay within free tier
    note: 'Free job search powered by public APIs',
    limits: '50 jobs per search'
  })
}
