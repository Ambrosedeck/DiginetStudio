import { NextResponse } from "next/server";
import { AGENCY_CONFIG } from "@/config/agency";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, date, slot, notes } = body;

    if (!name || !email || !phone || !date || !slot) {
      return NextResponse.json(
        { success: false, error: "Missing required booking fields" },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "1474e901-8e43-477c-937b-3ab23795fedc";

    console.log("----------------------------------------");
    console.log(`📅 NEW APPOINTMENT BOOKING DISPATCHED TO ${AGENCY_CONFIG.contact.email}`);
    console.log(`Client Name: ${name}`);
    console.log(`Client Email: ${email}`);
    console.log(`Client Phone: ${phone}`);
    console.log(`Service: ${service}`);
    console.log(`Date: ${date}`);
    console.log(`Time Slot: ${slot}`);
    console.log("----------------------------------------");

    const emailResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `NEW APPOINTMENT: ${name} on ${date} at ${slot}`,
        from_name: name,
        replyto: email,
        to_email: AGENCY_CONFIG.contact.email,
        message: `
Diginet Studio New Appointment Booking:

Client Name: ${name}
Client Email: ${email}
Client Phone: ${phone}
Requested Service: ${service}
Appointment Date: ${date}
Time Slot: ${slot}

Notes:
${notes || "None"}
        `,
      }),
    });

    const emailResult = await emailResponse.json();
    console.log("Web3Forms Email Result:", emailResult);

    return NextResponse.json({
      success: true,
      message: `Appointment booked! Notification sent to ${AGENCY_CONFIG.contact.email}`,
      booking: { name, email, phone, service, date, slot },
      result: emailResult,
    });
  } catch (error) {
    console.error("Error processing appointment booking:", error);
    return NextResponse.json(
      { success: false, error: "Server error processing booking" },
      { status: 500 }
    );
  }
}
