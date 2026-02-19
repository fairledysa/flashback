import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ⚠️ عدل الدومين واسم الشركة لاحقاً
const SITE = {
  name: "استرجاع فني للمقاولات العامة",
  url: "https://flashback1300.com/",
  description:
    "توريد وتركيب زجاج سكريت، تركيب شورات حمامات زجاج، تركيب مكاتب زجاج سكريت، تركيب كاميرات مراقبة، أقفال ذكية، وأعمال الألمنيوم وتركيب الألمنيوم بجودة عالية.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: `${SITE.name} | زجاج سكريت، كاميرات مراقبة، أقفال ذكية، ألمنيوم`,
  description: SITE.description,

  // ✅ الكلمات المفتاحية
  keywords: [
    "زجاج سكريت",
    "توريد وتركيب زجاج",
    "تركيب زجاج",
    "تركيب زجاج سكريت",
    "تركيب مكاتب زجاج سكريت",
    "تركيب شورات حمامات زجاج",
    "تركيب كاميرات مراقبه",
    "كاميرات مراقبه",
    "أقفال ذكيه",
    "المنيوم",
    "تركيب المنيوم",

    // ✅ المدن
    "الرياض",
    "الدمام",
    "الخبر",
    "القصيم",
    "تركيب زجاج سكريت الرياض",
    "تركيب زجاج سكريت الدمام",
    "تركيب زجاج سكريت الخبر",
    "تركيب زجاج سكريت القصيم",
    "تركيب كاميرات مراقبة الرياض",
    "تركيب كاميرات مراقبة الدمام",
    "تركيب كاميرات مراقبة الخبر",
    "تركيب كاميرات مراقبة القصيم",
    "تركيب ألمنيوم الرياض",
    "تركيب ألمنيوم الدمام",
    "تركيب ألمنيوم الخبر",
    "تركيب ألمنيوم القصيم",
  ],

  alternates: {
    canonical: SITE.url,
  },

  icons: {
    icon: [{ url: "https://flashback1300.com/icon.ico" }],
  },
  openGraph: {
    title: `${SITE.name} | زجاج سكريت وكاميرات مراقبة وألمنيوم`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: "/images/LOGO.png", // ⚠️ حط صورة هنا
        width: 1200,
        height: 630,
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | زجاج سكريت وكاميرات مراقبة`,
    description: SITE.description,
    images: ["/images/LOGO.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
