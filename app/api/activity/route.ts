import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const activities = await prismadb.activity.findMany({
      include: {
        link: true,
      },
    });

    return NextResponse.json(activities);
  } catch (error) {
    console.log("[ACTIVITIES_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name, desc, type, linkData, activityDate, deadline, venue } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
    if (!name) {
      return new NextResponse("name is required", { status: 400 });
    }
    if (!desc) {
      return new NextResponse("desc is required", { status: 400 });
    }
    if (!type) {
      return new NextResponse("type Data is required", { status: 400 });
    }
    if (!linkData) {
      return new NextResponse("link Data is required", { status: 400 });
    }
    if (!activityDate) {
      return new NextResponse("activityDate Data is required", { status: 400 });
    }
    if (!deadline) {
      return new NextResponse("deadline Data is required", { status: 400 });
    }
    if (!venue) {
      return new NextResponse("venue Data is required", { status: 400 });
    }

    const event = await prismadb.activity.create({
      data: {
        name: name,
        desc: desc,
        type: type,
        activityDate: activityDate,
        deadline : deadline,
        venue : venue,
        link: {
          create: linkData.map((link: any) => ({
            name: link.name,
            link: link.link,
          })),
        },
      },
    });

    return new NextResponse("Activity created successfully", { status: 201 });
  } catch (error) {
    console.log("ACTIVITY_POST", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
