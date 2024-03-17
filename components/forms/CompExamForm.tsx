"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { ImageUpload } from "../ImageUpload";

const formSchema = z.object({
  name: z.string().min(1),
  type: z.string().min(1),
  title: z.string().min(1),
  subTitle: z.string().min(1),
  desc: z.string().min(1),
  webLink: z.string().min(1),
});

type CompExamFormValues = z.infer<typeof formSchema>;

export const CompExamForm: React.FC = () => {
  const [syllabusUrl, setSyllabusUrl] = useState("");
  const [notesUrl, setNotesUrl] = useState("");
  const [webLink, setWebLink] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CompExamFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<CompExamFormValues> = async (data) => {
    const linkData = [
      {
        name: "syllabusUrl",
        link: syllabusUrl,
      },
      {
        name: "notesUrl",
        link: notesUrl,
      },
      {
        name: "webLink",
        link: data.webLink,
      },
    ];

    const finalData = {
      ...data,
      linkData,
    };

    console.log(finalData);

    if (syllabusUrl !== "" && notesUrl !== "") {
      try {
        await axios.post("/api/compExam", finalData);
        reset();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name")} type="text" />
        {errors.name && <p>{`${errors.name?.message}`}</p>}
        <label>Type</label>
        <select {...register("type")}>
          <option value="">Select...</option>
          <option value="core exam">core exam</option>
        </select>
        {errors.type && <p>{`${errors.type?.message}`}</p>}
        <label>Title </label>
        <input {...register("title")} type="text" />
        {errors.title && <p>{`${errors.title?.message}`}</p>}
        <label>Subtitle</label>
        <input {...register("subTitle")} type="text" />
        {errors.subTitle && <p>{`${errors.subTitle?.message}`}</p>}
        <label>Description</label>
        <input {...register("desc")} type="text" />
        {errors.desc && <p>{`${errors.desc?.message}`}</p>}

        <input {...register("webLink")} type="text" />
        {errors.webLink && <p>{`${errors.webLink?.message}`}</p>}

        <ImageUpload
          onChange={(syllabusUrl) => setSyllabusUrl(syllabusUrl)}
          onRemove={() => setSyllabusUrl("")}
          text="Upload Syllabus"
        />

        <ImageUpload
          onChange={(notesUrl) => setNotesUrl(notesUrl)}
          onRemove={() => setNotesUrl("")}
          text="Upload Notes"
        />

        <input type="submit" />
      </form>
    </>
  );
};
