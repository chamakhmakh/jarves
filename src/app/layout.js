import { Inter, Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const rajdhani = Rajdhani({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Jarvis",
  description: "Next-Gen assistant from Tunisia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${rajdhani.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
