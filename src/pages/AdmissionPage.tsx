import { CheckCircle, Circle, ArrowRight, ExternalLink, Info } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Online Registration",
    desc: "Fill the KIITEE application form on the official portal. Upload photo, signature, and documents.",
    date: "Nov 1 – Dec 15, 2024",
    status: "done",
    link: "#",
  },
  {
    step: 2,
    title: "Pay Application Fee",
    desc: "Pay the application fee of ₹1,500 via Net Banking, UPI, or Card.",
    date: "Nov 1 – Dec 15, 2024",
    status: "done",
    link: "#",
  },
  {
    step: 3,
    title: "Admit Card Download",
    desc: "Download your KIITEE admit card from the application portal once available.",
    date: "Jan 10, 2025",
    status: "active",
    link: "#",
  },
  {
    step: 4,
    title: "Entrance Examination",
    desc: "Appear for KIITEE exam at your designated centre. Carry Admit card + Government ID.",
    date: "Jan 20–25, 2025",
    status: "upcoming",
    link: "#",
  },
  {
    step: 5,
    title: "Result & Merit List",
    desc: "KIITEE results published. Check your rank and category in the merit list.",
    date: "Feb 10, 2025",
    status: "upcoming",
    link: "#",
  },
  {
    step: 6,
    title: "Counselling & Allotment",
    desc: "Fill seat preferences and participate in online counselling. Pay the seat acceptance fee.",
    date: "Feb 20 – Mar 5, 2025",
    status: "upcoming",
    link: "#",
  },
  {
    step: 7,
    title: "Reporting & Enrollment",
    desc: "Report to KIIT University campus with original documents to complete enrollment.",
    date: "Jul 2025",
    status: "upcoming",
    link: "#",
  },
];

const programs = [
  { name: "B.Tech (4 programs)", seats: "2,500", fee: "₹3.5L/yr", via: "KIITEE" },
  { name: "M.Tech", seats: "300", fee: "₹1.8L/yr", via: "GATE / KIITEE" },
  { name: "MBA", seats: "180", fee: "₹2.2L/yr", via: "CAT / MAT / XAT" },
  { name: "B.Sc. Nursing", seats: "120", fee: "₹1.6L/yr", via: "Direct" },
  { name: "Law (5-year)", seats: "200", fee: "₹2.0L/yr", via: "CLAT / Direct" },
  { name: "Architecture", seats: "80", fee: "₹2.5L/yr", via: "NATA" },
];

export default function AdmissionPage() {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto animate-fade-in">
      <div className="mb-6 md:mb-8">
        <p className="text-sm text-muted-foreground font-inter mb-1">Enrollment Guide</p>
        <h1 className="text-2xl md:text-3xl font-sora font-semibold text-foreground">
          Admission <span className="text-gradient">Process</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-base font-sora font-semibold text-foreground">Step-by-Step Timeline</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />

            <div className="flex flex-col gap-0">
              {steps.map((s, i) => (
                <div key={s.step} className="relative flex gap-5 pb-8 last:pb-0">
                  {/* Icon */}
                  <div className="relative z-10 shrink-0">
                    {s.status === "done" ? (
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-card">
                        <CheckCircle className="w-5 h-5 text-primary-foreground" />
                      </div>
                    ) : s.status === "active" ? (
                      <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-card animate-pulse-soft">
                        <Circle className="w-5 h-5 text-white fill-white/30" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-card border-2 border-border flex items-center justify-center">
                        <span className="text-xs font-sora font-semibold text-muted-foreground">{s.step}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 card-base p-5 ${s.status === "active" ? "border-amber-200 ring-1 ring-amber-200" : ""}`}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-sora font-semibold text-foreground">{s.title}</p>
                          {s.status === "active" && (
                            <span className="text-[10px] bg-amber-50 text-amber-600 font-medium px-2 py-0.5 rounded-full">Current</span>
                          )}
                          {s.status === "done" && (
                            <span className="text-[10px] bg-primary-muted text-primary font-medium px-2 py-0.5 rounded-full">Done</span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground font-inter">{s.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-[11px] text-muted-foreground font-inter">{s.date}</span>
                      <button className="flex items-center gap-1 text-[11px] text-primary font-medium hover:underline">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs sidebar */}
        <div>
          <h2 className="text-base font-sora font-semibold text-foreground mb-5">Programs Offered</h2>
          <div className="flex flex-col gap-3">
            {programs.map((p) => (
              <div key={p.name} className="card-base p-4">
                <p className="text-sm font-sora font-semibold text-foreground">{p.name}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground font-inter">
                  <span>{p.seats} seats</span>
                  <span>·</span>
                  <span className="text-primary font-medium">{p.fee}</span>
                </div>
                <span className="inline-block mt-2 text-[10px] bg-accent text-accent-foreground px-2 py-0.5 rounded-full">{p.via}</span>
              </div>
            ))}
          </div>

          <div className="card-base mt-4 p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-primary" />
              <p className="text-sm font-sora font-medium text-foreground">Important</p>
            </div>
            <p className="text-xs text-muted-foreground font-inter leading-relaxed">
              Reservation of seats as per Govt. norms. SC/ST/OBC-NC and PwD categories eligible for fee concession.
            </p>
            <button className="mt-3 flex items-center gap-1.5 text-xs text-primary font-medium hover:underline">
              <ExternalLink className="w-3 h-3" /> Official Portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
