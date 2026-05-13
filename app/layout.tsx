import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Review Response Automator – Auto-reply to Google Reviews",
  description: "Auto-generate personalized responses to Google Business reviews. Save time, stay consistent, and impress customers with AI-powered replies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c089dad7-8e3c-403d-9f27-c8e7ae6d5eff"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
