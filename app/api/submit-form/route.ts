import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.email || !body.phone || !body.privacy || !body.name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Prepare Active Campaign form data
    const formData = new URLSearchParams({
      u: '44',
      f: '44',
      s: '',
      c: '0',
      m: '0',
      act: 'sub',
      v: '2',
      or: process.env.ACTIVE_CAMPAIGN_TOKEN || '',
      email: body.email,
      phone: body.phone,
      fullname: body.name,
      'field[2]': body.datetime || '',
      'field[10]': body.variant || 'long-a',
    })

    // Submit to Active Campaign
    const response = await fetch(
      'https://hausbox.activehosted.com/proc.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      }
    )

    if (!response.ok) {
      throw new Error('Active Campaign submission failed')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Submission failed' },
      { status: 500 }
    )
  }
}
