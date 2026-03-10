import { Download, ExternalLink, BookMarked, Award, Building, Users, Globe } from "lucide-react";

const highlights = [
  { icon: Award, label: "NAAC Grade", value: "A++", sub: "4th Cycle" },
  { icon: Building, label: "Established", value: "1992", sub: "Bhubaneswar, Odisha" },
  { icon: Users, label: "Students", value: "30,000+", sub: "from 50+ countries" },
  { icon: Globe, label: "NIRF Ranking", value: "Top 10", sub: "Among private universities" },
];

const departments = [
  {
    name: "School of Computer Engineering",
    programs: ["B.Tech CSE", "B.Tech IT", "M.Tech CSE", "Ph.D. CSE"],
    color: "bg-sage-100 text-sage-600",
  },
  {
    name: "School of Electronics Engineering",
    programs: ["B.Tech ECE", "B.Tech EEE", "M.Tech VLSI", "Ph.D. Electronics"],
    color: "bg-blue-50 text-blue-500",
  },
  {
    name: "School of Mechanical Engineering",
    programs: ["B.Tech Mechanical", "B.Tech Aerospace", "M.Tech Thermal"],
    color: "bg-amber-50 text-amber-500",
  },
  {
    name: "School of Biotechnology",
    programs: ["B.Tech Biotech", "M.Tech Biotech", "B.Sc Biotech", "Ph.D. Biotech"],
    color: "bg-rose-50 text-rose-500",
  },
  {
    name: "School of Law",
    programs: ["BA.LLB (5yr)", "BBA.LLB (5yr)", "LLM", "Ph.D. Law"],
    color: "bg-violet-50 text-violet-500",
  },
  {
    name: "School of Management",
    programs: ["MBA", "MBA (HR)", "Ph.D. Management"],
    color: "bg-teal-50 text-teal-500",
  },
];

const brochureLinks = [
  { label: "B.Tech Brochure 2025", size: "3.2 MB" },
  { label: "M.Tech Brochure 2025", size: "2.1 MB" },
  { label: "MBA Programme Guide", size: "1.8 MB" },
  { label: "PhD Prospectus", size: "2.5 MB" },
  { label: "Campus Life Magazine", size: "8.4 MB" },
];

export default function BrochurePage() {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8">
        <p className="text-sm text-muted-foreground font-inter mb-1">University Overview</p>
        <h1 className="text-2xl md:text-3xl font-sora font-semibold text-foreground">
          Academic <span className="text-gradient">Brochure</span>
        </h1>
      </div>

      {/* Highlight stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
        {highlights.map((h) => (
          <div key={h.label} className="card-base p-5 text-center">
            <div className="w-10 h-10 bg-primary-muted rounded-xl flex items-center justify-center mx-auto mb-3">
              <h.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
            </div>
            <p className="text-xl font-sora font-bold text-foreground">{h.value}</p>
            <p className="text-xs font-medium text-foreground mt-0.5">{h.label}</p>
            <p className="text-[11px] text-muted-foreground font-inter mt-0.5">{h.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {/* Schools & Departments */}
        <div className="lg:col-span-2">
          <h2 className="text-base font-sora font-semibold text-foreground mb-5">Schools & Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {departments.map((d) => (
              <div key={d.name} className="card-base p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${d.color}`}>
                    <BookMarked className="w-4 h-4" strokeWidth={1.8} />
                  </div>
                  <p className="text-sm font-sora font-semibold text-foreground leading-snug">{d.name}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {d.programs.map((p) => (
                    <span key={p} className="text-[11px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-inter">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloads */}
        <div>
          <h2 className="text-base font-sora font-semibold text-foreground mb-5">Downloads</h2>
          <div className="flex flex-col gap-3">
            {brochureLinks.map((b) => (
              <div key={b.label} className="card-base p-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-primary-muted rounded-xl flex items-center justify-center shrink-0">
                  <BookMarked className="w-4 h-4 text-primary" strokeWidth={1.8} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{b.label}</p>
                  <p className="text-xs text-muted-foreground font-inter">PDF · {b.size}</p>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="card-base mt-4 p-4 gradient-primary text-primary-foreground">
            <p className="text-sm font-sora font-semibold mb-1">Visit Official Website</p>
            <p className="text-xs text-primary-foreground/70 font-inter mb-3">For latest updates, fee structures, and admission notices.</p>
            <button className="flex items-center gap-2 text-xs font-medium bg-primary-foreground/20 hover:bg-primary-foreground/30 px-4 py-2 rounded-xl transition-all">
              <ExternalLink className="w-3.5 h-3.5" /> kiit.ac.in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
