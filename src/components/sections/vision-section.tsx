import { networkStages } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function VisionSection() {
  return (
    <section id="vision" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Network vision"
          title="We're building more than charging vans."
          description="Every future charging session can help reveal where EV energy demand is growing. Sahel Power intends to use that evidence to guide fleet partnerships and the placement of permanent charging hubs."
        />

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-accent md:text-base">
          Mobile first. Permanent where the demand makes sense.
        </p>

        <ol className="mt-10 grid gap-3 md:grid-cols-5">
          {networkStages.map((stage, index) => (
            <li
              key={stage}
              className="glass card-hover rounded-2xl p-4 text-center"
            >
              <p className="text-xs font-semibold text-accent">Stage {index + 1}</p>
              <p className="mt-2 text-sm font-medium leading-snug">{stage}</p>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-text-muted">
          A proposed path for the network, not a claim that every stage is
          operating today.
        </p>
      </Container>
    </section>
  );
}
