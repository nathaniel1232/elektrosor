import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  try {
    // Revalidate all main pages that show Sanity content
    revalidatePath("/", "layout");
    revalidatePath("/referanser", "page");
    revalidatePath("/karriere", "page");
    revalidatePath("/om-oss", "page");
    revalidatePath("/tjenester", "page");

    return NextResponse.json({ revalidated: true, timestamp: Date.now() });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}
