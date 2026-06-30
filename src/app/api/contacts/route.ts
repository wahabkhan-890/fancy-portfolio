import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

// GET — Sab contacts lo
export async function GET() {
  const { data, error } = await supabaseServer
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST — Naya contact message save karo
export async function POST(req: Request) {
  const body = await req.json();

  const { data, error } = await supabaseServer
    .from("contacts")
    .insert(body)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}