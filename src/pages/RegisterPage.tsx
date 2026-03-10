import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { KompassLogo } from "@/components/KompassLogo";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5" />
      </div>

      <div className="relative w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <KompassLogo size="lg" showText={false} className="mb-4" />
          <h1 className="text-2xl font-sora font-semibold text-foreground">KIIT Kompass</h1>
          <p className="text-sm text-muted-foreground font-inter mt-1">Create your account</p>
        </div>

        <div className="card-base p-7">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground font-inter tracking-wide uppercase">Full Name</label>
              <input
                type="text"
                placeholder="Aryan Kumar"
                className="h-10 w-full rounded-xl border border-input bg-muted/40 px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all font-inter"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground font-inter tracking-wide uppercase">Email Address</label>
              <input
                type="email"
                placeholder="you@kiit.ac.in"
                className="h-10 w-full rounded-xl border border-input bg-muted/40 px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all font-inter"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground font-inter tracking-wide uppercase">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="h-10 w-full rounded-xl border border-input bg-muted/40 px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all font-inter"
              />
            </div>

            <div className="rounded-xl bg-primary/5 border border-primary/20 px-4 py-3">
              <p className="text-xs text-muted-foreground font-inter text-center">
                Registration is disabled in this demo. Please{" "}
                <Link to="/signin" className="text-primary font-medium hover:underline">
                  sign in
                </Link>{" "}
                with demo credentials.
              </p>
            </div>

            <button
              disabled
              className="h-10 w-full rounded-xl gradient-primary text-primary-foreground text-sm font-semibold font-inter flex items-center justify-center opacity-40 cursor-not-allowed"
            >
              Create Account
            </button>

            <Link
              to="/signin"
              className="text-xs text-muted-foreground font-inter hover:text-foreground flex items-center justify-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
