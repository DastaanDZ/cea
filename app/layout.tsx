import type { Metadata } from "next";
import "./globals.css";

import { Sora } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import NextTopLoader from "nextjs-toploader";

import styles from "./page.module.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CEA",
  description: "Civil Engineering Association NIT Calicut",
  icons: {
    icon: "/cea.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <html lang="en">
          <body
            className={sora.className}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              minHeight: "100vh",
              maxWidth: "100vw",
              overflowX: "hidden",
            }}
          >
            <NextTopLoader showSpinner={false} color="#F48FD0" />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            <Navbar />
            {children}
            <div className={styles.seperator}></div>
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
