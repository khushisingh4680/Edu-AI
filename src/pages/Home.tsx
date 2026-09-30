import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  BookOpen,
  Presentation,
  Network,
  Table as TableIcon,
  HelpCircle,
  MessageSquare,
  Layers,
  Calendar,
  Camera,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Code,
  Zap,
} from "lucide-react";
import heroVisualImg from "../assets/images/hero_playful_ai_student_1790345403725.jpg";

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tools = [
    {
      number: "01",
      name: "AI Resume Builder",
      route: "/resume-builder",
      description: "Create professional ATS-friendly resumes with AI.",
      accent: "#7C3AED", // Studio Purple
      accentBg: "bg-[#7C3AED]/10 text-[#7C3AED]",
      tags: ["ATS-Compliant", "Vector PDF", "Instant Export"],
      cta: "Build Resume →",
      visualType: "document",
    },
    {
      number: "02",
      name: "AI Notes Generator",
      route: "/notes-generator",
      description: "Turn raw study material into structured notes.",
      accent: "#F59E0B", // Warm Amber
      accentBg: "bg-[#F59E0B]/10 text-[#F59E0B]",
      tags: ["Markdown", "Study Guide", "Exam Points"],
      cta: "Generate Notes →",
      visualType: "notes",
    },
    {
      number: "03",
      name: "AI Presentation Generator",
      route: "/presentation-generator",
      description: "Generate complete slide-by-slide presentation content.",
      accent: "#2563EB", // Electric Blue
      accentBg: "bg-[#2563EB]/10 text-[#2563EB]",
      tags: ["Slide Decks", "Interactive Player", "Speaker Script"],
      cta: "Create Presentation →",
      visualType: "presentation",
    },
    {
      number: "04",
      name: "AI Mind Map Generator",
      route: "/mind-map-generator",
      description: "Convert syllabi and topics into visual mind maps.",
      accent: "#10B981", // Mint
      accentBg: "bg-[#10B981]/10 text-[#10B981]",
      tags: ["Interactive SVG", "Node Explorer", "Visual Outlines"],
      cta: "Create Mind Map →",
      visualType: "mindmap",
    },
    {
      number: "05",
      name: "Google Sheets Data Tool",
      route: "/google-sheets",
      description: "Connect Google Sheets and visualize live data.",
      accent: "#10B981", // Mint / Electric Blue
      accentBg: "bg-[#10B981]/10 text-[#10B981]",
      tags: ["Live Sync", "Zero-Server DB", "Data Insights"],
      cta: "Open Sheets Tool →",
      visualType: "sheets",
    },
    {
      number: "06",
      name: "AI Quiz Generator",
      route: "/quiz-generator",
      description: "Generate interactive quizzes from topics and notes.",
      accent: "#EC4899", // Soft Pink
      accentBg: "bg-[#EC4899]/10 text-[#EC4899]",
      tags: ["Instant Grading", "Explanations", "Active Recall"],
      cta: "Generate Quiz →",
      visualType: "quiz",
    },
    {
      number: "07",
      name: "AI Doubt Solver",
      route: "/doubt-solver",
      description: "Ask questions and learn through AI-powered explanations.",
      accent: "#7C3AED", // Studio Purple
      accentBg: "bg-[#7C3AED]/10 text-[#7C3AED]",
      tags: ["Step-by-Step", "Real Analogies", "Tutor Chat"],
      cta: "Ask AI →",
      visualType: "tutor",
    },
    {
      number: "08",
      name: "AI Flashcard Generator",
      route: "/flashcard-generator",
      description: "Turn study material into interactive revision cards.",
      accent: "#2563EB", // Electric Blue
      accentBg: "bg-[#2563EB]/10 text-[#2563EB]",
      tags: ["3D Flip", "Spaced Recall", "Deck Shuffle"],
      cta: "Create Flashcards →",
      visualType: "flashcards",
    },
    {
      number: "09",
      name: "AI Study Planner",
      route: "/study-planner",
      description: "Generate personalized study timetables with AI.",
      accent: "#F59E0B", // Warm Amber
      accentBg: "bg-[#F59E0B]/10 text-[#F59E0B]",
      tags: ["Day Matrix", "Exam Timetable", "Priority Focus"],
      cta: "Plan My Study →",
      visualType: "planner",
    },
    {
      number: "10",
      name: "OCR Notes Summarizer",
      route: "/ocr-summarizer",
      description: "Scan notes, extract text and summarize them with AI.",
      accent: "#EC4899", // Soft Pink
      accentBg: "bg-[#EC4899]/10 text-[#EC4899]",
      tags: ["Multimodal OCR", "Handwriting Scan", "Structured Summary"],
      cta: "Scan Notes →",
      visualType: "ocr",
    },
  ];

  const renderToolVisual = (type: string, accent: string) => {
    switch (type) {
      case "document":
        return (
          <div className="relative w-full bg-[#FBFBFE] rounded-2xl border border-[#DFE4F2] p-3.5 sm:p-4 overflow-hidden shadow-xs group-hover:shadow-md transition-all duration-300">
            {/* Top Document Header Bar */}
            <div className="flex items-center justify-between border-b border-[#DFE4F2] pb-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                <span className="text-[10.5px] font-mono font-bold text-[#080909] tracking-wide">
                  ALEX_RIVERA_RESUME.PDF
                </span>
                <span className="hidden sm:inline-block text-[9px] font-mono uppercase px-1.5 py-0.5 bg-[#DFE4F2]/70 text-[#080909]/80 rounded font-bold">
                  Vector ISO A4
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full text-emerald-800 text-[10px] font-mono font-bold">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>ATS 98% MATCH</span>
              </div>
            </div>

            {/* Content Grid: Mini Resume Sheet + Live ATS Audit */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-left">
              {/* Left Column: Authentic Miniature Resume Preview */}
              <div className="md:col-span-7 bg-white rounded-xl border border-[#DFE4F2] p-2.5 sm:p-3 space-y-2 shadow-2xs">
                {/* Candidate Header */}
                <div className="border-b border-[#DFE4F2]/80 pb-1.5 flex items-start justify-between">
                  <div>
                    <h4 className="text-xs font-black text-[#080909] tracking-tight">
                      Alex Rivera
                    </h4>
                    <p className="text-[10px] font-semibold text-[#7C3AED]">
                      Lead AI & Full-Stack Systems Engineer
                    </p>
                  </div>
                  <span className="text-[9px] font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                    San Francisco, CA
                  </span>
                </div>

                {/* Experience Item */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-bold text-[#080909]">
                      Lead AI Engineer · TechCore Labs
                    </span>
                    <span className="font-mono text-[9px] text-slate-600">
                      2022–Present
                    </span>
                  </div>
                  <ul className="text-[9.5px] text-[#080909]/80 space-y-0.5 pl-2 border-l-2 border-[#7C3AED]/40">
                    <li className="leading-tight truncate">
                      • Shipped distributed LLM pipelines processing 12M+ token
                      requests/day
                    </li>
                    <li className="leading-tight truncate">
                      • Cut vector search latency by 42% via real-time hybrid
                      index caching
                    </li>
                  </ul>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {[
                    "Python",
                    "TypeScript",
                    "Next.js",
                    "PyTorch",
                    "Vector DB",
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-[8.5px] font-mono font-medium px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[#080909]/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Live ATS Compliance Audit Card */}
              <div className="md:col-span-5 bg-[#F0EEFA]/50 rounded-xl border border-[#DFE4F2] p-2.5 sm:p-3 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7C3AED]">
                      ATS Scanner Audit
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="space-y-1 text-[9.5px] text-[#080909]/85 font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Section Heading Hierarchy</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Zero Unparseable Tables</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>100% Vector Text Embedding</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>Standard 1-Page Ratio</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#DFE4F2]/70 flex items-center justify-between text-[9px] font-mono text-[#080909]/70">
                  <span>Export: PDF / MD / TXT</span>
                  <span className="font-bold text-[#7C3AED]">Ready</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "notes":
        return (
          <div className="relative w-full h-32 bg-[#F7F8FA] rounded-2xl border border-[#DFE4F2] p-3 overflow-hidden shadow-sm flex items-center justify-center">
            {/* Sticky notes visual */}
            <div className="absolute top-2 left-3 w-24 h-24 bg-[#FEF3C7] rounded-xl border border-[#FDE68A] p-2 rotate-[-4deg] shadow-sm flex flex-col justify-between group-hover:rotate-0 transition-transform">
              <div className="text-[9px] font-bold text-amber-900">
                # Key Concept
              </div>
              <div className="text-[8px] text-amber-800 line-clamp-3">
                Active recall strengthens neural pathways...
              </div>
              <div className="h-1 w-8 bg-amber-400 rounded-full" />
            </div>
            <div className="absolute top-4 right-3 w-24 h-24 bg-[#DFE4F2] rounded-xl border border-[#CBD5E1] p-2 rotate-[6deg] shadow-sm flex flex-col justify-between group-hover:rotate-2 transition-transform">
              <div className="text-[9px] font-bold text-slate-800">
                Exam Note
              </div>
              <div className="text-[8px] text-slate-600 line-clamp-3">
                Synthesizes verbatim definitions
              </div>
              <div className="h-1 w-6 bg-[#2563EB] rounded-full" />
            </div>
          </div>
        );

      case "presentation":
        return (
          <div className="relative w-full h-32 bg-[#1E293B] rounded-2xl border border-slate-700 p-3 overflow-hidden shadow-sm flex flex-col justify-between text-white group-hover:scale-102 transition-transform">
            <div className="flex items-center justify-between text-[10px] text-amber-300 font-mono">
              <span>SLIDE 01 / 06</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                Quantum Computing
              </div>
              <div className="text-[10px] text-slate-400">
                Superposition & Entanglement
              </div>
            </div>
            <div className="flex gap-1">
              <div className="h-1 flex-1 bg-amber-400 rounded-full" />
              <div className="h-1 flex-1 bg-slate-600 rounded-full" />
              <div className="h-1 flex-1 bg-slate-600 rounded-full" />
            </div>
          </div>
        );

      case "mindmap":
        return (
          <div className="relative w-full h-32 bg-white rounded-2xl border border-[#DFE4F2] p-3 overflow-hidden shadow-sm flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="px-2.5 py-1 rounded-lg bg-[#10B981] text-white text-[10px] font-bold shadow-sm">
                Central Topic
              </div>
              <div className="w-6 h-0.5 bg-[#10B981]" />
              <div className="space-y-2">
                <div className="px-2 py-0.5 rounded bg-[#DFE4F2] text-[9px] font-medium text-[#080909]">
                  Branch Alpha
                </div>
                <div className="px-2 py-0.5 rounded bg-[#DFE4F2] text-[9px] font-medium text-[#080909]">
                  Branch Beta
                </div>
              </div>
            </div>
          </div>
        );

      case "sheets":
        return (
          <div className="relative w-full h-32 bg-[#F7F8FA] rounded-2xl border border-[#DFE4F2] p-2.5 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 gap-1 text-[9px] font-mono text-center">
              <div className="bg-[#DFE4F2] p-1 rounded font-bold text-[#080909]">
                Metric
              </div>
              <div className="bg-[#DFE4F2] p-1 rounded font-bold text-[#080909]">
                Target
              </div>
              <div className="bg-[#DFE4F2] p-1 rounded font-bold text-[#080909]">
                Status
              </div>
              <div className="bg-white p-1 rounded border border-[#DFE4F2]">
                Calculus
              </div>
              <div className="bg-white p-1 rounded border border-[#DFE4F2]">
                95%
              </div>
              <div className="bg-emerald-100 text-emerald-800 p-1 rounded font-bold">
                Passed
              </div>
              <div className="bg-white p-1 rounded border border-[#DFE4F2]">
                Physics
              </div>
              <div className="bg-white p-1 rounded border border-[#DFE4F2]">
                90%
              </div>
              <div className="bg-blue-100 text-blue-800 p-1 rounded font-bold">
                Review
              </div>
            </div>
          </div>
        );

      case "quiz":
        return (
          <div className="relative w-full h-32 bg-white rounded-2xl border border-[#DFE4F2] p-3 overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="text-[10px] font-bold text-[#EC4899] font-mono">
              QUESTION 01
            </div>
            <div className="text-[11px] font-medium text-[#080909] line-clamp-1">
              What is the primary function of DNA?
            </div>
            <div className="space-y-1">
              <div className="px-2 py-1 rounded bg-[#EC4899]/15 border border-[#EC4899]/30 text-[9px] font-bold text-[#EC4899] flex items-center justify-between">
                <span>A. Genetic encoding</span>
                <CheckCircle2 className="w-3 h-3 text-[#EC4899]" />
              </div>
              <div className="px-2 py-1 rounded bg-[#F7F8FA] text-[9px] text-[#080909]/60">
                <span>B. Energy storage</span>
              </div>
            </div>
          </div>
        );

      case "tutor":
        return (
          <div className="relative w-full h-32 bg-[#F7F8FA] rounded-2xl border border-[#DFE4F2] p-3 overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#6366F1] flex items-center justify-center text-white text-[10px] font-bold">
                AI
              </div>
              <span className="text-[10px] font-bold text-[#080909]">
                Socratic Tutor
              </span>
            </div>
            <div className="bg-white rounded-xl p-2 border border-[#DFE4F2] text-[10px] text-[#080909] shadow-xs">
              "Think of a cell membrane like a selective security checkpoint..."
            </div>
            <div className="text-[9px] text-[#6366F1] font-bold">
              Analogy + Multi-Tier Explanation
            </div>
          </div>
        );

      case "flashcards":
        return (
          <div className="relative w-full h-32 bg-white rounded-2xl border border-[#DFE4F2] p-3 overflow-hidden shadow-sm flex items-center justify-center">
            <div className="relative w-36 h-20 bg-gradient-to-tr from-[#8B5CF6] to-[#A78BFA] text-white rounded-xl shadow-md p-3 flex flex-col justify-between group-hover:rotate-3 transition-transform">
              <span className="text-[9px] font-mono opacity-80">
                ACTIVE RECALL
              </span>
              <span className="text-[11px] font-bold">
                Photosynthesis Equation
              </span>
              <span className="text-[8px] text-right underline opacity-90">
                Click to flip ↻
              </span>
            </div>
          </div>
        );

      case "planner":
        return (
          <div className="relative w-full h-32 bg-[#F7F8FA] rounded-2xl border border-[#DFE4F2] p-2.5 overflow-hidden shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] font-bold text-[#D97706]">
              <span>WEEK 04 MATRIX</span>
              <span>28 HRS</span>
            </div>
            <div className="grid grid-cols-4 gap-1 text-[8px] text-center font-mono">
              <div className="bg-amber-100 text-amber-900 p-1 rounded">
                MON
                <br />
                4h Math
              </div>
              <div className="bg-white border border-[#DFE4F2] text-[#080909] p-1 rounded">
                TUE
                <br />
                3h Phys
              </div>
              <div className="bg-amber-100 text-amber-900 p-1 rounded">
                WED
                <br />
                5h Chem
              </div>
              <div className="bg-white border border-[#DFE4F2] text-[#080909] p-1 rounded">
                THU
                <br />
                4h Bio
              </div>
            </div>
            <div className="h-1 bg-[#D97706] rounded-full w-2/3" />
          </div>
        );

      case "ocr":
        return (
          <div className="relative w-full h-32 bg-[#0F172A] text-teal-400 rounded-2xl border border-slate-800 p-3 overflow-hidden shadow-sm flex flex-col justify-between font-mono">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-teal-300">SCANNER_READY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
            </div>
            <div className="text-[10px] text-slate-300 line-clamp-2">
              [EXTRACTED] "Theorem 4.1: If f is continuous on [a,b]..."
            </div>
            <div className="flex items-center justify-between text-[9px] text-teal-300">
              <span>99.2% Accuracy</span>
              <span className="bg-teal-900/60 px-1.5 py-0.5 rounded text-white font-bold">
                OCR ✓
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const faqs = [
    {
      q: "Are all 10 tools functional and free to use?",
      a: "Yes, absolutely. All 10 tools are production-ready student workspaces with live AI processing, zero paywalls, zero token subscriptions, and immediate exports.",
    },
    {
      q: "How does the AI Resume Builder generate ATS-compliant PDFs?",
      a: "The Resume Builder employs standard typography grids, ATS parseable headings, and direct vector PDF generation so no text gets rasterized into an image. It passes automated applicant tracking scanners effortlessly.",
    },
    {
      q: "Can I upload photos of handwritten notes for the OCR Summarizer?",
      a: "Yes! You can take a photo of whiteboard equations or lecture notes, upload it in JPG/PNG/WebP format, inspect the extracted text, and generate a concise revision breakdown.",
    },
    {
      q: "How does the Google Sheets integration work?",
      a: "You can hook up any Google Apps Script Web App URL to use Google Sheets as a live zero-maintenance database. Read rows, edit student records, and generate AI insights on your live spreadsheet data.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen text-[#080909]">
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,rgba(109,94,252,0.18),transparent_50%)]" />
        <div className="absolute -left-24 top-32 h-[380px] w-[380px] rounded-full bg-[#7C3AED]/10 blur-3xl" />
        <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-[#38bdf8]/10 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="edu-landing-panel rounded-[34px] p-5 sm:p-7 lg:p-8 lg:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-8 lg:gap-10 items-center">
              <div className="space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dfe7ff] bg-[#f5f3ff] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6d5efc]">
                  <span className="h-2 w-2 rounded-full bg-[#6d5efc] shadow-[0_0_16px_rgba(109,94,252,0.7)]" />
                  AI Learning Studio
                </div>

                <div className="space-y-5">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-[-0.06em] text-[#0f172a] leading-[0.92] font-display">
                    Learn with
                    <span className="block text-[#6d5efc]">clarity.</span>
                    <span className="block text-[#0f172a]">Build with</span>
                    <span className="edu-gradient-text block">AI speed.</span>
                  </h1>
                  <p className="max-w-xl text-base sm:text-lg text-[#475569] leading-relaxed">
                    Turn notes, doubts, presentations, quizzes, and study plans into clean outputs with a complete toolkit built for modern learning.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#tools"
                    className="edu-button-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200"
                  >
                    Explore tools
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    to="/how-it-works"
                    className="edu-button-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200"
                  >
                    How it works
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-3 max-w-lg pt-1">
                  {[
                    { value: '10', label: 'AI tools' },
                    { value: '100%', label: 'Free access' },
                    { value: 'Instant', label: 'Outputs' }
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[#dfe7ff] bg-white/80 px-3 py-4 shadow-sm">
                      <div className="text-xl sm:text-2xl font-black text-[#0f172a] font-display">{item.value}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#64748b]">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-[#7C3AED]/20 via-[#38bdf8]/15 to-[#ec4899]/20 blur-2xl" />
                <div className="edu-grid-pattern relative rounded-[30px] border border-[#dfe7ff] bg-[#f8faff] p-4 sm:p-5 shadow-[0_26px_70px_rgba(15,23,42,0.08)]">
                  <div className="rounded-[26px] bg-gradient-to-br from-[#0f172a] via-[#1f1b4f] to-[#6d5efc] p-4 text-white shadow-[0_30px_80px_rgba(109,94,252,0.35)]">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-violet-200">Workspace</div>
                        <div className="mt-1 text-xl font-black">Edu AI Suite</div>
                      </div>
                      <div className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-100">
                        live
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {[
                        { name: 'Resume Builder', tone: 'bg-violet-500/20 text-violet-100', stat: 'ATS 98%' },
                        { name: 'Notes Generator', tone: 'bg-sky-500/20 text-sky-100', stat: '6 topics' },
                        { name: 'Study Planner', tone: 'bg-emerald-500/20 text-emerald-100', stat: '3x weekly' }
                      ].map((item) => (
                        <div key={item.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2.5">
                          <div>
                            <div className="text-xs font-semibold text-slate-200">{item.name}</div>
                          </div>
                          <div className={`rounded-full px-2 py-1 text-[10px] font-bold ${item.tone}`}>{item.stat}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-[#f8faff] p-3 text-[#0f172a]">
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
                        <span>Today’s output</span>
                        <span>AI summary</span>
                      </div>
                      <div className="mt-2 text-sm font-black">Research plan synced and ready to export.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Study smarter', text: 'Convert lectures, PDFs, and notes into revision-ready summaries in minutes.', accent: 'from-[#F5F3FF] via-[#EDE9FE] to-[#DDD6FE]', tint: 'text-[#6d5efc]' },
              { title: 'Learn clearly', text: 'Get step-by-step explanations, quizzes, and flashcards that reinforce understanding.', accent: 'from-[#E0F2FE] via-[#DBEAFE] to-[#C7D2FE]', tint: 'text-[#2563eb]' },
              { title: 'Create faster', text: 'Generate resumes, slides, and study plans that are polished and shareable.', accent: 'from-[#FCE7F3] via-[#FDE68A] to-[#FECACA]', tint: 'text-[#ec4899]' }
            ].map((card) => (
              <div key={card.title} className={`rounded-[28px] border border-[#dfe7ff] bg-gradient-to-br ${card.accent} p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)]`}>
                <div className={`inline-flex items-center rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${card.tint}`}>
                  Spotlight
                </div>
                <h3 className="mt-5 text-2xl font-black text-[#0f172a] font-display tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tools"
        className="py-20 relative overflow-hidden border-t border-[#dfe7ff] bg-white/50"
      >
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#f4f5ff] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dfe7ff] bg-[#f5f3ff] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6d5efc]">
                <Sparkles className="w-3.5 h-3.5" />
                One workspace, 10 tools
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-[-0.05em] font-display leading-none">
                Built for focus, speed, and real outputs.
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#0f172a] border border-[#dfe7ff] rounded-full bg-white px-4 py-2.5 shadow-sm">
              Browse the stack
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {tools.map((tool, idx) => {
              const isWide = idx === 0 || idx === 4;

              return (
                <Link
                  key={tool.number}
                  to={tool.route}
                  className={`group relative overflow-hidden rounded-[28px] border p-5 sm:p-6 text-left shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)] ${
                    isWide ? 'xl:col-span-2' : ''
                  }`}
                  style={{
                    borderColor: `${tool.accent}45`,
                    background: `linear-gradient(145deg, ${tool.accent}1C 0%, rgba(255,255,255,0.96) 58%)`
                  }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: `linear-gradient(90deg, ${tool.accent}, ${tool.accent}55)` }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at top left, ${tool.accent}33 0%, transparent 50%)`
                    }}
                  />

                  <div className="relative z-10 space-y-5">
                    <div className="flex items-center justify-between">
                      <span
                        className="font-mono text-[11px] font-black px-2.5 py-1 rounded-full border"
                        style={{ color: tool.accent, backgroundColor: `${tool.accent}18`, borderColor: `${tool.accent}35` }}
                      >
                        {tool.number}
                      </span>
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.14em]"
                        style={{ color: tool.accent }}
                      >
                        Workspace
                      </span>
                    </div>

                    <div className="w-full">{renderToolVisual(tool.visualType, tool.accent)}</div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] font-display">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-[#475569] leading-relaxed">{tool.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tool.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-[#dfe7ff] bg-[#f8faff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#475569]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#e2e8f0]">
                      <span className="text-sm font-bold" style={{ color: tool.accent }}>{tool.cta}</span>
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                        style={{ backgroundColor: tool.accent }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. EDITORIAL STORYTELLING: HOW IT WORKS */}
      <section className="py-20 border-t border-[#DFE4F2] bg-[#F0EEFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left space-y-3 mb-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
              <span>Simplicity & Speed</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#080909] tracking-tight font-display">
              From study material to mastery in three steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-3xl border border-[#DFE4F2] space-y-4 shadow-sm hover:border-[#080909]/30 transition-colors">
              <span className="w-10 h-10 rounded-2xl bg-[#7C3AED]/15 text-[#7C3AED] flex items-center justify-center font-black font-mono text-sm">
                01
              </span>
              <h3 className="text-xl font-black text-[#080909] font-display">
                Feed Your Input
              </h3>
              <p className="text-sm text-[#080909]/70 font-body leading-relaxed">
                Paste raw lecture paragraphs, upload notebook photos, enter
                chapter titles, or link a live Google Sheet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DFE4F2] space-y-4 shadow-sm hover:border-[#080909]/30 transition-colors">
              <span className="w-10 h-10 rounded-2xl bg-[#2563EB]/15 text-[#2563EB] flex items-center justify-center font-black font-mono text-sm">
                02
              </span>
              <h3 className="text-xl font-black text-[#080909] font-display">
                Intelligent AI Synthesis
              </h3>
              <p className="text-sm text-[#080909]/70 font-body leading-relaxed">
                Gemini processes your material through structured academic
                frameworks into notes, 3D flipcards, MCQs, or slide decks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DFE4F2] space-y-4 shadow-sm hover:border-[#080909]/30 transition-colors">
              <span className="w-10 h-10 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center font-black font-mono text-sm">
                03
              </span>
              <h3 className="text-xl font-black text-[#080909] font-display">
                Interact & Export
              </h3>
              <p className="text-sm text-[#080909]/70 font-body leading-relaxed">
                Test your memory, present live slides, download vector
                ATS-friendly PDFs, or copy formatted Markdown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 border-t border-[#DFE4F2] bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#7C3AED]">
              Questions & Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#080909] font-display">
              Everything you need to know.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#DFE4F2] rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 text-base font-bold text-[#080909] hover:text-[#7C3AED] transition-colors cursor-pointer"
                >
                  <span className="font-display">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#080909]/50 transition-transform ${
                      openFaq === idx ? "rotate-180 text-[#7C3AED]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-sm text-[#080909]/70 leading-relaxed font-body border-t border-[#DFE4F2]/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
