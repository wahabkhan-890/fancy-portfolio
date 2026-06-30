import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

// GET — Sab emails lo
export async function GET() {
  const { data, error } = await supabaseServer
    .from("emails")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST — Naya email subscribe karo
export async function POST(req: Request) {
  const body = await req.json();

  const { data, error } = await supabaseServer
    .from("emails")
    .insert(body)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}