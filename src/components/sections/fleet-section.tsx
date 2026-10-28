import Image from "next/image";
import { fleetTags } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function FleetSection() {
  return (
    <section id="fleet" className="scroll-mt-24 py-20 md:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Fleet services"
            title="Energy for fleets that cannot afford to stop."
            description="Sahel Power is developing scheduled and on-demand mobile charging for electric fleets. Bring energy to the vehicles in your operation instead of routing every vehicle through a fixed station."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {fleetTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
          <Button href="#contact" className="mt-8">
            Talk to Our Fleet Team
          </Button>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/30">
          <Image
            src="/images/ai-sahel-fleet-charging-accra-yard-260929151410.webp"
            alt="Sahel Power mobile charging unit at an electric fleet yard in Ghana"
            width={1000}
            height={760}
            className="h-full w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
