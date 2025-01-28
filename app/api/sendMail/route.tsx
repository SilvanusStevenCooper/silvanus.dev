import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import db from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, phone, service, message } = body;
  console.log("Data", firstName, lastName, email, phone, service, message);

  if (!firstName) {
    console.log("First name is missing");
    return new NextResponse("First name is required", { status: 400 });
  }

  if (!lastName) {
    console.log("Last name is missing");
    return new NextResponse("Last name is required", { status: 400 });
  }

  if (!email) {
    console.log("Email is missing");
    return new NextResponse("Email is required", { status: 400 });
  }
  if (!phone) {
    console.log("Phone is required");
    return new NextResponse("Phone is required", { status: 400 });
  }

  if (!service) {
    console.log("Service is required");
    return new NextResponse("Service is required", { status: 400 });
  }

  if (!message) {
    console.log("Message is required");
    return new NextResponse("Message is required", { status: 400 });
  }

  try {
    // Send the email
    const response = await db.message.create({
      data: body,
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse("Failed to send email.", { status: 500 });
  }
}
