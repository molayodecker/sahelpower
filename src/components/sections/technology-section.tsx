import Image from "next/image";
import { driverFeatures, fleetFeatures } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function TechnologySection() {
  return (
    <section id="technology" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Software platform"
          title="Charging infrastructure powered by software."
          description="The planned customer experience connects a charging request with dispatch, status, payment, and a record of energy delivered. Fleet operators would have their own operational view."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <article className="glass rounded-3xl p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-xl">For drivers</h3>
              <span className="text-xs text-text-muted">Interface concept</span>
            </div>
            <div className="mx-auto w-full max-w-[320px] lg:max-w-[360px]">
              <Image
                src="/images/sahel-power-driver-app-interface-concept.jpg"
                alt="Sahel Power mobile app interface concept showing charging request details in Accra"
                width={560}
                height={980}
                className="w-full rounded-[2rem] shadow-2xl shadow-black/40"
              />
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-text-muted">
              {driverFeatures.map((feature) => (
                <li key={feature} className="border-t border-border py-2">
                  {feature}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass rounded-3xl p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-xl">For fleets</h3>
              <span className="text-xs text-text-muted">Dashboard concept</span>
            </div>
            <div className="rounded-2xl border border-border bg-surface-muted p-5 md:p-7">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <p className="text-xs text-text-muted">Sahel Power / Fleet</p>
                  <p className="mt-2 font-display text-lg">Charging overview</p>
                </div>
                <span className="size-2 rounded-full bg-accent" />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["Scheduled", "Charging windows"],
                  ["Vehicles", "Charging status"],
                  ["Energy", "Consumption view"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border bg-white/[0.03] p-4"
                  >
                    <p className="text-xs text-text-muted">{label}</p>
                    <p className="mt-8 text-sm">{value}</p>
                    <div className="mt-4 h-1 w-2/3 rounded-full bg-accent-coral/80" />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[10px] text-text-muted">
                Illustrative data only
              </p>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-text-muted">
              {fleetFeatures.map((feature) => (
                <li key={feature} className="border-t border-border py-2">
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
