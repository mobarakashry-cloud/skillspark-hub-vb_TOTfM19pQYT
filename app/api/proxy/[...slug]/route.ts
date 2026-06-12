import { NextRequest, NextResponse } from 'next/server'

const allowedMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']

export async function handler(req: NextRequest, slug: string[] | undefined) {
  const method = req.method || 'GET'
  if (!allowedMethods.includes(method)) return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })

  const backend = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_API_URL
  if (!backend) return NextResponse.json({ error: 'Backend URL not configured' }, { status: 500 })

  const path = slug && slug.length ? `/${slug.join('/')}` : ''
  const target = `${backend.replace(/\/$/, '')}${path}`

  const headers: Record<string, string> = {}
  // Copy selected headers from incoming request
  req.headers.forEach((value, key) => {
    if (key.toLowerCase() === 'host') return
    headers[key] = value
  })

  // Inject secret auth header server-side
  if (process.env.API_SECRET) {
    headers['authorization'] = `Bearer ${process.env.API_SECRET}`
  }

  const body = method === 'GET' || method === 'HEAD' ? undefined : await req.text()

  const res = await fetch(target, {
    method,
    headers,
    body,
  })

  const respHeaders = new Headers(res.headers)
  const contentType = respHeaders.get('content-type') || ''
  const isJson = contentType.includes('application/json')
  const data = isJson ? await res.json() : await res.text()

  return NextResponse.json(
    { data },
    {
      status: res.status,
    }
  )
}

export async function GET(req: NextRequest, { params }: { params: { slug?: string[] } }) {
  return handler(req, params.slug)
}

export async function POST(req: NextRequest, { params }: { params: { slug?: string[] } }) {
  return handler(req, params.slug)
}

export async function PUT(req: NextRequest, { params }: { params: { slug?: string[] } }) {
  return handler(req, params.slug)
}

export async function PATCH(req: NextRequest, { params }: { params: { slug?: string[] } }) {
  return handler(req, params.slug)
}

export async function DELETE(req: NextRequest, { params }: { params: { slug?: string[] } }) {
  return handler(req, params.slug)
}
