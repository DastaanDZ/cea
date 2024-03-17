import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const compExam = await prismadb.competitiveExam.findMany({
      include: {
        link: true,
      },
    });

    return NextResponse.json(compExam);
  } catch (error) {
    console.log("[COMPEXAM_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name, type, title, subTitle, desc, linkData, webLink } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!desc) {
      return new NextResponse("desc is required", { status: 400 });
    }
    if (!linkData) {
      return new NextResponse("regLink is required", { status: 400 });
    }

    if (!type) {
      return new NextResponse("Type is required", { status: 400 });
    }
    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }
    if (!subTitle) {
      return new NextResponse("subTitle is required", { status: 400 });
    }

    const compExam = await prismadb.competitiveExam.create({
      data: {
        name: name,
        type: type,
        title: title,
        subTitle: subTitle,
        desc: desc,
        date: new Date(),
        link: {
          create: linkData.map((link: any) => ({
            name: link.name,
            link: link.link,
          })),
        },
      },
    });

    return new NextResponse("CompExam created successfully", { status: 201 });
  } catch (error) {
    console.log("COMPEXAM_POST", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
