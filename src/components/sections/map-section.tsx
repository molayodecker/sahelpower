import Image from "next/image";
import { LocateFixed, Search } from "lucide-react";
import { mapPins } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

function AppleMapPin({
  large = false,
  className = "",
}: {
  large?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 28 36"
      className={`drop-shadow-md ${large ? "h-9 w-7 md:h-10 md:w-8" : "h-7 w-5 md:h-8 md:w-6"} ${className}`}
      aria-hidden
    >
      <path
        fill="#FF453A"
        d="M14 0C6.82 0 1 5.82 1 13c0 9.75 13 23 13 23s13-13.25 13-23C27 5.82 21.18 0 14 0Z"
      />
      <circle cx="14" cy="13" r="5.5" fill="white" />
    </svg>
  );
}

export function MapSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="The long view"
          title="The charging network can move before it becomes permanent."
          description="Mobile charging could help Sahel Power enter new areas, learn where real demand develops, build customer relationships, and make better-informed choices about future permanent infrastructure."
        />
        <p className="mt-4 max-w-3xl text-sm text-text-muted md:text-base">
          The aim is a distributed EV charging and energy network, starting in
          Ghana and designed for other African markets over time.
        </p>

        <figure className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#e5e5ea] shadow-2xl shadow-black/25">
          <div
            className="relative aspect-[32/17] overflow-hidden bg-[#ececee]"
            role="img"
            aria-label="Map of Greater Accra with four location markers."
          >
            <Image
              src="/images/accra-openstreetmap.webp"
              alt=""
              fill
              className="object-cover [filter:saturate(0.92)_brightness(1.08)_contrast(0.96)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.05)_35%,rgba(255,255,255,0.15)_100%)]" />

            <div className="absolute inset-x-3 top-3 z-10 md:inset-x-4 md:top-4">
              <div className="apple-map-search flex items-center gap-2.5 rounded-2xl border border-black/5 bg-white/75 px-3 py-2.5 backdrop-blur-xl md:gap-3 md:px-4 md:py-3">
                <Search
                  className="size-4 shrink-0 text-[#8e8e93] md:size-[18px]"
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[15px] text-[#8e8e93]">
                    Search Maps
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-3 top-[4.75rem] z-10 md:right-4 md:top-[5.25rem]">
              <button
                type="button"
                className="apple-map-control grid size-9 place-items-center rounded-full border border-black/5 bg-white/80 text-[#007aff] backdrop-blur-xl md:size-10"
                aria-label="Center map"
              >
                <LocateFixed className="size-4 md:size-[18px]" />
              </button>
            </div>

            <div className="absolute left-3 top-[4.75rem] z-10 md:left-4 md:top-[5.25rem]">
              <div className="rounded-xl border border-black/5 bg-white/80 px-3 py-2 backdrop-blur-xl">
                <p className="text-[11px] font-medium uppercase tracking-wide text-[#8e8e93]">
                  Region
                </p>
                <p className="text-sm font-semibold text-[#1c1c1e]">
                  Greater Accra
                </p>
              </div>
            </div>

            {mapPins.map(([left, top, size], index) => (
              <span
                key={`${left}-${top}`}
                className="absolute z-10 -translate-x-1/2 -translate-y-full"
                style={{ left: `${left}%`, top: `${top}%` }}
                aria-hidden={index > 0}
              >
                <AppleMapPin large={size === "lg"} />
              </span>
            ))}

            <div className="apple-map-sheet absolute inset-x-0 bottom-0 z-10 border-t border-black/5 bg-white/82 px-4 pb-4 pt-2 backdrop-blur-2xl md:px-5">
              <div className="mx-auto mb-3 h-1 w-9 rounded-full bg-[#c7c7cc]" />
              <div className="flex justify-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f2f2f7] px-3 py-1.5 text-xs font-medium text-[#3a3a3c]">
                  <span className="size-2 rounded-full bg-[#FF453A]" />
                  4 areas
                </span>
              </div>
            </div>
          </div>
        </figure>
      </Container>
    </section>
  );
}
