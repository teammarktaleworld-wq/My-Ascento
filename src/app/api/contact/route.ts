// import { NextRequest, NextResponse } from "next/server";
// // import { prisma } from "@/lib/prisma";

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { name, age, phone, program, message } = body;

//     if (!name || !phone) {
//       return NextResponse.json(
//         { error: "Name and phone number are required." },
//         { status: 400 }
//       );
//     }

//     const enquiry = await prisma.contactEnquiry.create({
//       data: {
//         name,
//         age: age ? parseInt(age) : null,
//         phone,
//         program: program || "Abacus Mental Math",
//         message: message || null,
//       },
//     });

//     return NextResponse.json(
//       { success: true, id: enquiry.id },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error saving enquiry:", error);
//     return NextResponse.json(
//       { error: "Failed to save enquiry. Please try again." },
//       { status: 500 }
//     );
//   }
// }