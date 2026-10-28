import { partnerTypes } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function PartnersSection() {
  return (
    <section id="partners" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Partnerships"
          title="Build Ghana's EV infrastructure with us."
          description="The charging network will take property, mobility, energy, and capital partners working together."
        />
        <div className="mt-10 flex justify-center">
          <Button href="#contact">Become a Partner</Button>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((partner) => (
            <li
              key={partner}
              className="glass card-hover rounded-2xl px-4 py-3 text-sm text-text-muted"
            >
              {partner}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
