import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV TABARAK NUGRAHA - Professional Business Solutions",
  description: "CV TABARAK NUGRAHA adalah mitra bisnis terpercaya untuk solusi profesional dan berkualitas tinggi. Kami berkomitmen untuk memberikan layanan terbaik dengan standar internasional.",
  keywords: ["CV TABARAK NUGRAHA", "bisnis profesional", "konsultasi", "manajemen proyek", "Banda Aceh", "Aceh", "solusi bisnis"],
  authors: [{ name: "CV TABARAK NUGRAHA" }],
  creator: "CV TABARAK NUGRAHA",
  publisher: "CV TABARAK NUGRAHA",
  icons: {
    icon: "/company-logo.svg",
    apple: "/company-logo.svg",
  },
  openGraph: {
    title: "CV TABARAK NUGRAHA - Professional Business Solutions",
    description: "Mitra bisnis terpercaya untuk solusi profesional dan berkualitas tinggi di Banda Aceh, Aceh",
    url: "https://tabaraknugraha.co.id",
    siteName: "CV TABARAK NUGRAHA",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV TABARAK NUGRAHA - Professional Business Solutions",
    description: "Mitra bisnis terpercaya untuk solusi profesional dan berkualitas tinggi",
  },
  metadataBase: new URL("https://tabaraknugraha.co.id"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
