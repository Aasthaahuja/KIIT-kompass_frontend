import { useUser } from "@clerk/clerk-react";
import { BookOpen, FileText, Users, Bell, TrendingUp, Clock, Star, Zap, Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroWidget from "@/assets/hero-widget.jpg";

const quickLinks = [
  { icon: FileText, label: "PYQs", sub: "450+ papers", to: "/pyq", color: "bg-sage-100 text-sage-600" },
  { icon: BookOpen, label: "Notes", sub: "12 subjects", to: "/notes", color: "bg-blue-50 text-blue-500" },
  { icon: Users, label: "Societies", sub: "28 clubs", to: "/societies", color: "bg-amber-50 text-amber-500" },
];

const recentActivity = [
  { icon: FileText, text: "DS Algo PYQ 2023 uploaded", time: "2h ago", dot: "bg-primary" },
  { icon: BookOpen, text: "Operating Systems notes added", time: "Yesterday", dot: "bg-blue-400" },
  { icon: Bell, text: "Admission deadline: Dec 10", time: "3d ago", dot: "bg-amber-400" },
  { icon: Users, text: "Robotics Club event announced", time: "4d ago", dot: "bg-rose-400" },
];

const stats = [
  { label: "Resources", value: "1,200+", icon: BookOpen, trend: "+12 this week" },
  { label: "Societies", value: "28", icon: Users, trend: "4 active events" },
  { label: "PYQ Papers", value: "450+", icon: FileText, trend: "+8 uploaded" },
  { label: "Avg Rating", value: "4.8★", icon: Star, trend: "from 300 reviews" },
];

export default function HomePage() {
  const { user } = useUser();
  const firstName = user?.name?.split(" ")[0] ?? "Student";

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto animate-fade-in">
      {/* Hero Section */}
      <div className="card-base p-5 md:p-8 mb-6 md:mb-8 relative overflow-hidden">
        {/* Subtle background layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/60 to-primary-muted/30 rounded-2xl" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4 font-inter">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Semester 5 · B.Tech CSE
          </span>
          <h1 className="text-2xl md:text-3xl font-sora font-semibold text-foreground mb-2 leading-tight">
            Welcome to <span className="text-gradient">KIIT Kompass</span>
          </h1>
          <p className="text-muted-foreground font-inter text-sm mb-6">
            Your centralized academic compass at KIIT
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              to="/pyq"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-primary/90 active:scale-[0.98] transition-all shadow-card font-inter"
            >
              <FileText className="w-4 h-4" />
              Explore PYQs
            </Link>
            <Link
              to="/chatbot"
              className="inline-flex items-center gap-2 bg-card border border-border text-foreground text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-muted/60 active:scale-[0.98] transition-all shadow-card font-inter"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              Open Chatbot
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-6 md:mb-8">
        <p className="text-sm text-muted-foreground font-inter mb-1">Good morning 👋</p>
        <h2 className="text-xl md:text-2xl font-sora font-semibold text-foreground">
          Welcome back, <span className="text-gradient">{firstName}</span>
        </h2>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        {stats.map((s) => (
          <div key={s.label} className="card-base p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 bg-primary-muted rounded-xl flex items-center justify-center">
                <s.icon className="w-4.5 h-4.5 text-primary" strokeWidth={2} />
              </div>
              <TrendingUp className="w-4 h-4 text-primary/50" />
            </div>
            <p className="text-2xl font-sora font-semibold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground font-inter mt-0.5">{s.label}</p>
            <p className="text-[11px] text-primary font-inter mt-1">{s.trend}</p>
          </div>
        ))}
      </div>

      {/* Quick links + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Access */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-sora font-semibold text-foreground">Quick Access</h2>
            <Zap className="w-4 h-4 text-primary" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
            {quickLinks.map((q) => (
              <Link key={q.label} to={q.to} className="card-base p-5 flex flex-col items-center text-center gap-3 group cursor-pointer">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${q.color}`}>
                  <q.icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-sm font-sora font-semibold text-foreground">{q.label}</p>
                  <p className="text-xs text-muted-foreground font-inter mt-0.5">{q.sub}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Upcoming widget */}
          <div className="card-base p-5">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-sora font-semibold text-foreground">Upcoming</h3>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { title: "End Sem Exams", date: "Dec 10–20", badge: "Exams", color: "bg-rose-50 text-rose-500" },
                { title: "Admission Portal Opens", date: "Nov 28", badge: "Admission", color: "bg-amber-50 text-amber-500" },
                { title: "Robotics Club Hackathon", date: "Dec 3", badge: "Event", color: "bg-primary-muted text-primary" },
              ].map((ev) => (
                <div key={ev.title} className="flex items-center gap-4 p-3 rounded-xl bg-muted/60">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{ev.title}</p>
                    <p className="text-xs text-muted-foreground font-inter mt-0.5">{ev.date}</p>
                  </div>
                  <span className={`text-[11px] font-medium px-2 py-1 rounded-full ${ev.color}`}>{ev.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity feed */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-sora font-semibold text-foreground">Recent</h2>
            <Clock className="w-4 h-4 text-primary" />
          </div>
          <div className="card-base p-5 h-fit">
            <div className="flex flex-col gap-4">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${a.dot}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground leading-snug">{a.text}</p>
                    <p className="text-xs text-muted-foreground font-inter mt-1">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini chatbot cta */}
          <Link to="/chatbot" className="card-base block mt-4 p-5 gradient-primary text-primary-foreground">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <p className="font-sora font-semibold text-sm">Ask Kompass AI</p>
            </div>
            <p className="text-xs text-primary-foreground/70 font-inter">Get instant answers about exams, admission, and campus life</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
