import "./global.css";
import { ReactNode } from "react";
import { Michroma, Comic_Neue,Smooch_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";


// Define the Michroma font
const michroma = Michroma({
  weight: "400", // Michroma only has regular weight
  subsets: ["latin"],
  variable: "--font-michroma",
  display: "swap",
});
const comic = Comic_Neue({
  weight: "400", // Michroma only has regular weight
  subsets: ["latin"],
  variable: "--font-comic",
  display: "swap",
  style: "italic",

});

const smooch = Smooch_Sans({
  weight: "700", // Michroma only has regular weight
  subsets: ["latin"],
  variable: "--font-smooch",
  display: "swap",

    
});



export const metadata = {
  title: "iCogLabs",
  description: "AGI Building company",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={` text-white m-0 p-0 ${michroma.variable} ${comic.variable} ${smooch.variable}`}
    >
      <body className="m-0 p-0 box-border overflow-x-hidden font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
