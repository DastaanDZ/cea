import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name, linkData } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const compExam = await prismadb.billboard.create({
      data: {
        name: name,
        link: linkData[0].link,
      },
    });

    return new NextResponse("Billboard created successfully", { status: 201 });
  } catch (error) {
    console.log("Billboard_POST", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
