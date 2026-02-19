"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import FeaturedAlbums from "./FeaturedAlbums";

const IMAGES = [
  // -------- زجاج سكريت --------

  {
    id: 7,
    category: "glass",
    label: "واجهة زجاج سُكريت — 07",
    src: "/images/glass/7.png",
  },
  {
    id: 8,
    category: "glass",
    label: "واجهة زجاج سُكريت — 08",
    src: "/images/glass/8.jpg",
  },
  {
    id: 9,
    category: "glass",
    label: "واجهة زجاج سُكريت — 09",
    src: "/images/glass/9.jpg",
  },
  {
    id: 10,
    category: "glass",
    label: "واجهة زجاج سُكريت — 10",
    src: "/images/glass/10.jpg",
  },
  {
    id: 11,
    category: "glass",
    label: "واجهة زجاج سُكريت — 11",
    src: "/images/glass/11.jpg",
  },

  // -------- الواجهات الزجاجية / واجهات زجاج سكريت --------
  {
    id: 12,
    category: "glass_facades",
    label: "واجهات زجاج سكريت — 01",
    src: "/images/glass_facades/1.jpg",
  },
  {
    id: 13,
    category: "glass_facades",
    label: "واجهات زجاج سكريت — 02",
    src: "/images/glass_facades/2.jpg",
  },
  {
    id: 14,
    category: "glass_facades",
    label: "واجهات زجاج سكريت — 03",
    src: "/images/glass_facades/3.jpg",
  },
  {
    id: 15,
    category: "glass_facades",
    label: "واجهات زجاج سكريت — 04",
    src: "/images/glass_facades/4.jpg",
  },

  // -------- الأبواب --------
  {
    id: 19,
    category: "door",
    label: "أبواب زجاج سكريت أوتوماتيكية — 01",
    src: "/images/door/1.JPG",
  },
  {
    id: 20,
    category: "door",
    label: "أبواب زجاج سكريت أوتوماتيكية — 02",
    src: "/images/door/2.JPG",
  },
  {
    id: 21,
    category: "door",
    label: "أبواب زجاج سكريت أوتوماتيكية — 03",
    src: "/images/door/3.JPG",
  },
  {
    id: 22,
    category: "door",
    label: "أبواب زجاج سكريت أوتوماتيكية — 04",
    src: "/images/door/4.JPG",
  },
  {
    id: 23,
    category: "door",
    label: "أبواب زجاج سكريت أوتوماتيكية — 05",
    src: "/images/door/5.jpg",
  },

  // -------- زجاج سكريت المكاتب --------
  {
    id: 24,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 01",
    src: "/images/cffice_glass/1.JPG",
  },
  {
    id: 25,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 02",
    src: "/images/cffice_glass/2.JPG",
  },
  {
    id: 26,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 03",
    src: "/images/cffice_glass/3.JPG",
  },
  {
    id: 27,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 04",
    src: "/images/cffice_glass/4.JPG",
  },
  {
    id: 28,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 05",
    src: "/images/cffice_glass/5.JPG",
  },
  {
    id: 29,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 06",
    src: "/images/cffice_glass/6.jpg",
  },

  {
    id: 31,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 08",
    src: "/images/cffice_glass/8.jpg",
  },
  {
    id: 32,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 09",
    src: "/images/cffice_glass/9.jpg",
  },
  {
    id: 33,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 10",
    src: "/images/cffice_glass/10.jpg",
  },
  {
    id: 34,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 11",
    src: "/images/cffice_glass/11.jpg",
  },
  {
    id: 35,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 12",
    src: "/images/cffice_glass/12.jpg",
  },
  {
    id: 36,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 13",
    src: "/images/cffice_glass/13.jpg",
  },
  {
    id: 37,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 14",
    src: "/images/cffice_glass/14.jpg",
  },
  {
    id: 38,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 15",
    src: "/images/cffice_glass/15.jpg",
  },
  {
    id: 39,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 16",
    src: "/images/cffice_glass/16.jpg",
  },
  {
    id: 40,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 17",
    src: "/images/cffice_glass/17.jpg",
  },
  {
    id: 41,
    category: "cffice_glass",
    label: "زجاج سكريت المكاتب الداخلية — 18",
    src: "/images/cffice_glass/18.jpg",
  },

  // -------- كبائن شاور --------
  {
    id: 42,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 01",
    src: "/images/chower_cabins/1.JPG",
  },
  {
    id: 43,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 02",
    src: "/images/chower_cabins/2.JPG",
  },
  {
    id: 44,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 03",
    src: "/images/chower_cabins/3.JPG",
  },
  {
    id: 45,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 04",
    src: "/images/chower_cabins/4.JPG",
  },
  {
    id: 46,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 05",
    src: "/images/chower_cabins/5.JPG",
  },
  {
    id: 47,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 06",
    src: "/images/chower_cabins/6.JPG",
  },
  {
    id: 48,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 07",
    src: "/images/chower_cabins/7.jpg",
  },
  {
    id: 49,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 08",
    src: "/images/chower_cabins/8.jpg",
  },
  {
    id: 50,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 09",
    src: "/images/chower_cabins/9.jpg",
  },
  {
    id: 51,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 10",
    src: "/images/chower_cabins/10.jpg",
  },
  {
    id: 52,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 11",
    src: "/images/chower_cabins/11.jpg",
  },
  {
    id: 53,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 12",
    src: "/images/chower_cabins/12.jpg",
  },
  {
    id: 54,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 13",
    src: "/images/chower_cabins/13.jpg",
  },
  {
    id: 55,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 14",
    src: "/images/chower_cabins/14.jpg",
  },
  {
    id: 56,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 15",
    src: "/images/chower_cabins/15.jpg",
  },
  {
    id: 57,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 16",
    src: "/images/chower_cabins/16.jpg",
  },
  {
    id: 58,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 17",
    src: "/images/chower_cabins/17.jpg",
  },
  {
    id: 59,
    category: "chower_cabins",
    label: "زجاج سكريت كبائن شاور الحمامات — 18",
    src: "/images/chower_cabins/18.jpg",
  },

  // -------- دربزين الدرج --------
  {
    id: 60,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 01",
    src: "/images/stair_railing/1.JPG",
  },
  {
    id: 61,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 02",
    src: "/images/stair_railing/2.JPG",
  },
  {
    id: 62,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 03",
    src: "/images/stair_railing/3.JPG",
  },
  {
    id: 63,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 04",
    src: "/images/stair_railing/4.JPG",
  },
  {
    id: 64,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 05",
    src: "/images/stair_railing/5.jpg",
  },
  {
    id: 65,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 06",
    src: "/images/stair_railing/6.jpg",
  },
  {
    id: 66,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 07",
    src: "/images/stair_railing/7.jpg",
  },
  {
    id: 67,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 08",
    src: "/images/stair_railing/8.jpg",
  },
  {
    id: 68,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 09",
    src: "/images/stair_railing/9.jpg",
  },
  {
    id: 69,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 10",
    src: "/images/stair_railing/10.jpg",
  },
  {
    id: 70,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 11",
    src: "/images/stair_railing/11.jpg",
  },
  {
    id: 71,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 12",
    src: "/images/stair_railing/12.jpg",
  },
  {
    id: 72,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 13",
    src: "/images/stair_railing/13.jpg",
  },
  {
    id: 73,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 14",
    src: "/images/stair_railing/14.jpg",
  },
  {
    id: 74,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 15",
    src: "/images/stair_railing/15.jpg",
  },
  {
    id: 75,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 16",
    src: "/images/stair_railing/16.jpg",
  },
  {
    id: 76,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 17",
    src: "/images/stair_railing/17.jpg",
  },
  {
    id: 77,
    category: "stair_railing",
    label: "زجاج سكريت دربزين الدرج — 18",
    src: "/images/stair_railing/18.jpg",
  },

  // -------- المرايا --------
  {
    id: 78,
    category: "glass",
    label: "المرايا — 01",
    src: "/images/mirrors/1.JPG",
  },
  {
    id: 79,
    category: "glass",
    label: "المرايا — 02",
    src: "/images/mirrors/2.JPG",
  },
  {
    id: 80,
    category: "glass",
    label: "المرايا — 03",
    src: "/images/mirrors/3.JPG",
  },
  {
    id: 81,
    category: "glass",
    label: "المرايا — 04",
    src: "/images/mirrors/4.JPG",
  },
  {
    id: 82,
    category: "glass",
    label: "المرايا — 05",
    src: "/images/mirrors/5.JPG",
  },

  // -------- الكلادينج --------
  {
    id: 83,
    category: "cladding",
    label: "الكلادينج — 01",
    src: "/images/cladding/1.JPG",
  },
  {
    id: 84,
    category: "cladding",
    label: "الكلادينج — 02",
    src: "/images/cladding/2.JPG",
  },
  {
    id: 85,
    category: "cladding",
    label: "الكلادينج — 03",
    src: "/images/cladding/3.JPG",
  },
  {
    id: 86,
    category: "cladding",
    label: "الكلادينج — 04",
    src: "/images/cladding/4.JPG",
  },
  {
    id: 87,
    category: "cladding",
    label: "الكلادينج — 05",
    src: "/images/cladding/5.jpg",
  },
  {
    id: 88,
    category: "cladding",
    label: "الكلادينج — 06",
    src: "/images/cladding/6.jpg",
  },

  // -------- ألمنيوم --------
  // -------- ألمنيوم --------
  {
    id: 89,
    category: "aluminum",
    label: "ألمنيوم — 01",
    src: "/images/aluminum/1.JPG",
  },
  {
    id: 90,
    category: "aluminum",
    label: "ألمنيوم — 02",
    src: "/images/aluminum/2.JPG",
  },
  {
    id: 91,
    category: "aluminum",
    label: "ألمنيوم — 03",
    src: "/images/aluminum/3.JPG",
  },
  {
    id: 92,
    category: "aluminum",
    label: "ألمنيوم — 04",
    src: "/images/aluminum/4.JPG",
  },
  {
    id: 93,
    category: "aluminum",
    label: "ألمنيوم — 05",
    src: "/images/aluminum/5.jpg",
  },
  {
    id: 94,
    category: "aluminum",
    label: "ألمنيوم — 06",
    src: "/images/aluminum/6.jpg",
  },
  {
    id: 95,
    category: "aluminum",
    label: "ألمنيوم — 07",
    src: "/images/aluminum/7.jpg",
  },
  {
    id: 96,
    category: "aluminum",
    label: "ألمنيوم — 08",
    src: "/images/aluminum/8.jpg",
  },
  {
    id: 97,
    category: "aluminum",
    label: "ألمنيوم — 09",
    src: "/images/aluminum/9.jpg",
  },
  {
    id: 98,
    category: "aluminum",
    label: "ألمنيوم — 10",
    src: "/images/aluminum/10.jpg",
  },
  {
    id: 99,
    category: "aluminum",
    label: "ألمنيوم — 11",
    src: "/images/aluminum/11.jpg",
  },
  {
    id: 100,
    category: "aluminum",
    label: "ألمنيوم — 12",
    src: "/images/aluminum/12.jpg",
  },
  {
    id: 1,
    category: "aluminum",
    label: "ألمنيوم — 13",
    src: "/images/glass/1.jpg",
  },
  {
    id: 2,
    category: "aluminum",
    label: "ألمنيوم — 14",
    src: "/images/glass/2.jpg",
  },
  {
    id: 3,
    category: "aluminum",
    label: "ألمنيوم — 15",
    src: "/images/glass/3.jpg",
  },
  {
    id: 4,
    category: "aluminum",
    label: "ألمنيوم — 16",
    src: "/images/glass/4.jpg",
  },
  {
    id: 5,
    category: "aluminum",
    label: "ألمنيوم — 17",
    src: "/images/glass/5.jpg",
  },
  {
    id: 6,
    category: "aluminum",
    label: "ألمنيوم — 18",
    src: "/images/glass/6.jpg",
  },

  {
    id: 16,
    category: "aluminum",
    label: "ألمنيوم — 19",
    src: "/images/structure/1.JPG",
  },
  {
    id: 17,
    category: "aluminum",
    label: "ألمنيوم — 20",
    src: "/images/structure/2.JPG",
  },
  {
    id: 18,
    category: "aluminum",
    label: "ألمنيوم — 21",
    src: "/images/structure/3.JPG",
  },

  // -------- زجاج مجالس خارجية سكريت --------
  {
    id: 101,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 1",
    src: "/images/outdoor_majlis_glass/1.jpg",
  },
  {
    id: 102,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 2",
    src: "/images/outdoor_majlis_glass/2.jpg",
  },
  {
    id: 103,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 3",
    src: "/images/outdoor_majlis_glass/3.jpg",
  },
  {
    id: 104,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 4",
    src: "/images/outdoor_majlis_glass/4.jpg",
  },
  {
    id: 105,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 5",
    src: "/images/outdoor_majlis_glass/6.jpg",
  },
  {
    id: 106,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 6",
    src: "/images/outdoor_majlis_glass/7.jpg",
  },
  {
    id: 107,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 7",
    src: "/images/outdoor_majlis_glass/8.jpg",
  },
  {
    id: 108,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 8",
    src: "/images/outdoor_majlis_glass/10.jpg",
  },
  {
    id: 109,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 9",
    src: "/images/outdoor_majlis_glass/11.jpg",
  },
  {
    id: 110,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 10",
    src: "/images/outdoor_majlis_glass/12.jpg",
  },
  {
    id: 111,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 11",
    src: "/images/outdoor_majlis_glass/13.jpg",
  },
  {
    id: 112,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 12",
    src: "/images/outdoor_majlis_glass/14.jpg",
  },
  {
    id: 113,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 13",
    src: "/images/outdoor_majlis_glass/S1.jpg",
  },
  {
    id: 114,
    category: "outdoor_majlis_glass",
    label: "زجاج سكريت مجالس خارجية — 14",
    src: "/images/outdoor_majlis_glass/IM5.jpg",
  },
];

export default function GallerySection({
  activeFilter,
  setActiveFilter,
  onOpen,
}: {
  activeFilter: string;
  setActiveFilter: (id: string) => void;
  onOpen: (img: { src: string; label: string }) => void;
}) {
  const filters = [
    { id: "all", label: "الكل" },
    { id: "glass", label: "زجاج سُكريت" },
    { id: "glass_facades", label: "واجهات زجاج سكريت" },

    { id: "door", label: "أبواب زجاج سكريت" },
    { id: "cffice_glass", label: "زجاج سُكريت المكاتب" },
    { id: "outdoor_majlis_glass", label: "زجاج سكريت مجالس خارجية" },
    { id: "chower_cabins", label: "زجاج سكريت كبائن شاور" },
    { id: "stair_railing", label: "زجاج سكريت دربزين الدرج" },

    { id: "cladding", label: "الكلادينج" },
    { id: "aluminum", label: "ألمنيوم" },
  ];

  const filtered =
    activeFilter === "all"
      ? IMAGES
      : IMAGES.filter((g) => g.category === activeFilter);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white scroll-mt-[92px]">
      <div className="container mx-auto px-4">
        <SectionTitle tag="معرض الأعمال" title="أعمالنا التي نفخر بها" />

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-6 py-3 rounded-2xl font-bold transition-all ${
                activeFilter === f.id
                  ? "bg-gradient-to-l from-[var(--brand)] to-[var(--brand2)] text-[var(--accent)] shadow-md"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[var(--accent)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((it, i) => (
              <motion.figure
                key={it.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-zoom-in shadow-sm hover:shadow-xl border border-white"
              >
                <img
                  src={it.src}
                  alt={it.label}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={1000}
                  sizes="(min-width:768px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <figcaption className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur text-[var(--brand)] text-xs md:text-sm font-bold shadow">
                  {it.label}
                </figcaption>
                <button
                  aria-label="تكبير الصورة"
                  onClick={() => onOpen({ src: it.src, label: it.label })}
                  className="absolute inset-0"
                />
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12">
          <FeaturedAlbums onOpen={onOpen} />
        </div>
      </div>
    </section>
  );
}
