import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { RightArrowButton } from "./RightArrowButton";
import styles from "./imageUpload.module.css";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useState } from "react";

interface ImageUploadProps {
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  // value: string[];
  text: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  text,
}) => {
  const [isUploaded, setIsUploaded] = useState(false);

  const onUpload = (result: any) => {
    console.log(result.info.secure_url);
    onChange(result.info.secure_url);
    setIsUploaded(true);
  };

  return (
    <>
      <CldUploadWidget onUpload={onUpload} uploadPreset="interviews">
        {({ open }) => {
          return (
            <button onClick={() => open()} className={styles.upload}>
              <MdOutlineDriveFolderUpload
                size={25}
                style={{ background: "transparent" }}
              />
              {text}
              {isUploaded && <TiTick color="green" size={25} />}
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};
