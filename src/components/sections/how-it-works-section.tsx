import Image from "next/image";
import { howItWorks } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Stop searching for a charger.{" "}
              <span className="text-accent">We bring it to you.</span>
            </>
          }
          description="Mobile charging is designed to meet your EV where it is parked or operating."
        />

        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {howItWorks.map((step, index) => (
            <li
              key={step.title}
              className="group glass card-hover overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-surface/80 px-3 py-1 text-xs font-semibold text-accent backdrop-blur">
                  0{index + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {step.copy}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
