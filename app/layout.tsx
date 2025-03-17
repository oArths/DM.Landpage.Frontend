import type { Metadata } from "next";
import { DM_Sans, Inter, Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  weight: ["600", "700", "800"],
  variable: "--Lexend",
  display: "swap",
});
const inter = Inter({
  weight: ["400", "500"],
  variable: "--Inter",
  display: "swap",
});
const dmsans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${lexend.variable} ${inter.variable}  ${dmsans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
