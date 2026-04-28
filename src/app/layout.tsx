import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import CookieConsent from "@/components/CookieConsent";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Elektro Sør AS – Din elektroentreprenør i Sør-Norge",
    template: "%s | Elektro Sør AS",
  },
  description:
    "Elektro Sør AS er din lokale elektroentreprenør for privat- og næringsmarkedet. Vi utfører elektriske installasjoner, varmepumper, ladeanlegg og mer.",
  keywords: ["elektroentreprenør", "elektriker", "Sør-Norge", "elektriske installasjoner", "ladeanlegg"],
  openGraph: {
    siteName: "Elektro Sør AS",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBot />
        <CookieConsent />
      </body>
    </html>
  );
}
