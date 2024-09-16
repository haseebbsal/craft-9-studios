import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import UiProvider from "@/providers/UiProvider";
import Navbarr from "@/components/layout/Navbar";
import AnimatedCursor from "react-animated-cursor";
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
        <AnimatedCursor
      innerSize={15}
      outerSize={15}
      color='255,255,255'
      outerAlpha={0.5}
      innerScale={1}
      outerScale={5}
      innerStyle={{visibility:'hidden'}}
      showSystemCursor={true}
      outerStyle={{border:"2px solid white" ,backgroundColor:'transparent'}}
      clickables={[
        'a',
        'img',
        'video',
        'input',
        'label',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      </body>
    </html>
  );
}
