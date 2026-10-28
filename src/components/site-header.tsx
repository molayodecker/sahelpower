"use client";

import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? "glass py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between gap-4">
        <Link href="#home" className="group inline-flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-accent ring-1 ring-accent/30 transition group-hover:scale-105">
            <Zap className="size-4" aria-hidden />
          </span>
          <span className="font-display text-lg tracking-tight">
            Sahel <span className="text-accent">Power</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-text-muted transition hover:bg-white/5 hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button href="#contact" variant="secondary">
            Request a Charge
          </Button>
          <Button href="#partners">Partner With Us</Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-white/5 text-text lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open ? (
        <div className="glass border-t border-border lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm text-text-muted hover:bg-white/5 hover:text-text"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 grid gap-2">
              <Button href="#contact" variant="secondary">
                Request a Charge
              </Button>
              <Button href="#partners">Partner With Us</Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
