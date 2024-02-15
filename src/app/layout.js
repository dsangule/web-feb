import { Inter, Koulen } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter'
  });
const koulen = Koulen({ 
  subsets: ["latin"], 
  weight: '400',
  variable: '--font-koulen'
  });

export const metadata = {
  title: "JNU Sayz",
  description: "JNU SoE online community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${koulen.variable}`}>
      <body>{children}</body>
    </html>
  );
}
