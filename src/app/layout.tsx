import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentAssist AI - AI-Powered Dental Assistant",
  description:
    "Your intelligent dental care companion. Get AI-powered dental guidance, voice-assisted consultations, personalized oral health insights, and smart dental support anytime, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
         colorPrimary: "#e78a53",
      colorBackground: "#171717",
      colorText: "#f5f5f5",
      colorTextSecondary: "#a1a1aa",
      colorInputBackground: "#262626",
      colorInputText: "#f5f5f5",
      colorNeutral: "#a1a1aa",
      borderRadius: "0.75rem",
        },
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
