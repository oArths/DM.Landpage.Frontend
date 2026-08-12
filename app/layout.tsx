import "./globals.css";
import type { Metadata } from "next";
import Header from "./templates/header";
import Footer from "./templates/footer";
import JsonLd from "./components/JsonLd";
import { siteConfig } from "./config/site";
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Business Intelligence",
    "Power BI",
    "Data Engineering",
    "Data Science",
    "Python",
    "RPA",
    "treinamento corporativo",
    "consultoria educacional",
    "cursos de dados",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logoPurple.svg`,
    email: siteConfig.email,
    telephone: `+55 ${siteConfig.phoneDisplay.replace(/\D/g, "").replace(/^(55)(\d{2})(\d{8,9})$/, "+55 $2 $3")}`,
    sameAs: Object.values(siteConfig.social),
    knowsAbout: [
      "Business Intelligence",
      "Power BI",
      "Data Engineering",
      "Data Science",
      "Python",
      "Automação Robótica (RPA)",
    ],
    areaServed: "BR",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneDisplay,
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: "Portuguese",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "pt-BR",
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <html lang="pt-br">
      <head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          href="/_next/static/media/793968fa3513f5d6-s.p.woff2"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          href="/_next/static/media/e4af272ccee01ff0-s.p.woff2"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          href="/_next/static/media/13971731025ec697-s.p.woff2"
        />
      </head>
      <body
        className={`${lexend.variable} ${inter.variable} ${dmsans.variable} antialiased bg-ui-colors-background`}
      >
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
