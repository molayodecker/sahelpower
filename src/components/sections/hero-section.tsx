import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32 lg:pt-36">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs font-medium text-text-muted">
            <Sparkles className="size-3.5 text-accent" aria-hidden />
            Mobile EV charging, Ghana
          </div>
          <h1 className="font-display text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Power that <span className="text-accent">moves.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg lg:text-xl">
            Sahel Power brings EV charging directly to you. At home, at work, on
            the road, or across your fleet.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">
              Request a Charge
              <ArrowRight className="ml-2 size-4" aria-hidden />
            </Button>
            <Button href="#partners" variant="secondary">
              Partner With Sahel Power
            </Button>
          </div>
          <dl className="mt-10 grid w-full gap-3 sm:grid-cols-3 lg:max-w-3xl">
            {[
              ["Mobile-first", "Charging comes to the vehicle"],
              ["Fleet-ready", "Scheduled & on-demand options"],
              ["Ghana launch", "Built for local EV growth"],
            ].map(([term, detail]) => (
              <div
                key={term}
                className="rounded-2xl border border-border bg-white/[0.03] px-3 py-3"
              >
                <dt className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {term}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-text-muted">
                  {detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-accent/20 via-transparent to-accent-coral/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface-muted shadow-2xl shadow-black/40">
            <Image
              src="/images/ai-sahel-cinematic-hero-mobile-ev-charging-accra-260929151403.webp"
              alt="Sahel Power mobile charging van serving an EV in Accra"
              width={1200}
              height={900}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface via-surface/20 to-transparent p-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs text-text backdrop-blur">
                <span className="size-2 rounded-full bg-accent" />
                Mobile unit · EV charging in motion
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
