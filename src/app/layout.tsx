import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingSequence from "@/components/LoadingSequence";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlex = IBM_Plex_Sans({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex"
});

export const metadata: Metadata = {
  title: "AEROSAPIEN | Premium Aerospace Manufacturing",
  description: "Next-generation aerospace manufacturing and engineering company based in Bangalore, India. Precision CNC machining, defence systems, UAV technologies, and research-driven innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlex.variable} antialiased font-sans`}>
        <LoadingSequence />
        <Navbar />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
        <WhatsAppButton />
      </body>
    </html>
  );
}
