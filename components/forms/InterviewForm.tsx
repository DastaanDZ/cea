"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import { ImageUpload } from "../ImageUpload";
import { useEffect, useState } from "react";
import styles from "./InterviewForm.module.css";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";
import prismadb from "@/lib/prismadb";
import { InterviewExp } from "@prisma/client";

interface InterviewFormProps {
  recordedEmail: string | undefined;
  data: InterviewExp | null;
}

const formSchema = z.object({
  name: z.string().min(1),
  rollno: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  company: z.string().min(1),
  packages: z.string().min(1),
  desc: z.string().min(1),
});

type InterviewFormValues = z.infer<typeof formSchema>;

export const InterviewForm: React.FC<InterviewFormProps> = ({
  recordedEmail,
  data,
}) => {
  console.log(data);

  const notifySuccess = (text: string) =>
    toast.success(`${text} succesfully submitted`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = (text: string) =>
    toast.error(`${text} has already been used`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifyWarning = (text: string) =>
    toast.warn(`${text}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const info = (text: string) =>
    toast.info(text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [value, setValue] = useState([]);
  const [profileUrl, setProfileUrl] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

  const [checked, setChecked] = useState(false);

  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (profileUrl !== "") {
      console.log("PROFILE PHOTO UPLOADED");
      notifySuccess("Profile Photo");
    }

    if (logoUrl !== "") {
      notifySuccess("Logo");
    }
  }, [profileUrl, logoUrl]);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleChecked = () => {
    setChecked(!checked);
    console.log(checked);
  };

  // name: string;
  //   rollno: string;
  //   email: string;
  //   phone: string;
  //   company: string;
  //   packages: string;
  //   desc: string;
  //   rating: number;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InterviewFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: data || {
      name: "",
      rollno: "",
      email: "",
      phone: "",
      company: "",
      packages: "",
      desc: "",
    },
  });

  const onSubmit: SubmitHandler<InterviewFormValues> = async (data) => {
    // Convert the 'rating' value from string to integer
    // data.rating = parseInt(data.rating, 10);
    // console.log(profileUrl);
    // console.log(logoUrl);
    // console.log(data)

    const linkData = [
      {
        name: "profileUrl",
        link: profileUrl,
      },
      {
        name: "logoUrl",
        link: logoUrl,
      },
    ];

    const finalData = {
      ...data,
      rating,
      linkData,
      recordedEmail,
    };

    console.log(finalData);

    if (
      data.rollno.endsWith("ce") &&
      data.email.endsWith("ce@nitc.ac.in") &&
      recordedEmail?.endsWith("ce@nitc.ac.in") &&
      data.rollno.length == 9
    ) {
      if (profileUrl !== "" && logoUrl !== "") {
        // console.log("FOUNDDDDDDDDDD!!!!!!!!!!!");

        try {
          await axios.post("/api/interviews", finalData);
          notifySuccess("Experience");
          // Reset the form after a successful submission
        } catch (error: any) {
          if (error.response.data === "email") {
            console.log(error.response.data);
            notifyError(error.response.data);
          } else if (error.response.data === "rollno") {
            console.log(error.response.data);
            notifyError(error.response.data);
          } else if (error.response.data === "phone") {
            console.log(error.response.data);
            notifyError(error.response.data);
          } else {
            console.log(error);
            notifyError("Something has went wrong");
          }
        }
      } else if (profileUrl === "") {
        console.log("profile or logo url missing");
        notifyWarning("Profile Photo");
      } else if (logoUrl === "") {
        notifyWarning("Logo");
      }
    } else {
      notifyWarning("Not a civil student");
    }
  };

  return (
    <>
      <div className={styles.temp}>
        <div className={styles.container}>
          <div className={styles.glow1}></div>
          <div className={styles.glow2}></div>
          <div className={styles.glow3}></div>

          <div className={styles.heading}>
            <p>Your</p>
            <p className={styles.colorText}>Experience</p>
            <p>Matters</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <div className={styles.inputWrapper}>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter Your Name..."
                name="name"
              />
            </div>

            <p style={{ color: "red" }}>
              {errors.name && <p>{`${errors.name?.message}`}</p>}
            </p>

            <label>Roll No:</label>
            <div className={styles.inputWrapper}>
              <input
                {...register("rollno")}
                type="text"
                placeholder="Enter Your Roll No..."
                name="rollno"
              />

              <p style={{ color: "red" }}>
                {errors.rollno && <p>{`${errors.rollno?.message}`}</p>}
              </p>
            </div>

            <label>Contact No:</label>
            <div className={styles.inputWrapper}>
              <p style={{ marginRight: "1rem" }}>+91</p>
              <input
                {...register("phone")}
                type="text"
                placeholder="Enter Your Contact Number..."
                name="phone"
              />
            </div>

            <p style={{ color: "red" }}>
              {errors.phone && <p>{`${errors.phone?.message}`}</p>}
            </p>

            <label>Email Id:</label>
            <div className={styles.inputWrapper}>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter Your Email Id..."
                name="email"
              />
            </div>

            <p style={{ color: "red" }}>
              {errors.email && <p>{`${errors.email?.message}`}</p>}
            </p>

            <label>Name of Your Company</label>
            <div className={styles.inputWrapper}>
              <input
                {...register("company")}
                type="text"
                placeholder="Enter Name of Your Company..."
                name="company"
              />
            </div>

            <p style={{ color: "red" }}>
              {errors.company && <p>{`${errors.company?.message}`}</p>}
            </p>

            <label>packages</label>
            <div className={styles.inputWrapper}>
              <input
                {...register("packages")}
                type="text"
                placeholder="Enter Your packages..."
                name="packages"
              />
            </div>

            <p style={{ color: "red" }}>
              {errors.packages && <p>{`${errors.packages?.message}`}</p>}
            </p>

            <label>Experience</label>
            <div className={styles.inputWrapper}>
              <textarea
                id="desc"
                {...register("desc")}
                placeholder="Please Share Your Experience..."
                name="desc"
              ></textarea>
            </div>

            <p style={{ color: "red" }}>
              {errors.desc && <p>{`${errors.desc?.message}`}</p>}
            </p>

            <label>Rate Your Experience</label>

            <Rating onClick={handleRating} SVGclassName={styles.star} />

            <ImageUpload
              onChange={(imageUrl) => setProfileUrl(imageUrl)}
              onRemove={() => setProfileUrl("")}
              text="Upload Your Photo"
            />

            <ImageUpload
              onChange={(logoUrl) => setLogoUrl(logoUrl)}
              onRemove={() => setLogoUrl("")}
              text="Upload Your Company Logo"
            />

            <label className={styles.checkContainer}>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChecked}
                className={styles.checkBox}
              />
              <span className={styles.checkmark}></span>I hereby confirm that
              all information provided by me is accurate.
            </label>
            <input type="submit" />
            {/* <a type="submit" href="" className={styles.mainDiv}>
              <div className={styles.buttonDiv}>SUBMIT</div>
              <div className={styles.colorDiv}></div>
            </a> */}
          </form>
          <div className={styles.glow4}></div>
          <div className={styles.glow5}></div>
          <div className={styles.glow6}></div>
        </div>
      </div>
    </>
  );
};
