import { NextResponse } from "next/server";
import { AGENCY_CONFIG } from "@/config/agency";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, email, phone, service, details } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (name, email, phone)" },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "1474e901-8e43-477c-937b-3ab23795fedc";

    console.log("----------------------------------------");
    console.log(`📩 NEW CONTACT ENQUIRY DISPATCHED TO ${AGENCY_CONFIG.contact.email}`);
    console.log(`Name: ${name}`);
    console.log(`Business: ${businessName || "N/A"}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service: ${service}`);
    console.log("----------------------------------------");

    const emailResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New Enquiry from ${name} (${service})`,
        from_name: name,
        replyto: email,
        to_email: AGENCY_CONFIG.contact.email,
        message: `
New Diginet Studio Website Enquiry:

Name: ${name}
Business Name: ${businessName || "N/A"}
Client Email: ${email}
Client Phone: ${phone}
Service: ${service}

Project Details:
${details}
        `,
      }),
    });

    const emailResult = await emailResponse.json();
    console.log("Web3Forms Email Result:", emailResult);

    return NextResponse.json({
      success: true,
      message: `Enquiry submitted! Email sent to ${AGENCY_CONFIG.contact.email}`,
      result: emailResult,
    });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { success: false, error: "Server error processing enquiry" },
      { status: 500 }
    );
  }
}
