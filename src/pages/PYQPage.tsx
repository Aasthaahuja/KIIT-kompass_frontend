import { useState } from "react";
import { Search, ChevronDown, ChevronUp, Download, Eye, Filter } from "lucide-react";
import DownloadConfirmModal from "@/components/DownloadConfirmModal";

const subjects = ["All", "Data Structures", "Operating Systems", "DBMS", "Computer Networks", "TOC", "Software Engg", "Algorithms"];
const years = ["All Years", "2024", "2023", "2022", "2021", "2020", "2019"];
const semesters = ["All Sems", "Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"];

const papers = [
  { subject: "Data Structures", year: "2023", sem: "Sem 3", type: "End Sem", pages: 4, rating: 4.8, downloads: 1230 },
  { subject: "Operating Systems", year: "2023", sem: "Sem 5", type: "Mid Sem", pages: 2, rating: 4.6, downloads: 890 },
  { subject: "DBMS", year: "2022", sem: "Sem 5", type: "End Sem", pages: 4, rating: 4.7, downloads: 1045 },
  { subject: "Computer Networks", year: "2023", sem: "Sem 6", type: "End Sem", pages: 3, rating: 4.5, downloads: 756 },
  { subject: "TOC", year: "2022", sem: "Sem 5", type: "End Sem", pages: 4, rating: 4.3, downloads: 612 },
  { subject: "Algorithms", year: "2023", sem: "Sem 4", type: "Mid Sem", pages: 2, rating: 4.9, downloads: 1380 },
  { subject: "Software Engg", year: "2021", sem: "Sem 6", type: "End Sem", pages: 4, rating: 4.2, downloads: 480 },
  { subject: "Data Structures", year: "2022", sem: "Sem 3", type: "Mid Sem", pages: 2, rating: 4.7, downloads: 920 },
  { subject: "DBMS", year: "2021", sem: "Sem 5", type: "Mid Sem", pages: 3, rating: 4.4, downloads: 670 },
];

export default function PYQPage() {
  const [search, setSearch] = useState("");
  const [activeSubject, setActiveSubject] = useState("All");
  const [activeYear, setActiveYear] = useState("All Years");
  const [activeSem, setActiveSem] = useState("All Sems");
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [downloadTarget, setDownloadTarget] = useState<typeof papers[0] | null>(null);
  const filtered = papers.filter((p) => {
    const matchSearch = p.subject.toLowerCase().includes(search.toLowerCase());
    const matchSubject = activeSubject === "All" || p.subject === activeSubject;
    const matchYear = activeYear === "All Years" || p.year === activeYear;
    const matchSem = activeSem === "All Sems" || p.sem === activeSem;
    return matchSearch && matchSubject && matchYear && matchSem;
  });

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8">
        <p className="text-sm text-muted-foreground font-inter mb-1">Academic Resources</p>
        <h1 className="text-2xl md:text-3xl font-sora font-semibold text-foreground">
          Previous Year <span className="text-gradient">Questions</span>
        </h1>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by subject name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-card text-sm font-inter text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-card"
        />
      </div>

      {/* Collapsible filters */}
      <div className="card-base mb-6 overflow-hidden">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-foreground font-sora"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-primary" />
            Filters
            <span className="bg-primary-muted text-primary text-xs font-medium px-2 py-0.5 rounded-full">
              {[activeSubject !== "All", activeYear !== "All Years", activeSem !== "All Sems"].filter(Boolean).length} active
            </span>
          </div>
          {filtersOpen ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </button>
        {filtersOpen && (
          <div className="px-5 pb-5 border-t border-border animate-accordion-down">
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2 font-inter uppercase tracking-wide">Subject</p>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((s) => (
                    <button
                      key={s}
                      onClick={() => setActiveSubject(s)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium font-inter transition-all ${
                        activeSubject === s ? "bg-primary text-primary-foreground shadow-card" : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2 font-inter uppercase tracking-wide">Year</p>
                  <div className="flex flex-wrap gap-2">
                    {years.map((y) => (
                      <button
                        key={y}
                        onClick={() => setActiveYear(y)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium font-inter transition-all ${
                          activeYear === y ? "bg-primary text-primary-foreground shadow-card" : "bg-muted text-muted-foreground hover:bg-accent"
                        }`}
                      >
                        {y}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2 font-inter uppercase tracking-wide">Semester</p>
                  <div className="flex flex-wrap gap-2">
                    {semesters.map((s) => (
                      <button
                        key={s}
                        onClick={() => setActiveSem(s)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium font-inter transition-all ${
                          activeSem === s ? "bg-primary text-primary-foreground shadow-card" : "bg-muted text-muted-foreground hover:bg-accent"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results count */}
      <p className="text-xs text-muted-foreground font-inter mb-4">{filtered.length} papers found</p>

      {/* Paper grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <div key={i} className="card-base p-5 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p className="text-sm font-sora font-semibold text-foreground leading-snug">{p.subject}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[11px] bg-primary-muted text-primary font-medium px-2 py-0.5 rounded-full">{p.year}</span>
                  <span className="text-[11px] bg-muted text-muted-foreground font-medium px-2 py-0.5 rounded-full">{p.sem}</span>
                </div>
              </div>
              <span className={`text-[10px] font-medium px-2 py-1 rounded-lg shrink-0 ${p.type === "End Sem" ? "bg-rose-50 text-rose-500" : "bg-amber-50 text-amber-500"}`}>
                {p.type}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground font-inter">
              <span>{p.pages} pages</span>
              <span>⭐ {p.rating}</span>
              <span>{p.downloads.toLocaleString()} ↓</span>
            </div>

            <div className="flex gap-2 mt-auto">
              <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-muted text-muted-foreground text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-all">
                <Eye className="w-3.5 h-3.5" /> Preview
              </button>
              <button
                onClick={() => setDownloadTarget(p)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-all shadow-card"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
          </div>
        ))}
      </div>

      <DownloadConfirmModal
        open={!!downloadTarget}
        onClose={() => setDownloadTarget(null)}
        onConfirm={() => console.log("Downloading:", downloadTarget?.subject)}
        subject={downloadTarget?.subject ?? ""}
        details={downloadTarget ? [
          { label: "Year", value: downloadTarget.year },
          { label: "Semester", value: downloadTarget.sem },
          { label: "Type", value: downloadTarget.type },
          { label: "Pages", value: `${downloadTarget.pages} pages` },
        ] : []}
      />
    </div>
  );
}
