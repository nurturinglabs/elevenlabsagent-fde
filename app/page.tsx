"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Stethoscope,
  Pizza,
  Phone,
  ExternalLink,
  Linkedin,
  Waves,
  Mic,
  Wrench,
  Rocket,
  ChevronRight,
} from "lucide-react";

/* ── URLs ── */
const AIRTEL_URL = "https://elevenlabsagent-airtel.vercel.app";
const DOMINOS_URL = "https://elevenlabsagent-dominos.vercel.app";
const RINGAA_URL = "https://elevenlabsagent-ringaa.vercel.app";
const MEDDO_URL = "https://elevenlabsagent-meddo.vercel.app";

const LINKEDIN_URL = "https://www.linkedin.com/in/umeshjn/";

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
  },
];

const techStack = ["Next.js 16", "TypeScript", "Tailwind v4", "shadcn/ui", "ElevenLabs SDK", "Recharts", "Vercel"];

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

      {/* HOW IT'S BUILT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How It&apos;s Built</h2>
            <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
              Every demo uses the ElevenLabs Conversational AI SDK with real-time WebRTC audio,
              server tools, and client tools that update the UI mid-conversation.
            </p>
          </div>

          {/* Three pillars */}
          <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                <Mic className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">ElevenLabs Conversational AI</h3>
              <ul className="space-y-1.5 text-sm text-slate-500">
                <li>Voice agents across 4 industry verticals</li>
                <li>Real-time audio streaming via WebRTC</li>
                <li>Contextual updates sent mid-conversation</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Server + Client Tools</h3>
              <ul className="space-y-1.5 text-sm text-slate-500">
                <li>Server tools — agent calls Next.js API routes for data</li>
                <li>Client tools — agent triggers React state updates live</li>
                <li>Domain data: menus, patient records, CRM, school info</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Full-Stack Apps</h3>
              <ul className="space-y-1.5 text-sm text-slate-500">
                <li>Complete UIs — dashboards, records, order flows</li>
                <li>25+ API routes across all demos</li>
                <li>4 live deployments on Vercel</li>
              </ul>
            </div>
          </div>

          {/* Architecture flow */}
          <div className="reveal rounded-xl bg-slate-50 border border-slate-200 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
              <div className="bg-white border-2 border-slate-300 rounded-lg px-4 py-2.5 text-center">
                <p className="font-semibold text-xs text-slate-900">Browser</p>
                <p className="text-[10px] text-slate-400 font-mono">@elevenlabs/react</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 hidden sm:block" />
              <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-slate-200">
                <Waves className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs font-medium text-slate-600">WebRTC</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 hidden sm:block" />
              <div className="bg-indigo-600 text-white rounded-lg px-5 py-2.5 text-center">
                <p className="font-bold text-sm">ElevenLabs Agent</p>
                <p className="text-[10px] text-indigo-200">STT + LLM + TTS</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="bg-slate-900 text-white rounded-lg px-4 py-2.5 text-center">
                  <p className="font-semibold text-xs">Server Tools</p>
                  <p className="text-[10px] text-slate-400">Next.js API</p>
                </div>
                <div className="bg-emerald-600 text-white rounded-lg px-4 py-2.5 text-center">
                  <p className="font-semibold text-xs">Client Tools</p>
                  <p className="text-[10px] text-emerald-200">React State</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div className="reveal flex flex-wrap items-center justify-center gap-2 mt-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-slate-100 text-xs font-medium text-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + FOOTER — combined into one dark section */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-slate-300 leading-relaxed">
            Four demos, four verticals — built to show how ElevenLabs Conversational AI
            ships production-grade voice solutions from day one.
            Each app covers the full FDE workflow: scoping client needs, designing agents,
            integrating tools, and deploying.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="text-white font-semibold">&mdash; Umesh</span>
            <span className="text-slate-600">&middot;</span>
            <span className="text-sm text-slate-400">FDE Application</span>
            <span className="text-slate-600">&middot;</span>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
          <p className="mt-10 text-xs text-slate-600">
            Built with <span className="text-red-400">&hearts;</span> and{" "}
            <span className="text-indigo-400 font-medium">ElevenLabs</span> &middot; 2026
          </p>
        </div>
      </section>
    </div>
  );
}
