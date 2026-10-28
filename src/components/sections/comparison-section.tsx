import { comparisonRows } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ComparisonSection() {
  return (
    <section id="why-mobile" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why mobile"
          title="Why mobile charging?"
          description="Fixed stations will have a role. Mobile charging offers a flexible way to serve demand before every location has one."
        />

        <div className="mt-10 hidden overflow-hidden rounded-3xl border border-border md:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.04] text-text-muted">
              <tr>
                <th className="px-5 py-4 font-medium">Consideration</th>
                <th className="px-5 py-4 font-medium">Fixed infrastructure</th>
                <th className="px-5 py-4 font-medium">Sahel Power mobile model</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.topic} className="border-t border-border">
                  <th className="px-5 py-4 font-medium text-text">{row.topic}</th>
                  <td className="px-5 py-4 text-text-muted">{row.fixed}</td>
                  <td className="px-5 py-4 text-text">{row.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-4 md:hidden">
          {comparisonRows.map((row) => (
            <article
              key={row.topic}
              className="glass rounded-2xl p-4"
            >
              <h3 className="font-display text-lg">{row.topic}</h3>
              <p className="mt-2 text-xs uppercase tracking-wide text-text-muted">
                Fixed infrastructure
              </p>
              <p className="mt-1 text-sm text-text-muted">{row.fixed}</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-accent">
                Sahel Power mobile
              </p>
              <p className="mt-1 text-sm">{row.mobile}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-muted md:text-base">
          Infrastructure should follow demand, not guess where demand will appear.
        </p>
      </Container>
    </section>
  );
}
