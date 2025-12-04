// app/api/testimonials/route.ts
import { NextResponse } from "next/server";
import { testimonials, type Testimonial } from "@/data/testimonials";

// GET: return all testimonials
export async function GET() {
  return NextResponse.json({ success: true, data: testimonials });
}

// POST: add a new testimonial (temporary in-memory)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newTestimonial: Testimonial = {
      id: testimonials.length + 1,
      name: body.name || "Anonymous",
      message: body.message || "",
      rating: body.rating ? Number(body.rating) : 5,
      date: new Date().toISOString().split("T")[0]
    };

    testimonials.push(newTestimonial);

    return NextResponse.json({ success: true, data: newTestimonial }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Invalid data" }, { status: 400 });
  }
}
