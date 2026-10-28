"use client";

type FooterLink = { label: string; href: string };

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="swoop-footer__col">
      <h2 className="swoop-footer__title">{title}</h2>
      <ul className="swoop-footer__links">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ name }: { name: "instagram" | "x" | "linkedin" }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "instagram") {
    return (
      <svg {...common}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 4l16 16M20 4 4 20" />
    </svg>
  );
}

function FooterBrand() {
  return (
    <a href="#home" className="swoop-footer__logo" aria-label="Sahel Power">
      <span className="swoop-footer__logo-mark" aria-hidden>
        <span />
        <span />
      </span>
      <span className="swoop-footer__logo-text">
        <span className="swoop-footer__logo-line">Sahel</span>
        <span className="swoop-footer__logo-line swoop-footer__logo-line--light">
          Power
        </span>
      </span>
    </a>
  );
}

const companyLinks: FooterLink[] = [
  { label: "Become a partner", href: "#partners" },
  { label: "Become a fleet customer", href: "#fleet" },
  { label: "For drivers", href: "#drivers" },
];

const ghanaLinks: FooterLink[] = [
  { label: "Mobile charging in Ghana", href: "#ghana" },
  { label: "Why mobile charging", href: "#why-mobile" },
];

const helpLinks: FooterLink[] = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Request a charge", href: "#contact" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#contact" },
  { label: "Terms & Conditions", href: "#contact" },
];

export function SwoopFooter() {
  const year = new Date().getFullYear();

  const blockSocialClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <footer className="swoop-footer">
      <div className="swoop-footer__inner">
        <div className="swoop-footer__grid">
          <div className="swoop-footer__col swoop-footer__col--brand">
            <FooterBrand />
            <p className="swoop-footer__tagline">Mobile EV charging in Ghana</p>
            <div className="swoop-footer__social" aria-label="Social — coming soon">
              <a
                href="#"
                aria-label="Instagram — coming soon"
                tabIndex={-1}
                onClick={blockSocialClick}
              >
                <SocialIcon name="instagram" />
              </a>
              <a
                href="#"
                aria-label="X — coming soon"
                tabIndex={-1}
                onClick={blockSocialClick}
              >
                <SocialIcon name="x" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn — coming soon"
                tabIndex={-1}
                onClick={blockSocialClick}
              >
                <SocialIcon name="linkedin" />
              </a>
            </div>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Ghana" links={ghanaLinks} />
          <FooterColumn title="Help" links={helpLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="swoop-footer__bottom">
          <p className="swoop-footer__copyright">
            © Sahel Power {year}. All rights reserved. · Sahel Power, Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
