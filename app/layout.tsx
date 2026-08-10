import "./globals.css";
import type { Metadata } from "next";
import Header from "./templates/header";
import Footer from "./templates/footer";
import { DM_Sans, Inter, Lexend } from "next/font/google";

const lexend = Lexend({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--Lexend",
  display: "swap",
});
const inter = Inter({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
  variable: "--Inter",
  display: "swap",
});
const dmsans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--DMSans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Data Mastery",
  description: "Consultor educacional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${lexend.variable} ${inter.variable}  ${dmsans.variable}  antialiased bg-ui-colors-background `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
