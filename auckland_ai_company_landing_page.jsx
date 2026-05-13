import React from "react";

function IconBase({ children, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function ArrowUpRight({ className }) {
  return (
    <IconBase className={className}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </IconBase>
  );
}

function ArrowRight({ className }) {
  return (
    <IconBase className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

function SearchIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </IconBase>
  );
}

function SendIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    </IconBase>
  );
}

function CheckIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="m5 13 4 4L19 7" />
    </IconBase>
  );
}

function SparkIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3l1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8L12 3Z" />
      <path d="M19 15l.7 2.1L22 18l-2.3.9L19 21l-.7-2.1L16 18l2.3-.9L19 15Z" />
    </IconBase>
  );
}

export const landingPageConfig = {
  companyName: "DeployIQ",
  heroTitle: "What can AI unlock in your company?",
  heroPrompt: "Automate our reporting, proposals, customer support, and internal knowledge search",
  chips: ["AI strategy", "Internal copilots", "Workflow automation", "Data intelligence", "Governance"],
  storyCards: [
    {
      label: "Operations",
      title: "Turn messy handovers into clean AI-assisted workflows",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    },
    {
      label: "Knowledge",
      title: "Give every team a secure assistant that understands company context",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      label: "Decisions",
      title: "Connect data, documents, and models into practical business intelligence",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  services: [
    "AI opportunity mapping",
    "Custom copilots and agents",
    "Document intelligence systems",
    "Reporting and analytics automation",
    "CRM, spreadsheet, and workflow integration",
    "AI governance, privacy, and rollout support",
  ],
  proof: [
    { value: "4-8 weeks", label: "from discovery to live pilot" },
    { value: "NZ-first", label: "built for local teams and compliance realities" },
    { value: "Human-led", label: "automation with review, permissions, and control" },
  ],
};

export function runLandingPageChecks() {
  const errors = [];

  if (!landingPageConfig.companyName) errors.push("Missing company name.");
  if (!landingPageConfig.heroTitle.includes("AI")) errors.push("Hero title should clearly mention AI.");
  if (landingPageConfig.chips.length < 4) errors.push("Expected at least four hero chips.");
  if (landingPageConfig.storyCards.length !== 3) errors.push("Expected exactly three story cards.");
  if (landingPageConfig.services.length < 6) errors.push("Expected at least six service items.");
  if (landingPageConfig.proof.length !== 3) errors.push("Expected exactly three proof points.");

  const uniqueStoryTitles = new Set(landingPageConfig.storyCards.map((card) => card.title));
  if (uniqueStoryTitles.size !== landingPageConfig.storyCards.length) {
    errors.push("Story card titles should be unique.");
  }

  return { ok: errors.length === 0, errors };
}

function NavLink({ children, href }) {
  return (
    <a href={href} className="text-sm text-neutral-300 transition hover:text-white">
      {children}
    </a>
  );
}

function Chip({ children }) {
  return (
    <a
      href="#services"
      className="rounded-full border border-white/15 px-4 py-2 text-sm text-neutral-300 transition hover:border-white/35 hover:bg-white hover:text-black"
    >
      {children}
    </a>
  );
}

function StoryCard({ card }) {
  return (
    <article className="group overflow-hidden rounded-md bg-neutral-900">
      <div className="aspect-[1.35/1] overflow-hidden bg-neutral-800">
        <img
          src={card.image}
          alt=""
          className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
      </div>
      <div className="border-x border-b border-white/10 p-5">
        <div className="text-sm text-neutral-400">{card.label}</div>
        <h3 className="mt-3 text-xl font-medium leading-tight tracking-[-0.02em] text-white">
          {card.title}
        </h3>
        <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm text-white">
          Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

function ProofItem({ value, label }) {
  return (
    <div className="border-t border-white/15 pt-5">
      <div className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">{value}</div>
      <p className="mt-2 max-w-[18rem] text-sm leading-6 text-neutral-400">{label}</p>
    </div>
  );
}

export default function DeployIQLandingPage() {
  const checks = runLandingPageChecks();

  return (
    <main className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3 text-white">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/30">
              <SparkIcon className="h-4 w-4" />
            </span>
            <span className="text-lg font-medium tracking-[-0.03em]">{landingPageConfig.companyName}</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#deployment">Deployment</NavLink>
            <NavLink href="#stories">Stories</NavLink>
            <NavLink href="#contact">Company</NavLink>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full bg-neutral-900 px-4 py-2 text-sm text-white transition hover:bg-neutral-800 sm:inline-flex">
              Log in
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Talk to us <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-[1440px] px-5 pb-28 pt-20 md:px-8 md:pb-36 md:pt-24 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-8 text-sm text-neutral-400">DeployIQ builds AI deployment systems for New Zealand businesses</p>

          <h1 className="text-balance text-4xl font-semibold tracking-[-0.055em] sm:text-6xl md:text-7xl">
            {landingPageConfig.heroTitle}
          </h1>

          <div className="mt-8 w-full max-w-3xl rounded-[1.65rem] bg-[#1f1f1f] p-4 text-left shadow-2xl shadow-black/40 ring-1 ring-white/10">
            <div className="min-h-20 px-1 text-[15px] leading-7 text-neutral-300 md:text-base">
              {landingPageConfig.heroPrompt}
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <SearchIcon className="h-4 w-4" />
                Ask what AI could automate
              </div>
              <a
                href="#contact"
                aria-label="Submit AI deployment prompt"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-black transition hover:scale-105 hover:bg-neutral-200"
              >
                <SendIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {landingPageConfig.chips.map((chip) => (
              <Chip key={chip}>{chip}</Chip>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="mx-auto max-w-[1440px] px-5 py-10 md:px-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-5">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Stories</h2>
          <a href="#services" className="inline-flex items-center gap-2 text-sm text-white hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {landingPageConfig.storyCards.map((card) => (
            <StoryCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[1440px] px-5 py-28 md:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm text-neutral-400">For teams ready to move beyond AI experiments</p>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
              We design, build, and deploy AI systems that fit your operating model.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10">
            {landingPageConfig.services.map((service, index) => (
              <div key={service} className="group flex items-center justify-between gap-6 bg-black p-5 transition hover:bg-neutral-950">
                <div className="flex items-center gap-4">
                  <span className="w-8 text-sm text-neutral-500">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-lg tracking-[-0.02em] text-white">{service}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-neutral-500 transition group-hover:translate-x-1 group-hover:text-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="deployment" className="border-y border-white/10 bg-[#050505]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="flex flex-col justify-between gap-16">
            <div>
              <p className="mb-5 text-sm text-neutral-400">Deployment model</p>
              <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
                Start narrow, prove value, then scale safely.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {landingPageConfig.proof.map((item) => (
                <ProofItem key={item.value} value={item.value} label={item.label} />
              ))}
            </div>
          </div>

          <div className="rounded-md border border-white/10 bg-black p-5 md:p-7">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <div className="text-sm text-neutral-500">Live deployment map</div>
                <div className="mt-1 text-xl font-medium tracking-[-0.03em]">AI operating layer</div>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                Pilot ready
              </div>
            </div>

            <div className="space-y-3">
              {[
                ["01", "Discover", "Map high-friction workflows and select the first valuable use case."],
                ["02", "Prototype", "Build a working AI workflow using your documents, data, and business rules."],
                ["03", "Control", "Add permissions, review paths, audit trails, and quality checks."],
                ["04", "Launch", "Train users, measure adoption, and expand into adjacent workflows."],
              ].map(([number, title, text]) => (
                <div key={number} className="grid grid-cols-[3rem_1fr] gap-4 rounded-md border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-sm text-neutral-500">{number}</div>
                  <div>
                    <div className="font-medium text-white">{title}</div>
                    <p className="mt-1 text-sm leading-6 text-neutral-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-28 md:px-8 lg:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Private by design", "We keep sensitive business context controlled through permissions, review flows, and deployment boundaries."],
            ["Tool-native", "We work around the systems your team already uses: spreadsheets, documents, CRMs, dashboards, and inboxes."],
            ["Adoption focused", "The goal is not a shiny demo. It is a workflow your team trusts enough to use every week."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-md border border-white/10 bg-neutral-950 p-6">
              <CheckIcon className="mb-12 h-5 w-5 text-emerald-300" />
              <h3 className="text-2xl font-medium tracking-[-0.04em]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1440px] px-5 pb-10 md:px-8 lg:px-10">
        <div className="rounded-md bg-white px-6 py-12 text-black md:px-10 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm text-neutral-600">AI deployment for New Zealand companies</p>
              <h2 className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.055em] md:text-7xl">
                Build your first serious AI workflow this quarter.
              </h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-neutral-700">
                Book a short strategy call. We will identify the highest-leverage workflow, the safest pilot shape, and the fastest path to measurable value.
              </p>
              <a
                href="mailto:hello@deployiq.ai"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                hello@deployiq.ai <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {!checks.ok ? (
          <div className="mt-5 rounded-md border border-red-400/30 bg-red-400/10 p-4 text-sm text-red-200">
            <div className="font-medium">Config check warning</div>
            <ul className="mt-2 list-disc pl-5">
              {checks.errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <footer className="flex flex-col justify-between gap-4 py-8 text-sm text-neutral-500 md:flex-row md:items-center">
          <div>&copy; 2026 {landingPageConfig.companyName}. Built in Auckland, Aotearoa New Zealand.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </footer>
      </section>
    </main>
  );
}
