import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider/MainProvider";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito-sans",
});

export const metadata: Metadata = {
  title: "Rapid Cyber Prevention Program (RCPP)",
  description:
    "Rapid Cyber Prevention Program (RCPP) web application. The system will serve as a central platform for reporting cyber incidents, raising awareness, and offering support services to the general public and law enforcement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}