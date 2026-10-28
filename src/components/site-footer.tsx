import Link from "next/link";
import { Container } from "@/components/ui/container";

const explore = [
  { href: "#ghana", label: "Ghana" },
  { href: "#contact", label: "Contact" },
  { href: "#partners", label: "Partnerships" },
  { href: "#fleet", label: "Fleet Services" },
  { href: "#contact", label: "Careers" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-elevated/80">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl">
            Sahel <span className="text-accent">Power</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-muted">
            Power that moves. Mobile EV charging, launching in Ghana.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-text-muted">
            {explore.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition hover:text-text">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
            Social
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-text-muted">
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>X</li>
          </ul>
          <p className="mt-3 text-xs text-text-muted/80">Channels coming soon.</p>
        </div>
      </Container>
      <div className="border-t border-border py-5 text-center text-xs text-text-muted">
        © {new Date().getFullYear()} Sahel Power. Ghana. Imagery and interfaces
        are illustrative concepts.
      </div>
    </footer>
  );
}
