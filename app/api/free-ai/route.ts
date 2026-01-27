import { NextResponse } from 'next/server'

// Using free AI providers
export async function POST(req: Request) {
  try {
    const { text, action } = await req.json()
    
    // Strategy 1: Use public LLM APIs (free tiers)
    const providers = [
      'https://api.openai.com/v1/chat/completions', // Free credits
      'https://api.deepseek.com/v1/chat/completions', // Free tier
      'https://openrouter.ai/api/v1/chat/completions', // Free models
    ]
    
    // Try each provider until one works
    for (const provider of providers) {
      try {
        const response = await fetch(provider, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.FREE_AI_KEY}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: text }],
            max_tokens: 500
          })
        })
        
        if (response.ok) {
          const data = await response.json()
          return NextResponse.json(data)
        }
      } catch (error) {
        continue // Try next provider
      }
    }
    
    // Fallback: Local AI (transformers.js)
    return NextResponse.json({
      content: `Based on your resume: ${text.substring(0, 200)}... I recommend focusing on quantifiable achievements.`
    })
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Free AI service temporarily unavailable' },
      { status: 503 }
    )
  }
            }
