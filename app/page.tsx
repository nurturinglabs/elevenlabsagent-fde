"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Stethoscope,
  Pizza,
  Phone,
  ExternalLink,
  Github,
  Check,
  ArrowDown,
  Linkedin,
  Waves,
} from "lucide-react";

/* ── Env vars ── */
const RINGAA_URL = process.env.NEXT_PUBLIC_RINGAA_URL || "#";
const MEDDO_URL = process.env.NEXT_PUBLIC_MEDDO_URL || "#";

const DOMINOS_URL = process.env.NEXT_PUBLIC_DOMINOS_URL || "#";
const AIRTEL_URL = process.env.NEXT_PUBLIC_AIRTEL_URL || "#";
const RINGAA_GITHUB = process.env.NEXT_PUBLIC_RINGAA_GITHUB || "#";
const DOMINOS_GITHUB = process.env.NEXT_PUBLIC_DOMINOS_GITHUB || "#";
const AIRTEL_GITHUB = process.env.NEXT_PUBLIC_AIRTEL_GITHUB || "#";
const MEDDO_GITHUB = process.env.NEXT_PUBLIC_MEDDO_GITHUB || "#";

const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || "#";
const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || "#";

/* ── Data ── */
const demos = [
  {
    name: "Airtel AI Support",
    tagline: "Enterprise Telecom Voice Agent",
    description:
      "Voice agent for Airtel's 300M+ subscribers — handles balance checks, network troubleshooting, recharges, and support tickets across Hindi, English, and Hinglish.",
    vertical: "Telecom",
    icon: Phone,
    borderColor: "border-t-rose-500",
    badgeBg: "bg-rose-50 text-rose-700",
    url: AIRTEL_URL,
    github: AIRTEL_GITHUB,
  },
  {
    name: "Domino's Voice Agent",
    tagline: "Pizza Ordering Voice Demo",
    description:
      "Voice-powered pizza ordering experience with a browsable menu, real-time cart updates, and conversational order flow.",
    vertical: "Quick Service",
    icon: Pizza,
    borderColor: "border-t-red-500",
    badgeBg: "bg-red-50 text-red-700",
    url: DOMINOS_URL,
    github: DOMINOS_GITHUB,
  },
  {
    name: "Ringaa",
    tagline: "School Admissions Voice Agent",
    description:
      "Voice agent that handles parent inquiries, seat availability checks, visit booking, and application submissions for a school.",
    vertical: "Education",
    icon: GraduationCap,
    borderColor: "border-t-blue-500",
    badgeBg: "bg-blue-50 text-blue-700",
    url: RINGAA_URL,
    github: RINGAA_GITHUB,
  },
  {
    name: "Meddo",
    tagline: "AI Clinical Superpower for Doctors",
    description:
      "Voice-powered clinical assistant with calendar, patient management, voice appointment booking, and analytics dashboard.",
    vertical: "Healthcare",
    icon: Stethoscope,
    borderColor: "border-t-teal-500",
    badgeBg: "bg-teal-50 text-teal-700",
    url: MEDDO_URL,
    github: MEDDO_GITHUB,
  },
];

const features = [
  { label: "Conversational AI Agents", detail: "All 4 apps" },
  { label: "Server Tools (Webhooks)", detail: "Real-time data via API" },
  { label: "Client Tools", detail: "Live UI updates mid-conversation" },
  { label: "React SDK Integration", detail: "useConversation hook" },
  { label: "Multi-Vertical Deployment", detail: "Telecom, QSR, Education, Healthcare" },
  { label: "Knowledge Base", detail: "School info, menus, patient data" },
  { label: "Tool Orchestration", detail: "Multi-step workflows" },
  { label: "Multilingual Voice", detail: "Hindi/English/Hinglish (Airtel)" },
  { label: "Enterprise Multi-System", detail: "CRM + Billing + Network + Ticketing" },
];

const techStack = [
  "Next.js 16",
  "TypeScript",
  "Tailwind CSS v4",
  "shadcn/ui",
  "ElevenLabs React SDK",
  "Recharts",
  "Vercel",
];

/* ── Scroll reveal hook ── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const el = ref.current;
    if (el) {
      el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ── Page ── */
export default function ShowcasePage() {
  const containerRef = useScrollReveal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div ref={containerRef}>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950">
        {/* Waveform background — client-only to avoid hydration mismatch */}
        {mounted && (
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
            <div className="flex items-end gap-1 h-40">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="wave-bar w-1 bg-indigo-400 rounded-full"
                  style={{
                    animationDelay: `${i * 0.08}s`,
                    height: `${20 + Math.sin(i * 0.5) * 30}%`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
          {/* Left — Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight animate-fade-up">
              Four Voice AI Solutions.
              <br />
              <span className="text-indigo-400">One Platform.</span> Built on ElevenLabs.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl animate-fade-up-delay-1">
              Building voice AI that solves real problems—from handling enterprise customer service to streamlining pizza ordering, automating school admissions, and empowering doctors with clinical voice assistants.
            </p>

            <p className="mt-12 text-sm text-slate-500 animate-fade-in">
              Built by <span className="text-slate-400 font-medium">Umesh</span> &middot; FDE Application
            </p>
          </div>

          {/* Right — Demo preview cards */}
          <div className="grid grid-cols-2 gap-3 animate-fade-up-delay-1">
            {demos.map((demo) => {
              const Icon = demo.icon;
              const borderMap: Record<string, string> = {
                "border-t-blue-500": "border-blue-500/40",
                "border-t-teal-500": "border-teal-500/40",
                "border-t-red-500": "border-red-500/40",
                "border-t-rose-500": "border-rose-500/40",
              };
              const glowMap: Record<string, string> = {
                "border-t-blue-500": "group-hover:shadow-blue-500/20",
                "border-t-teal-500": "group-hover:shadow-teal-500/20",
                "border-t-red-500": "group-hover:shadow-red-500/20",
                "border-t-rose-500": "group-hover:shadow-rose-500/20",
              };
              const iconBgMap: Record<string, string> = {
                "bg-blue-50 text-blue-700": "bg-blue-500/20 text-blue-300",
                "bg-teal-50 text-teal-700": "bg-teal-500/20 text-teal-300",
                "bg-red-50 text-red-700": "bg-red-500/20 text-red-300",
                "bg-rose-50 text-rose-700": "bg-rose-500/20 text-rose-300",
              };
              return (
                <a
                  key={demo.name}
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative rounded-xl border ${borderMap[demo.borderColor] || "border-slate-700"} bg-white/5 backdrop-blur-sm p-4 hover:bg-white/10 hover:shadow-lg ${glowMap[demo.borderColor] || ""} transition-all duration-300 hover:-translate-y-0.5`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`w-8 h-8 rounded-lg ${iconBgMap[demo.badgeBg] || "bg-slate-700 text-slate-300"} flex items-center justify-center`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm leading-tight">{demo.name}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">{demo.vertical}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{demo.tagline}</p>
                  <div className="mt-3 flex items-center gap-1 text-[11px] text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
                    <ExternalLink className="w-3 h-3" />
                    Try Live Demo
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              ElevenLabs Features Demonstrated
            </h2>
            <p className="mt-3 text-slate-500">
              Comprehensive coverage of the Conversational AI platform capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div
                key={f.label}
                className="reveal feature-item flex items-start gap-3 p-4 rounded-lg bg-white border border-slate-200 hover:border-indigo-200 hover:shadow-sm transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 text-sm">{f.label}</p>
                  <p className="text-xs text-slate-500">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Architecture</h2>
            <p className="mt-3 text-slate-500">
              Shared design pattern across all four demos.
            </p>
          </div>

          <div className="reveal">
            <div className="relative bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-12 overflow-hidden">
              {/* Top: ElevenLabs Agent */}
              <div className="flex justify-center mb-8">
                <div className="bg-indigo-600 text-white rounded-xl px-6 py-4 text-center shadow-lg">
                  <p className="font-bold text-sm">ElevenLabs Agent</p>
                  <p className="text-xs text-indigo-200 mt-1">STT &rarr; LLM &rarr; TTS</p>
                </div>
              </div>

              {/* Arrows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-slate-200 bg-white">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Server Tools</div>
                  <div className="w-px h-4 bg-slate-300" />
                  <div className="bg-slate-900 text-white rounded-lg px-4 py-3 text-center w-full">
                    <p className="font-medium text-sm">Next.js API Routes</p>
                    <p className="text-xs text-slate-400 mt-0.5">Deployed on Vercel</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-slate-200 bg-white">
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Client Tools</div>
                  <div className="w-px h-4 bg-slate-300" />
                  <div className="bg-emerald-600 text-white rounded-lg px-4 py-3 text-center w-full">
                    <p className="font-medium text-sm">React State Updates</p>
                    <p className="text-xs text-emerald-200 mt-0.5">Live UI in Browser</p>
                  </div>
                </div>
              </div>

              {/* WebRTC line */}
              <div className="flex items-center gap-3 justify-center mb-8">
                <div className="h-px flex-1 bg-slate-300" />
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-xs text-slate-600 font-medium">
                  <Waves className="w-3.5 h-3.5" />
                  WebRTC Audio
                </div>
                <div className="h-px flex-1 bg-slate-300" />
              </div>

              {/* Bottom: User Browser */}
              <div className="flex justify-center">
                <div className="bg-white border-2 border-slate-300 rounded-xl px-6 py-4 text-center">
                  <p className="font-bold text-sm text-slate-900">User&apos;s Browser</p>
                  <p className="text-xs text-slate-500 mt-1 font-mono">@elevenlabs/react SDK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-12 px-6 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="reveal flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="reveal">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">About This Project</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                I built these four demos to show how ElevenLabs Conversational AI can be deployed as a
                Forward Deployed Engineer across different verticals.
              </p>
              <p>
                Each app demonstrates the full FDE workflow: understanding client needs, designing voice agents
                with the right tools, building robust integrations, and shipping production-quality solutions.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-slate-900 font-semibold">&mdash; Umesh</p>
              <p className="text-sm text-slate-500 mt-1">
                Applied for: Forward Deployed Engineer &mdash; Software Engineer
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 bg-slate-900 text-center">
        <p className="text-sm text-slate-400">
          Built with <span className="text-red-400">&hearts;</span> and{" "}
          <span className="text-indigo-400 font-medium">ElevenLabs</span> &middot; 2026
        </p>
      </footer>
    </div>
  );
}
