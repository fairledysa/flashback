// app/_components/FeaturedAlbums.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";

type Photo = { src: string; label: string };

const ease = cubicBezier(0.22, 1, 0.36, 1);

const ALBUMS: Record<
  "bells" | "locks" | "cctv",
  { title: string; items: Photo[] }
> = {
  bells: {
    title: "أنظمة أمنية",
    items: [
      {
        src: "/images/albums/bells/انظمة صوتية.webp",
        label: "أنظمة صوتية للمباني — Building Audio Systems",
      },
      {
        src: "/images/albums/bells/IMG-20251103-WA0221.jpg",
        label: "لوحة توزيع وأنظمة أمنية — Security Control Panel & Wiring",
      },
      {
        src: "/images/albums/bells/IMG-20251103-WA0215.jpg",
        label: "تركيب أنظمة مراقبة في الموقع — On-site CCTV Installation",
      },
      {
        src: "/images/albums/bells/IMG-20251103-WA0214.jpg",
        label: "شاشة عرض كاميرات المراقبة — CCTV Monitoring Wall",
      },
      {
        src: "/images/albums/bells/hik.webp",
        label: "كاميرات مراقبة هيكفيجن — Hikvision CCTV Cameras",
      },
      {
        src: "/images/albums/bells/Cant-Find-Dahua-Video-Camera-on-Network-1024x576.png",
        label: "إعدادات كاميرات دهاوا على الشبكة — Dahua Cameras Network Setup",
      },
      {
        src: "/images/albums/bells/3332.webp",
        label: "كوابل شبكات وكاميرات — CCTV & Network Cables",
      },
      {
        src: "/images/albums/bells/1.webp",
        label: "بكرات كوابل للأنظمة الأمنية — Security System Cables Reels",
      },
      {
        src: "/images/albums/bells/54.png",
        label: "مجموعة كاميرات دهاوا — Dahua Camera Kit",
      },
      {
        src: "/images/albums/bells/44.jpg",
        label: "كاميرا مراقبة دهاوا — Dahua Surveillance Camera",
      },
    ],
  },

  locks: {
    title: "أقفال ذكية",
    items: [
      {
        src: "/images/albums/locks/Hikvision-1.jpg",
        label: "قفل ذكي هيكفيجن — Hikvision Smart Lock",
      },
      {
        src: "/images/albums/locks/Hikvision-Intercoms.jpg",
        label: "انتركوم هيكفيجن جداري — Hikvision Video Intercom",
      },
      {
        src: "/images/albums/locks/intercom hik.jpg",
        label: "انتركوم باب رئيسي — Door Intercom System",
      },
      {
        src: "/images/albums/locks/intercom hik2.jpg",
        label: "لوحة انتركوم مع شاشة داخلية — Intercom with Indoor Monitor",
      },
    ],
  },

  cctv: {
    title: "كاميرات",
    items: [
      {
        src: "/images/albums/cctv/Dahua-.jpg",
        label: "كاميرات Dahua — صورة عامة",
      },
      {
        src: "/images/albums/cctv/Dahua.webp",
        label: "كاميرات Dahua — واجهة عرض",
      },
      {
        src: "/images/albums/cctv/كاميرات Dahua.webp",
        label: "كاميرات Dahua — نموذج 1",
      },
      {
        src: "/images/albums/cctv/كاميرات Dahua2.webp",
        label: "كاميرات Dahua — نموذج 2",
      },
      {
        src: "/images/albums/cctv/كاميرا مراقبة hikvision 1.webp",
        label: "كاميرا مراقبة Hikvision — نموذج 1",
      },
      {
        src: "/images/albums/cctv/كاميرات Hikvision1.webp",
        label: "كاميرات Hikvision — نماذج متعددة",
      },
      {
        src: "/images/albums/cctv/كاميرات Hikvision. IP.webp",
        label: "كاميرات Hikvision IP",
      },
      {
        src: "/images/albums/cctv/كاميرات Hikvision. MOTORIZED.webp",
        label: "كاميرات Hikvision بعدسة متحركة (Motorized)",
      },
      {
        src: "/images/albums/cctv/كاميرات Hikvision.htm 8 ميجا.webp",
        label: "كاميرات Hikvision — دقّة 8 ميجا بكسل",
      },
    ],
  },
};

export default function FeaturedAlbums({
  onOpen,
}: {
  onOpen: (p: Photo) => void;
}) {
  // ✅ التبويبات (أول عنصر هنا هو الافتراضي)
  const tabs: { id: keyof typeof ALBUMS; label: string }[] = [
    { id: "cctv", label: "كاميرات" },
    { id: "bells", label: "أنظمة أمنية" },
    { id: "locks", label: "أقفال ذكية" },
  ];

  // ✅ يبدأ على أول خيار بشكل طبيعي
  const [active, setActive] = React.useState<keyof typeof ALBUMS>(tabs[0].id);

  const album = ALBUMS[active];

  return (
    <section
      id="featured-albums"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white scroll-mt-[92px]"
    >
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-10">
          <h3 className="text-2xl md:text-3xl font-black text-[var(--brand)] tracking-tight">
            حلول الأمن والمراقبة
          </h3>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            استرجاع فني للمقاولات العامة كذالك متخصصة في توفير حلول الأمن
            والمراقبة، بما في ذلك أنظمة المراقبة التلفزيونية المغلقة (CCTV)
            وأنظمة الحماية والأمان، بالإضافة إلى حلول سمارت هوم للمنازل الذكية ،
            والاجهزة الصوتية . تقدم الشركة مجموعة واسعة من المنتجات والخدمات
            لتلبية احتياجات الأفراد والمؤسسات في توفير حلول الأمن والمراقبة
            المبتكرة والذكية ذات الجودة العالية.
          </p>
        </div>

        {/* أزرار التبويب */}
        <div className="relative mb-8">
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2">
            {tabs.map((t) => {
              const isActive = t.id === active;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={[
                    "relative overflow-hidden rounded-2xl px-4 py-2 text-sm md:text-base font-bold transition",
                    "border",
                    isActive
                      ? "bg-[var(--brand)] text-[var(--accent)] border-[var(--brand)] shadow-lg"
                      : "bg-white text-gray-800 border-gray-200 hover:border-[var(--brand)] hover:text-[var(--brand)]",
                  ].join(" ")}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* الشبكة */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease } }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {album.items.map((p, i) => (
            <motion.button
              key={p.src}
              onClick={() => onOpen(p)}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.4, ease, delay: i * 0.03 },
              }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 border border-gray-200 hover:shadow-xl"
              title={p.label}
            >
              <Image
                src={p.src}
                alt={p.label}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width:1024px) 16vw, (min-width:640px) 30vw, 45vw"
                priority={i < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <span className="absolute bottom-2 right-2 text-[10px] md:text-xs font-semibold text-white/95">
                {p.label}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
