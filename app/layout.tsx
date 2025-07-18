import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dialogue Learn",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider appearance={{
          variables: {
            colorPrimary: '#FF5933'
          }
        }}>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
