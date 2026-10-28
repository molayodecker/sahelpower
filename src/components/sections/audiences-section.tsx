import Image from "next/image";
import { audiences } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AudiencesSection() {
  return (
    <section id="drivers" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/ai-sahel-apartment-business-charging-accra-260929151417.webp"
              alt="Mobile charging at a residential and business development"
              width={900}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Use cases"
              title="Charging for the way you move."
              description="One mobile model, many places where vehicles need power."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {audiences.map((item) => (
                <li
                  key={item.title}
                  className="glass card-hover rounded-2xl p-4"
                >
                  <h3 className="font-display text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.copy}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
