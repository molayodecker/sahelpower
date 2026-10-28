"use client";

import dynamic from "next/dynamic";

const HomePageClient = dynamic(
  () =>
    import("@/components/home-page-client-legacy").then(
      (mod) => mod.HomePageClientLegacy,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen bg-[#0b0d14]" aria-hidden />
    ),
  },
);

export function HomePageShell() {
  return <HomePageClient />;
}
