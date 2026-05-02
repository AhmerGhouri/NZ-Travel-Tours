import { NextResponse } from 'next/server';
import { getTours } from '@/lib/cms';

/**
 * Headless CMS API Endpoint: GET /api/tours
 * This endpoint provides tour data in JSON format, just like a Headless CMS would.
 */
export async function GET() {
  try {
    const tours = await getTours();
    return NextResponse.json(tours);
  } catch (error) {
    console.error('Failed to fetch tours from CMS:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
