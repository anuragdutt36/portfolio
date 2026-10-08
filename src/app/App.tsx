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
  Phone,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import profilePic from "@/imports/Profile_Pic.jpg";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  "JavaScript (ES6+)",
  "Java",
  "Python",
  "C",
  "HTML5",
  "CSS3",
  "React.js",
  "Tailwind CSS",
  "DaisyUI",
  "Context API",
  "Zustand",
  "Recharts",
  "Node.js",
  "Express.js",
  "Socket.io",
  "RESTful APIs",
  "WebSockets",
  "MongoDB",
  "MongoDB Atlas",
  "Mongoose",
  "IBM Cloud",
  "Cloudinary",
  "Git",
  "GitHub",
  "Postman",
  "Jest",
  "Supertest",
  "JWT",
  "OAuth 2.0",
  "Prompt Engineering",
  "Data Structures & Algorithms (DSA)",
  "System Design (LLD/HLD)",
  "RBAC",
  "Multi-Tenant SaaS",
];

const PROJECTS = [
  {
    title: "Acadexa – Academic Feedback & Evaluation Platform",
    description:
      "Engineered a multi-tenant SaaS feedback platform on the MERN stack automating student evaluations across 7 instructional metrics. Implemented an identity-decoupling anonymity pipeline separating transaction completion tokens from feedback rating payloads. Constructed context-injection middleware enforcing tenant query boundaries (institutionId), preventing cross-tenant leakage across 14 collections. Configured a 6-tier Role-Based Access Control (RBAC) hierarchy secured via JWT authentication and Google OAuth 2.0. Implemented dynamic score computation engines evaluating the Overall Faculty Evaluation Index (OFEI) with visual analytics.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    icon: <Zap className="w-5 h-5" />,
    gradient: "from-[#d4844a]/20 to-[#8b4513]/5",
    accentColor: "#d4844a",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Architected an instant messaging application using Socket.io for persistent, bidirectional communication. Integrated live user presence and online/offline status synchronisation across clients using Socket.io and React Context API. Utilized Zustand for centralized client state management, optimizing rendering cycles and state persistence across active chats. Secured client-server communication using JSON Web Tokens (JWT) and encrypted password hashing pipelines. Built a responsive UI utilizing Tailwind CSS and DaisyUI, supporting organized multi-participant conversation schemas.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Zustand"],
    icon: <Layers className="w-5 h-5" />,
    gradient: "from-[#a0522d]/20 to-[#6b3520]/5",
    accentColor: "#a0522d",
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
              OPEN TO ENTRY-LEVEL SOFTWARE DEVELOPMENT ROLES
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-foreground mb-6"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Hi, I&apos;m{" "}
              <span
                className="block pb-2"
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
              <span className="text-[#d4844a] font-medium">
                Aspiring Software Engineer
              </span>{" "}
              | MERN Stack & Backend API Engineering
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
                Explore Projects
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
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-6 mt-12">
              {[
                { label: "LeetCode Solved", value: "300+" },
                { label: "MCA Cohort Rank", value: "Top 5" },
                { label: "Hackathon Award", value: "Winner" },
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
                    alt="Anurag Dutt — Aspiring Software Engineer"
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
                  ✦ Aspiring Software Engineer
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
              I am an <span className="text-[#d4844a] font-medium">Aspiring Software Engineer</span> and MCA student passionate about building scalable web applications, real-time networking systems, and robust backend APIs. My engineering practice focuses on designing multi-tenant SaaS applications, decoupled database architectures, and responsive full-stack interfaces.
            </p>
            <p
              className="text-muted-foreground text-base leading-7"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              With a solid foundation in Computer Applications, Data Structures & Algorithms, and modern MERN stack development, I bridge the gap between user-centric frontend experiences and secure backend infrastructure. I prioritize writing clean, maintainable code, implementing tenant isolation boundaries, and engineering low-latency communication models.
            </p>
            <p
              className="text-muted-foreground text-base leading-7"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              When I am not engineering full-stack applications like Acadexa or Socket.io real-time chat platforms, I actively solve algorithmic challenges on LeetCode and explore emerging AI-accelerated developer workflows. I am seeking an entry-level software development role where I can contribute strong problem-solving skills and grow within a fast-paced engineering team.
            </p>
          </div>

          {/* Skills */}
          <div className="lg:col-span-2">
            <h3
              className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-6"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Technical Skills
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
            Featured Projects
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
            Let&apos;s Connect
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
              Seeking an entry-level software development role to contribute clean code, strong problem-solving skills, and AI-accelerated workflows. Feel free to reach out via email!
            </p>

            <div className="space-y-4 mb-10">
              <a
                href="mailto:anuragdutt36@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-[#d4844a] transition-colors group"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-border group-hover:border-[#d4844a]/40 group-hover:bg-[#d4844a]/5 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">anuragdutt36@gmail.com</span>
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
                placeholder="Describe your software opportunity or engineering discussion..."
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
          © 2026 Anurag Dutt. Aspiring Software Engineer.
        </span>
        <div
          className="flex items-center gap-1 text-xs text-muted-foreground font-mono"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          <span className="text-[#d4844a]">const</span>
          <span className="text-foreground ml-1">stack</span>
          <span className="text-muted-foreground ml-1">=</span>
          <span className="text-[#a0522d] ml-1">&apos;MERN & Backend API&apos;</span>
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
