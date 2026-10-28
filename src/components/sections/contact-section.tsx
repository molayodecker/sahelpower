"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    try {
      const response = await fetch("/_ploy/form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "sahel-power-enquiry",
          pageUrl: window.location.href,
          data,
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <div className="glass grid gap-10 rounded-3xl p-8 md:grid-cols-[1fr_1.1fr] md:p-10">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Wherever the road takes you, power should be within reach."
              description="Interested in charging, fleet services, or building the network together? Tell us what you need. Sahel Power is launching in Ghana."
            />
          </div>

          <form id="enquiry-form" className="space-y-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block text-text-muted">Name</span>
                <input
                  required
                  name="name"
                  className="w-full rounded-xl border border-border bg-surface-muted px-3 py-2.5 text-sm outline-none ring-accent/30 transition focus:ring-2"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-text-muted">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-border bg-surface-muted px-3 py-2.5 text-sm outline-none ring-accent/30 transition focus:ring-2"
                />
              </label>
            </div>

            <label className="block text-sm">
              <span className="mb-1.5 block text-text-muted">
                I&apos;m interested in
              </span>
              <select
                name="interest"
                className="w-full rounded-xl border border-border bg-surface-muted px-3 py-2.5 text-sm outline-none ring-accent/30 transition focus:ring-2"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select an enquiry
                </option>
                <option value="charge">Request a charge</option>
                <option value="fleet">Fleet charging</option>
                <option value="partnership">Partnership</option>
                <option value="careers">Careers</option>
                <option value="other">Something else</option>
              </select>
            </label>

            <label className="block text-sm">
              <span className="mb-1.5 block text-text-muted">
                Location or organization
              </span>
              <input
                name="location"
                className="w-full rounded-xl border border-border bg-surface-muted px-3 py-2.5 text-sm outline-none ring-accent/30 transition focus:ring-2"
              />
            </label>

            <label className="block text-sm">
              <span className="mb-1.5 block text-text-muted">Message</span>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full rounded-xl border border-border bg-surface-muted px-3 py-2.5 text-sm outline-none ring-accent/30 transition focus:ring-2"
              />
            </label>

            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send Enquiry"}
            </Button>

            {status === "success" ? (
              <p className="text-sm text-accent">
                Thank you. Your enquiry has been received.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm text-accent-coral">
                We couldn&apos;t send your enquiry. Please try again.
              </p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}
