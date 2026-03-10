import { useState } from "react";
import { Search, Download, BookOpen, Clock, Star } from "lucide-react";

const categories = ["All", "CSE Core", "Mathematics", "Physics", "Electives", "Lab Manuals"];

const notes = [
  { subject: "Data Structures & Algorithms", category: "CSE Core", sem: "Sem 3", pages: 120, rating: 4.9, size: "8.2 MB", contributor: "Rahul M.", updated: "2 days ago", color: "bg-sage-100 text-sage-600" },
  { subject: "Operating Systems", category: "CSE Core", sem: "Sem 5", pages: 98, rating: 4.7, size: "6.1 MB", contributor: "Priya S.", updated: "1 week ago", color: "bg-blue-50 text-blue-500" },
  { subject: "Database Management Systems", category: "CSE Core", sem: "Sem 5", pages: 85, rating: 4.8, size: "5.5 MB", contributor: "Amit K.", updated: "3 days ago", color: "bg-violet-50 text-violet-500" },
  { subject: "Computer Networks", category: "CSE Core", sem: "Sem 6", pages: 110, rating: 4.6, size: "7.3 MB", contributor: "Sneha R.", updated: "5 days ago", color: "bg-amber-50 text-amber-500" },
  { subject: "Engineering Mathematics III", category: "Mathematics", sem: "Sem 3", pages: 75, rating: 4.5, size: "4.8 MB", contributor: "Dev P.", updated: "2 weeks ago", color: "bg-rose-50 text-rose-500" },
  { subject: "Theory of Computation", category: "CSE Core", sem: "Sem 5", pages: 65, rating: 4.4, size: "3.9 MB", contributor: "Karan T.", updated: "1 week ago", color: "bg-teal-50 text-teal-500" },
  { subject: "Software Engineering", category: "CSE Core", sem: "Sem 6", pages: 90, rating: 4.3, size: "5.2 MB", contributor: "Ananya B.", updated: "4 days ago", color: "bg-orange-50 text-orange-500" },
  { subject: "Physics Lab Manual", category: "Lab Manuals", sem: "Sem 2", pages: 45, rating: 4.2, size: "3.1 MB", contributor: "Lab Team", updated: "1 month ago", color: "bg-cyan-50 text-cyan-500" },
  { subject: "Machine Learning Elective", category: "Electives", sem: "Sem 7", pages: 140, rating: 4.9, size: "9.8 MB", contributor: "Prof. Sharma", updated: "1 day ago", color: "bg-indigo-50 text-indigo-500" },
];

export default function NotesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = notes.filter((n) => {
    const matchSearch = n.subject.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || n.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8">
        <p className="text-sm text-muted-foreground font-inter mb-1">Study Material</p>
        <h1 className="text-2xl md:text-3xl font-sora font-semibold text-foreground">
          Course <span className="text-gradient">Notes</span>
        </h1>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-card text-sm font-inter text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-card"
        />
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-7">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium font-inter transition-all ${
              activeCategory === c ? "bg-primary text-primary-foreground shadow-card" : "bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Notes grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((n, i) => (
          <div key={i} className="card-base p-5 flex flex-col gap-4">
            {/* Icon + subject */}
            <div className="flex items-start gap-3">
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 ${n.color}`}>
                <BookOpen className="w-5 h-5" strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-sora font-semibold text-foreground leading-snug">{n.subject}</p>
                <p className="text-xs text-muted-foreground font-inter mt-0.5">{n.sem}</p>
              </div>
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-muted-foreground font-inter">
              <span>{n.pages} pages</span>
              <span>{n.size}</span>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{n.rating}</span>
              </div>
            </div>

            {/* Contributor & time */}
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-inter border-t border-border pt-3">
              <div className="w-5 h-5 rounded-full bg-primary-muted flex items-center justify-center">
                <span className="text-[9px] font-semibold text-primary">{n.contributor[0]}</span>
              </div>
              <span>{n.contributor}</span>
              <span className="ml-auto flex items-center gap-1">
                <Clock className="w-3 h-3" /> {n.updated}
              </span>
            </div>

            <button className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-all shadow-card">
              <Download className="w-3.5 h-3.5" /> Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
