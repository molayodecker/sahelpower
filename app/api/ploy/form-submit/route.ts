import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  // Placeholder until a CRM/email integration is wired up.
  return NextResponse.json({ ok: true });
}
