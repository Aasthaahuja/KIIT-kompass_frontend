import { useState } from "react";
import { Users, ArrowRight } from "lucide-react";
import techImg from "@/assets/society-tech.jpg";
import musicImg from "@/assets/society-music.jpg";
import sportsImg from "@/assets/society-sports.jpg";
import culturalImg from "@/assets/society-cultural.jpg";

const categories = ["All", "Technical", "Cultural", "Sports", "Literary", "Social"];

const societies = [
  {
    name: "Robotics & AI Club",
    category: "Technical",
    members: 340,
    desc: "Build, hack, and automate. From ML models to humanoid bots.",
    img: techImg,
    tag: "🤖",
    color: "from-sage-500/80",
  },
  {
    name: "Music Society",
    category: "Cultural",
    members: 210,
    desc: "Celebrate melodies — classical, indie, fusion. Annual fest performers.",
    img: musicImg,
    tag: "🎸",
    color: "from-violet-600/80",
  },
  {
    name: "Cricket Club",
    category: "Sports",
    members: 180,
    desc: "Compete in inter-university tournaments. National-level players.",
    img: sportsImg,
    tag: "🏏",
    color: "from-emerald-600/80",
  },
  {
    name: "Kalinga Cultural Society",
    category: "Cultural",
    members: 290,
    desc: "Heritage, dance, and drama. Bringing Odissi culture alive on campus.",
    img: culturalImg,
    tag: "💃",
    color: "from-rose-600/80",
  },
  {
    name: "Coding Club — K!Coders",
    category: "Technical",
    members: 420,
    desc: "CP, hackathons, and open source. Google, ICPC, Codeforces regs.",
    img: techImg,
    tag: "💻",
    color: "from-blue-600/80",
  },
  {
    name: "Literary Society",
    category: "Literary",
    members: 160,
    desc: "Debate, creative writing, poetry slams, and annual magazine.",
    img: musicImg,
    tag: "📖",
    color: "from-amber-600/80",
  },
  {
    name: "NSS — Social Service",
    category: "Social",
    members: 510,
    desc: "Community service, blood drives, and awareness campaigns.",
    img: sportsImg,
    tag: "❤️",
    color: "from-red-600/80",
  },
  {
    name: "Football Federation",
    category: "Sports",
    members: 200,
    desc: "Year-round practice, leagues, and inter-college tournaments.",
    img: culturalImg,
    tag: "⚽",
    color: "from-green-600/80",
  },
];

export default function SocietiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = societies.filter((s) => activeCategory === "All" || s.category === activeCategory);

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8">
        <p className="text-sm text-muted-foreground font-inter mb-1">Campus Life</p>
        <h1 className="text-2xl md:text-3xl font-sora font-semibold text-foreground">
          Student <span className="text-gradient">Societies</span>
        </h1>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium font-inter transition-all ${
              activeCategory === c
                ? "bg-primary text-primary-foreground shadow-card"
                : "bg-card text-muted-foreground border border-border hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Society card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {filtered.map((s, i) => (
          <div
            key={i}
            className="card-base overflow-hidden flex flex-col group cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={s.img}
                alt={s.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${s.color} to-transparent`} />
              <div className="absolute top-3 left-3">
                <span className="text-lg">{s.tag}</span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="text-[10px] bg-card/90 backdrop-blur-sm text-foreground font-medium px-2 py-1 rounded-full">
                  {s.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 gap-3">
              <div>
                <h3 className="text-sm font-sora font-semibold text-foreground">{s.name}</h3>
                <p className="text-xs text-muted-foreground font-inter mt-1 leading-relaxed">{s.desc}</p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-inter">
                  <Users className="w-3.5 h-3.5" />
                  <span>{s.members} members</span>
                </div>
                <button className="flex items-center gap-1.5 text-xs text-primary font-medium hover:gap-2.5 transition-all">
                  Join <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
