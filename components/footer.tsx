import { ColouredText } from "./ColouredText";
import styles from "./footer.module.css";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import arrowImg from "@/public/footerArrow 1.png";
import FooterBg from "./assests/FooterBg";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.bg}>{/* <FooterBg /> */}</div>
        <div className={styles.infoContainer}>
          <h1 className={styles.colorText}>Civil Engineering Association</h1>
          <p>
            Please write comments if you find any bug in the above programs or
            other ways to solve the same problem.
          </p>
          <div className={styles.socialMediaIconContainer}>
            {/* <FaGithub className={styles.icon} /> */}
            <a
              href="https://www.instagram.com/cea_nitc_?igsh=MWw0ODByM21uOTVlNQ=="
              target="_blank"
            >
              <FaInstagram className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/company/cea-nitc/"
              target="_blank"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <p>Quick Links</p>
          <ul>
            <Link href={"/interviews"}>
              <li>Interview Experience</li>
            </Link>
            <Link href={"/compExam"}>
              <li>Competitive Exams</li>
            </Link>
            <Link href={"/resources"}>
              <li>Resource</li>
            </Link>
          </ul>
        </div>
        <div className={styles.contactContainer}>
          <p style={{ padding: "0 2rem" }}>STAY UP TO DATE</p>
          <h3>Get Our Newsletter</h3>
          <div className={styles.inputBtnContainer}>
            <input type="email" placeholder="Your Email" />
            <button className={styles.emailInput}>
              <div className={styles.arrowDiv}>
                <Image src={arrowImg} alt="" className={styles.arrowImg} />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* <div className={styles.bottom}>
            <ul>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
                <li>Terms and Condition</li>
            </ul>
            <p>CEA NITC</p>
    </div> */}
    </>
  );
};
