import { ActivityForm } from "@/components/forms/ActivityForm";
import { ClassNotesForm } from "@/components/forms/ClassNoteForm";
import { CodingForm } from "@/components/forms/CodingForm";
import { CompExamForm } from "@/components/forms/CompExamForm";
import { InterviewForm } from "@/components/forms/InterviewForm";
import { ResourceForm } from "@/components/forms/ResouceForm";
import { UserButton, useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { auth, currentUser } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { BillboardForm } from "@/components/forms/BillboardForm";

// interface FormProps{
//     kind : string;
// }

export default async function Form({
  searchParams,
}: {
  searchParams: {
    kind: string;
  };
}) {
  const user = await currentUser();
  console.log(user?.emailAddresses[0].emailAddress);
  const email = user?.emailAddresses[0].emailAddress;

  console.log("*********** ", searchParams);
  if (email === process.env.NEXT_PUBLIC_MASTER) {
    if (searchParams.kind === "classNote") {
      return <ClassNotesForm />;
    } else if (searchParams.kind === "coding") {
      return <CodingForm />;
    } else if (searchParams.kind === "compExam") {
      return <CompExamForm />;
    } else if (searchParams.kind === "activity") {
      return <ActivityForm />;
    } else if (searchParams.kind === "resource") {
      return <ResourceForm />;
    } else if (searchParams.kind === "billboard") {
      return <BillboardForm />;
    } else if (searchParams.kind === "interview") {
      return (
        <InterviewForm
          recordedEmail={user?.emailAddresses[0].emailAddress}
          data={null}
        />
      );
    }
    // Render the rest of your component content here
  } else {
    try {
      const data = await prismadb.interviewExp.findUnique({
        where: {
          email: email,
        },
      });
      console.log(data);
      return (
        <>
          <InterviewForm
            recordedEmail={user?.emailAddresses[0].emailAddress}
            data={data}
          />
          {/* <p>You are not authenticated to view this page</p> */}
        </>
      );
    } catch (error) {
      console.log(error);
    }
  }
}
