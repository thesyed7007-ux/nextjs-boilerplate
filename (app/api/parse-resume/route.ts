import { NextResponse } from 'next/server'
import pdfParse from 'pdf-parse'

export async function POST(req: Request) {
  const formData = await req.formData()
  const file = formData.get('resume') as File
  
  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }
  
  // Parse locally - no external API costs
  const buffer = Buffer.from(await file.arrayBuffer())
  
  if (file.type === 'application/pdf') {
    try {
      const data = await pdfParse(buffer)
      return NextResponse.json({ text: data.text })
    } catch (error) {
      return NextResponse.json({ error: 'Failed to parse PDF' }, { status: 500 })
    }
  } else if (file.type === 'text/plain') {
    const text = buffer.toString('utf-8')
    return NextResponse.json({ text })
  }
  
  return NextResponse.json({ error: 'Unsupported file type' }, { status: 400 })
}
