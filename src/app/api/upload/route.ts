import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

/**
 * POST /api/upload
 * Accepts a multipart/form-data request with a "file" field and a "bucket" field.
 * Uses the service role key — bypasses Storage RLS entirely.
 * Never exposes the service role key to the browser.
 */
export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const bucket = (formData.get("bucket") as string) || "projects";

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  // Validate file type — only images allowed
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Only image files are allowed" }, { status: 400 });
  }

  // Validate file size — max 5MB
  const MAX_SIZE = 5 * 1024 * 1024;
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "File size must be under 5MB" }, { status: 400 });
  }

  const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const { error } = await supabaseServer.storage
    .from(bucket)
    .upload(fileName, buffer, {
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Return the public URL
  const { data: urlData } = supabaseServer.storage
    .from(bucket)
    .getPublicUrl(fileName);

  return NextResponse.json({ url: urlData.publicUrl }, { status: 201 });
}
