import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import UiProvider from "@/providers/UiProvider";
import Navbarr from "@/components/layout/Navbar";
// import "react-multi-carousel/lib/styles.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Craft 9 Studios",
  description: "Craft 9 Studios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#19012b] overflow-x-hidden text-white`}>
        <UiProvider>
        <div >
          <div id="content" className="hidden">
            <Navbarr />
            {children}
            <Footer />
          </div>
          <Loader/>
        </div>
        </UiProvider>
      </body>
    </html>
  );
}
