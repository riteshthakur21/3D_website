import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // Replace with Email provider or DB persistence.
  console.log("Contact submission", parsed.data);

  return NextResponse.json({ ok: true });
}
