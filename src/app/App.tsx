import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Code2,
  Layers,
  Zap,
  Globe,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import profilePic from "@/imports/Profile_Pic.jpg";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  "Figma",
  "User Research",
  "Wireframing",
  "High-Fidelity Prototyping",
  "Design Systems",
  "Interaction Design",
  "Information Architecture",
  "Usability Testing",
  "UX Writing",
  "Visual Design",
  "React",
  "TailwindCSS",
  "HTML & CSS",
  "User Journeys",
  "A/B Testing",
  "Git",
];

const PROJECTS = [
  {
    title: "NovaPay — Fintech Checkout Experience",
    description:
      "Redesigned the payment and checkout flows for a global fintech platform. Conducted extensive user testing to streamline transaction entry, reducing cart abandonment and checkout friction.",
    tags: ["Interaction Design", "User Testing", "Figma", "Information Architecture"],
    icon: <Zap className="w-5 h-5" />,
    gradient: "from-[#d4844a]/20 to-[#8b4513]/5",
    accentColor: "#d4844a",
  },
  {
    title: "Orion — Multi-brand Design System",
    description:
      "Architected a scalable, token-based design system in Figma and React. Designed 80+ accessibility-compliant components, streamlining design-to-development handoff across multiple teams.",
    tags: ["Design Systems", "Figma Tokens", "Accessibility", "React"],
    icon: <Layers className="w-5 h-5" />,
    gradient: "from-[#a0522d]/20 to-[#6b3520]/5",
    accentColor: "#a0522d",
  },
  {
    title: "CodeScope — AI Coding Assistant Interface",
    description:
      "Designed the user experience and workspace interface for an AI-powered code analysis tool. Conducted developer research to build a layout that displays recommendations intuitively.",
    tags: ["Product Design", "AI UX", "Heuristic Evaluation", "Wireframing"],
    icon: <Code2 className="w-5 h-5" />,
    gradient: "from-[#e8a87c]/20 to-[#a0522d]/5",
    accentColor: "#e8a87c",
  },
  {
    title: "Wandr — Collaborative Travel Planner",
    description:
      "Designed a mobile-first travel planning app from initial research to high-fidelity interactive prototype. Created collaborative trip-building tools and a map-integrated itinerary builder.",
    tags: ["Mobile UX", "User Journeys", "Interactive Prototyping", "User Research"],
    icon: <Globe className="w-5 h-5" />,
    gradient: "from-[#c47a3a]/20 to-[#7c3d1f]/5",
    accentColor: "#c47a3a",
  },
];

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0a07]/90 backdrop-blur-xl border-b border-[#d4844a]/10 shadow-[0_4px_30px_rgba(212,132,74,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span
          className="font-[Outfit] font-bold text-lg tracking-tight cursor-pointer select-none"
          style={{ fontFamily: "Outfit, sans-serif" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-foreground">Anurag</span>
          <span className="text-[#d4844a]">.</span>
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleNav(l.href)}
                className="text-sm text-muted-foreground hover:text-[#d4844a] transition-colors duration-200 font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNav("#contact")}
              className="px-4 py-1.5 rounded-full text-sm font-semibold border border-[#d4844a]/50 text-[#d4844a] hover:bg-[#d4844a]/10 transition-all duration-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Hire Me
            </button>
          </li>
        </ul>

        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#1a1109]/95 backdrop-blur-xl border-t border-[#d4844a]/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className="text-left text-base text-muted-foreground hover:text-[#d4844a] transition-colors py-1"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#d4844a]/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#a0522d]/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#d4844a]/20 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,132,74,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,132,74,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#d4844a]/30 bg-[#d4844a]/5 text-[#d4844a] text-xs font-mono mb-8 tracking-wider"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4844a] animate-pulse" />
              OPEN TO COLLABORATION
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-foreground mb-6"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Hi, I&apos;m{" "}
              <span
                className="block pb-2" // <-- Added pb-3 (padding-bottom)
                style={{
                  background:
                    "linear-gradient(135deg, #d4844a 0%, #a0522d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Anurag Dutt
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Product designer crafting{" "}
              <span className="text-[#d4844a] font-medium">
                thoughtful, intuitive
              </span>{" "}
              digital experiences — blending human-centered design with interactive prototyping.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#0f0a07] bg-[#d4844a] hover:bg-[#d4844a]/90 transition-all duration-200 shadow-[0_0_30px_rgba(212,132,74,0.35)] hover:shadow-[0_0_50px_rgba(212,132,74,0.55)] text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Explore Case Studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-foreground border border-[#a0522d]/50 hover:border-[#a0522d] hover:bg-[#a0522d]/10 transition-all duration-200 text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Let&apos;s Collaborate
              </button>
            </div>

            <div className="flex items-center gap-6 mt-12">
              {[
                { label: "Case Studies", value: "15+" },
                { label: "Years Exp.", value: "4+" },
                { label: "Brands Shaped", value: "12" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl font-black text-foreground"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs text-muted-foreground tracking-wide uppercase"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative -translate-y-7">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d4844a] to-[#a0522d] blur-2xl opacity-30 scale-110" />
              {/* Gradient border ring */}
              <div
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full p-[3px]"
                style={{
                  background:
                    "linear-gradient(135deg, #d4844a, #a0522d, #d4844a)",
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1a1109]">
                  <ImageWithFallback
                    src={profilePic}
                    alt="Anurag Dutt — Full-stack engineer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-3 -right-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#1a1109] border border-[#a0522d]/30 shadow-[0_0_20px_rgba(160,82,45,0.2)]"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                <span className="text-[#a0522d] text-xs font-medium">
                  ✦ Product Designer
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span
            className="text-xs text-muted-foreground font-mono"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            scroll
          </span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-28 relative">
      <div className="pointer-events-none absolute right-0 top-1/4 w-72 h-72 rounded-full bg-[#a0522d]/6 blur-[80px]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span
            className="text-xs text-[#d4844a] font-mono tracking-widest uppercase"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            01 /
          </span>
          <h2
            className="text-3xl md:text-4xl font-black text-foreground"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            About Me
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#d4844a]/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-5">
            <p
              className="text-foreground/90 text-base leading-7"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              I&apos;m an aspiring product designer and a current MCA 2nd-year student passionate about crafting user-centered interfaces and digital experiences. My design practice is anchored at the intersection of{" "}
              <span className="text-[#d4844a] font-medium">
                empathy-led research
              </span>{" "}
              and{" "}
              <span className="text-[#a0522d] font-medium">
                interactive craftsmanship
              </span>{" "}
              — I care as much about cognitive friction and accessibility standards as I do about design system consistency and delightful micro-interactions.
            </p>
            <p
              className="text-muted-foreground text-base leading-7"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              With a background in Computer Applications, I bridge the gap between development and design, approaching user interfaces not just as styling, but as a strategic way to solve business and user needs through logical, structured problem-solving.
            </p>
            <p
              className="text-muted-foreground text-base leading-7"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              When I&apos;m not sketching wireframes or building interactive prototypes, I&apos;m exploring emerging UI patterns, reading about behavioral psychology, or building personal design projects.
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/anuragdutt36"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#d4844a] transition-colors group"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anuragdutt36"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#d4844a] transition-colors group"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-2">
            <h3
              className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-6"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Design Toolkit
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill, i) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    borderColor:
                      i % 3 === 0
                        ? "rgba(212,132,74,0.4)"
                        : i % 3 === 1
                          ? "rgba(160,82,45,0.4)"
                          : "rgba(56,189,248,0.3)",
                    color:
                      i % 3 === 0
                        ? "#d4844a"
                        : i % 3 === 1
                          ? "#c47a3a"
                          : "#7dd3fc",
                    backgroundColor:
                      i % 3 === 0
                        ? "rgba(212,132,74,0.07)"
                        : i % 3 === 1
                          ? "rgba(160,82,45,0.07)"
                          : "rgba(56,189,248,0.06)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="pointer-events-none absolute left-0 top-1/3 w-80 h-80 rounded-full bg-[#d4844a]/5 blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span
            className="text-xs text-[#a0522d] font-mono tracking-widest uppercase"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            02 /
          </span>
          <h2
            className="text-3xl md:text-4xl font-black text-foreground"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Selected Work
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#a0522d]/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl border bg-card overflow-hidden transition-all duration-300 cursor-pointer group ${
        hovered
          ? "border-[rgba(212,132,74,0.3)] shadow-[0_8px_40px_rgba(212,132,74,0.12)] -translate-y-1"
          : "border-border"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient glow background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${project.gradient}`}
      />

      <div className="relative p-7">
        {/* Icon + title row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center border"
            style={{
              borderColor: `${project.accentColor}33`,
              color: project.accentColor,
              backgroundColor: `${project.accentColor}12`,
            }}
          >
            {project.icon}
          </div>
          <ExternalLink
            className={`w-4 h-4 transition-all duration-200 ${
              hovered
                ? "text-[#d4844a] opacity-100 translate-x-0"
                : "text-muted-foreground opacity-0 -translate-x-1"
            }`}
          />
        </div>

        <h3
          className="text-lg font-bold text-foreground mb-3 group-hover:text-white transition-colors"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm text-muted-foreground leading-6 mb-6"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-mono text-muted-foreground border border-border bg-muted/50"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms submission failed:", data);
        alert(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4844a]/20 to-transparent" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 w-72 h-72 rounded-full bg-[#a0522d]/7 blur-[90px]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-16">
          <span
            className="text-xs text-[#d4844a] font-mono tracking-widest uppercase"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            03 /
          </span>
          <h2
            className="text-3xl md:text-4xl font-black text-foreground"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Let&apos;s Collaborate
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[#d4844a]/30 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <p
              className="text-xl text-foreground/80 leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Have a product vision, an interactive challenge, or just want to chat about user experience design? I&apos;m always open to new projects, collaborations, and discussions.
            </p>

            <div className="space-y-4 mb-10">
              <a
                href="mailto:anuragdutt135790@outlook.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-[#d4844a] transition-colors group"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-border group-hover:border-[#d4844a]/40 group-hover:bg-[#d4844a]/5 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">anuragdutt135790@outlook.com</span>
              </a>
              <a
                href="https://github.com/anuragdutt36"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-[#d4844a] transition-colors group"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-border group-hover:border-[#d4844a]/40 group-hover:bg-[#d4844a]/5 transition-all">
                  <Github className="w-4 h-4" />
                </div>
                <span className="text-sm">github.com/anuragdutt36</span>
              </a>
              <a
                href="https://linkedin.com/in/anuragdutt36"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-[#d4844a] transition-colors group"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-border group-hover:border-[#d4844a]/40 group-hover:bg-[#d4844a]/5 transition-all">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-sm">linkedin.com/in/anuragdutt36</span>
              </a>
            </div>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#d4844a]/20 bg-[#d4844a]/5 text-xs text-[#d4844a]"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4844a] animate-pulse" />
              Typically replies within 24h
            </div>
          </div>

          {/* Right — form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="hidden"
              name="access_key"
              value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ""}
            />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />
            {submitted && (
              <div
                className="p-4 rounded-xl border border-[#d4844a]/30 bg-[#d4844a]/8 text-[#d4844a] text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                ✓ Message sent! I&apos;ll get back to you soon.
              </div>
            )}

            {[
              {
                key: "name",
                label: "Name",
                type: "text",
                placeholder: "Jane Doe",
              },
              {
                key: "email",
                label: "Email",
                type: "email",
                placeholder: "hello@example.com",
              },
            ].map((field) => (
              <div key={field.key}>
                <label
                  className="block text-xs font-mono text-muted-foreground mb-2 tracking-wider uppercase"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.key}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) =>
                    setForm({ ...form, [field.key]: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#2a1a0e] border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-[#d4844a]/50 focus:ring-1 focus:ring-[#d4844a]/30 transition-all"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>
            ))}

            <div>
              <label
                className="block text-xs font-mono text-muted-foreground mb-2 tracking-wider uppercase"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                placeholder="Describe your product vision, timeline, or design challenges..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#2a1a0e] border border-border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:border-[#d4844a]/50 focus:ring-1 focus:ring-[#d4844a]/30 transition-all resize-none"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-semibold text-sm text-[#0f0a07] bg-[#d4844a] hover:bg-[#d4844a]/90 transition-all duration-200 shadow-[0_0_25px_rgba(212,132,74,0.3)] hover:shadow-[0_0_40px_rgba(212,132,74,0.5)]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span
          className="text-sm text-muted-foreground"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          © 2026 Anurag Dutt. Designed with intent.
        </span>
        <div
          className="flex items-center gap-1 text-xs text-muted-foreground font-mono"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          <span className="text-[#d4844a]">const</span>
          <span className="text-foreground ml-1">philosophy</span>
          <span className="text-muted-foreground ml-1">=</span>
          <span className="text-[#a0522d] ml-1">&apos;human-centered&apos;</span>
          <span className="text-muted-foreground ml-0.5">;</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
