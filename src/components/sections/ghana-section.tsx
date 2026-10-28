import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function GhanaSection() {
  return (
    <section id="ghana" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
          <div className="absolute -right-16 -top-16 size-56 rounded-full bg-accent/10 blur-3xl" />
          <SectionHeading
            eyebrow="Launching in Ghana"
            title="Built for Ghana's electric future."
            description="Ghana is where Sahel Power plans to begin building a mobile charging network shaped by how people and fleets actually use electric vehicles."
          />
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
            As the service develops, Sahel Power intends to work within Ghana&apos;s
            emerging EV charging framework and with relevant authorities, including
            the Energy Commission, to meet applicable safety, technical,
            certification, and operating requirements.
          </p>
          <p className="mt-4 text-xs text-text-muted">
            This is a statement of intent, not a claim of regulatory approval.
          </p>
        </div>
      </Container>
    </section>
  );
}
