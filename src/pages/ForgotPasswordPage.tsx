import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { KompassLogo } from "@/components/KompassLogo";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  };

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
          <p className="text-sm text-muted-foreground font-inter mt-1">Reset your password</p>
        </div>

        <div className="card-base p-7">
          {sent ? (
            <div className="flex flex-col items-center text-center gap-4 py-2">
              <div className="w-12 h-12 rounded-full bg-primary-muted flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-sora font-semibold text-foreground">Check your email</p>
                <p className="text-xs text-muted-foreground font-inter mt-1 leading-relaxed">
                  If an account exists for <span className="text-foreground font-medium">{email}</span>, a password reset link has been sent.
                </p>
              </div>
              <Link
                to="/signin"
                className="text-xs text-primary font-inter hover:underline flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Sign In
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <p className="text-xs text-muted-foreground font-inter leading-relaxed mb-4">
                  Enter your registered email address and we'll send you a password reset link.
                </p>
                <label className="text-xs font-medium text-foreground font-inter tracking-wide uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="you@kiit.ac.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1.5 h-10 w-full rounded-xl border border-input bg-muted/40 px-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all font-inter"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="h-10 w-full rounded-xl gradient-primary text-primary-foreground text-sm font-semibold font-inter flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </button>

              <Link
                to="/signin"
                className="text-xs text-muted-foreground font-inter hover:text-foreground flex items-center justify-center gap-1 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Sign In
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
