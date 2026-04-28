import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  try {
    // Revalidate all Sanity content tags
    await Promise.all([
      revalidateTag("testimonial"),
      revalidateTag("referanse"),
      revalidateTag("siteSettings"),
      revalidateTag("sertifisering"),
      revalidateTag("jobPosting"),
      revalidateTag("chatSettings"),
    ]);

    // Also revalidate main pages
    revalidatePath("/", "layout");
    revalidatePath("/referanser");
    revalidatePath("/karriere");

    return NextResponse.json({ revalidated: true, timestamp: Date.now() });
  } catch (err) {
    console.error("Revalidation error:", err);
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}
