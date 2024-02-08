"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { ImageUpload } from "../ImageUpload";
import styles from "./billboardForm.module.css";

// model Events{
//     id  String @id  @default(uuid())
//     regLink String
//     link Link[] @relation("EventsToLink")
//     desc  String
//   }

const formSchema = z.object({
  name: z.string().min(1),
});

type BillboardFormValues = z.infer<typeof formSchema>;

export const BillboardForm: React.FC = () => {
  const [url, setUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BillboardFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<BillboardFormValues> = async (data) => {
    const linkData = [
      {
        name: "url",
        link: url,
      },
    ];

    const finalData = {
      ...data,
      linkData,
    };

    console.log(finalData);

    if (url !== "") {
      try {
        await axios.post("/api/billboard", finalData);
        // reset();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name")} type="text" />
        {errors.name && <p>{`${errors.name?.message}`}</p>}
        <ImageUpload
          onChange={(url) => setUrl(url)}
          onRemove={() => setUrl("")}
          text="Upload Your Photo"
        />

        <input type="submit" className={styles.submit} />
      </form>
    </>
  );
};
