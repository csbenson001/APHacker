import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Brain,
  Target,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Zap,
  BarChart3,
} from "lucide-react";

/* ─── Nav ─── */
function Nav() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="flex items-center justify-between rounded-full bg-[#001a3a]/80 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-2xl">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-ver2.png" alt="APHacker" width={28} height={28} />
          <span className="text-lg font-bold text-white tracking-tight">
            APHacker
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#stats" className="hover:text-white transition-colors">
            Results
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="rounded-full bg-[#a3e635] px-5 py-2 text-sm font-semibold text-[#001a3a] hover:bg-[#bef264] transition-colors shadow-lg shadow-[#a3e635]/20"
          >
            Try for free
          </Link>
        </div>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000d1f] via-[#00356B] to-[#001a3a]" />
      {/* Mesh gradient glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#4A90D9]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#a3e635]/10 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/10 px-4 py-1.5 text-sm text-[#a3e635] mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered AP Prep
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Ace your AP exams{" "}
            <span className="text-[#a3e635]">with AI</span>
          </h1>

          <p className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed">
            Personalized study plans, AI-powered tutoring, and adaptive practice
            that helps you score higher on every AP exam.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 rounded-full bg-[#a3e635] px-8 py-3.5 text-base font-semibold text-[#001a3a] hover:bg-[#bef264] transition-all shadow-xl shadow-[#a3e635]/25 hover:shadow-[#a3e635]/40"
            >
              Start studying free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-medium text-white hover:bg-white/5 transition-colors"
            >
              See how it works
            </a>
          </div>

          <div className="flex items-center gap-6 mt-10 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#a3e635]" />
              Free to start
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#a3e635]" />
              No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#a3e635]" />
              All AP subjects
            </span>
          </div>
        </div>

        {/* App Preview Card */}
        <div className="hidden md:block relative">
          <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 shadow-2xl">
            <div className="rounded-xl bg-[#001233] p-5 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#a3e635]/20 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-[#a3e635]" />
                </div>
                <span className="text-white font-medium">Your Study Plan</span>
              </div>

              {[
                { subject: "AP Calculus BC", progress: 78, color: "#a3e635" },
                { subject: "AP Physics C", progress: 62, color: "#4A90D9" },
                { subject: "AP US History", progress: 85, color: "#f472b6" },
              ].map((item) => (
                <div key={item.subject} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">{item.subject}</span>
                    <span className="text-white/50">{item.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: `${item.progress}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
                <span className="text-xs text-white/40">
                  AI analyzing your progress...
                </span>
              </div>
            </div>
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-4 -left-6 rounded-xl bg-white shadow-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#a3e635]/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-[#00356B]" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Score Improvement</p>
              <p className="text-lg font-bold text-[#00356B]">+1.2 points</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─── */
const features = [
  {
    icon: Brain,
    title: "AI Tutor",
    description:
      "Chat with an AI that understands AP curriculum inside and out. Get instant explanations for any concept.",
    color: "#a3e635",
  },
  {
    icon: Target,
    title: "Adaptive Practice",
    description:
      "Questions that adjust to your level. Focus on your weak areas and build mastery where it counts.",
    color: "#4A90D9",
  },
  {
    icon: BookOpen,
    title: "Smart Study Plans",
    description:
      "Upload your materials and get a personalized study schedule designed to maximize your score.",
    color: "#f472b6",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "Track your improvement with detailed analytics. See exactly where you stand before exam day.",
    color: "#fb923c",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description:
      "Get detailed explanations for every question. Understand why answers are right or wrong.",
    color: "#a78bfa",
  },
  {
    icon: GraduationCap,
    title: "All AP Subjects",
    description:
      "From Calculus to US History, we cover every AP exam with subject-specific AI tutoring.",
    color: "#22d3ee",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#00356B]/5 px-4 py-1.5 text-sm font-medium text-[#00356B] mb-4">
            <Sparkles className="w-4 h-4" />
            Features
          </span>
          <h2 className="text-4xl font-bold text-[#001a3a] tracking-tight mb-4">
            Everything you need to score a 5
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            AI-powered tools designed specifically for AP exam preparation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: f.color + "15" }}
              >
                <f.icon className="w-6 h-6" style={{ color: f.color }} />
              </div>
              <h3 className="text-lg font-semibold text-[#001a3a] mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Upload your materials",
      description:
        "Drop in your textbooks, notes, or past exams. Our AI analyzes everything to build your knowledge profile.",
    },
    {
      step: "02",
      title: "Get your AI study plan",
      description:
        "Receive a personalized plan that targets your weak areas and optimizes your study time for maximum score gains.",
    },
    {
      step: "03",
      title: "Practice & improve",
      description:
        "Work through adaptive questions, chat with your AI tutor, and watch your predicted score climb.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#00356B]/5 px-4 py-1.5 text-sm font-medium text-[#00356B] mb-4">
            How It Works
          </span>
          <h2 className="text-4xl font-bold text-[#001a3a] tracking-tight mb-4">
            Three steps to a higher score
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#00356B]/20 to-transparent" />
              )}
              <div className="text-5xl font-bold text-[#00356B]/10 mb-4">
                {s.step}
              </div>
              <h3 className="text-xl font-semibold text-[#001a3a] mb-3">
                {s.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats ─── */
function Stats() {
  const stats = [
    { value: "1.2+", label: "Avg. score improvement", suffix: "pts" },
    { value: "94", label: "Students scored 4 or 5", suffix: "%" },
    { value: "50K", label: "Practice questions", suffix: "+" },
    { value: "38", label: "AP subjects covered", suffix: "" },
  ];

  return (
    <section id="stats" className="py-20 bg-[#00356B]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {s.value}
                <span className="text-[#a3e635]">{s.suffix}</span>
              </div>
              <p className="text-white/50 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#000d1f] via-[#00356B] to-[#001a3a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a3e635]/5 rounded-full blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
          Ready to ace your AP exams?
        </h2>
        <p className="text-lg text-white/50 mb-10 max-w-xl mx-auto">
          Join thousands of students already using AI to study smarter and score
          higher.
        </p>
        <Link
          href="/sign-up"
          className="inline-flex items-center gap-2 rounded-full bg-[#a3e635] px-10 py-4 text-lg font-semibold text-[#001a3a] hover:bg-[#bef264] transition-all shadow-xl shadow-[#a3e635]/25"
        >
          Get started for free
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[#000d1f] border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-ver2.png"
              alt="APHacker"
              width={24}
              height={24}
            />
            <span className="text-white font-semibold">APHacker</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/sign-in" className="hover:text-white/70 transition">
              Login
            </Link>
            <Link href="/sign-up" className="hover:text-white/70 transition">
              Sign Up
            </Link>
            <a href="#features" className="hover:text-white/70 transition">
              Features
            </a>
          </div>
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} APHacker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <CTASection />
      <Footer />
    </div>
  );
}
