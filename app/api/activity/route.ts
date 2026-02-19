import { createClient } from '@/lib/supabase-server';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/activity (no auth required for reading)
export async function GET(req: NextRequest) {
  const supabase = createClient();
  const { searchParams } = new URL(req.url);
  
  const limit = searchParams.get('limit') || '100';
  const actor = searchParams.get('actor');
  const actionType = searchParams.get('action_type');
  const project = searchParams.get('project');

  let query = supabase
    .from('activity_log')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(parseInt(limit));

  if (actor) query = query.eq('actor', actor);
  if (actionType) query = query.eq('action_type', actionType);
  if (project) query = query.eq('project', project);

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST /api/activity (no auth required for logging)
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const body = await req.json();

  const { data, error } = await supabase
    .from('activity_log')
    .insert([
      {
        ...body,
        created_at: new Date().toISOString(),
      },
    ])
    .select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data[0], { status: 201 });
}
