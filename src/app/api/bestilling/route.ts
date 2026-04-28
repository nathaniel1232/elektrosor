import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phoneNumber,
      address,
      city,
      postalCode,
      description,
      serviceType,
    } = body;

    // Validate required fields
    if (!name || !email || !phoneNumber || !description) {
      return NextResponse.json(
        { error: "Mangler påkrevde felt" },
        { status: 400 }
      );
    }

    const apiKey = process.env.INSTALLER_API_KEY;
    if (!apiKey) {
      console.error("INSTALLER_API_KEY is not set");
      return NextResponse.json(
        { error: "Serverkonfigurasjonsfeil" },
        { status: 500 }
      );
    }

    const orderData = {
      name: `Bestilling fra ${name} – ${serviceType ?? "Elektroarbeid"}`,
      description: description,
      address: address ?? "",
      city: city ?? "",
      postalCode: postalCode ?? "",
      countryCode: "NO",
      email: email,
      phoneNumber: phoneNumber,
      contactPersonName: name,
      metadata: {
        serviceType: serviceType ?? "Ikke spesifisert",
        source: "elektrosor.no",
      },
    };

    const response = await fetch("https://api.installer.com/api/v1/order", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Installer API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Kunne ikke opprette bestilling. Prøv igjen eller ring oss direkte." },
        { status: 502 }
      );
    }

    const result = await response.json();
    return NextResponse.json({ success: true, orderId: result.id }, { status: 201 });
  } catch (err) {
    console.error("Bestilling error:", err);
    return NextResponse.json(
      { error: "En uventet feil oppstod. Prøv igjen." },
      { status: 500 }
    );
  }
}
