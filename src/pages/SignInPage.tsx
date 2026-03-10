import { SignIn } from "@clerk/clerk-react";
import { KompassLogo } from "@/components/KompassLogo";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5" />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <KompassLogo size="lg" showText={false} className="mb-3" />
          <h1 className="text-2xl font-sora font-semibold text-foreground">
            KIIT Kompass
          </h1>
          <p className="text-sm text-muted-foreground font-inter mt-1">
            Sign in to continue
          </p>
        </div>

        {/* Clerk Sign In */}
        <div className="card-base p-6">
          <SignIn
            path="/sign-in"
            routing="path"
            redirectUrl="/"
            appearance={{
              elements: {
                card: "shadow-none p-0",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                footer: "hidden",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}