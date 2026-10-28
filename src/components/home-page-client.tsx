"use client";

import dynamic from "next/dynamic";

const HomePage = dynamic(
  () => import("@/components/home/home-page.jsx").then((mod) => mod.HomePage),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-[#0b0d14]" aria-hidden />
    ),
  },
);

export function HomePageClient() {
  return <HomePage />;
}
