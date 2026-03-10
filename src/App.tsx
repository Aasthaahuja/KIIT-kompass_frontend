import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import { AppLayout } from "./components/layout/AppLayout";

import HomePage from "./pages/HomePage";
import PYQPage from "./pages/PYQPage";
import NotesPage from "./pages/NotesPage";
import AdmissionPage from "./pages/AdmissionPage";
import BrochurePage from "./pages/BrochurePage";
import SocietiesPage from "./pages/SocietiesPage";
import ChatbotPage from "./pages/ChatbotPage";
import SignInPage from "./pages/SignInPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Clerk Sign In */}
          <Route path="/sign-in" element={<SignInPage />} />

          {/* Protected App */}
          <Route
            element={
              <>
                <SignedIn>
                  <AppLayout />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/pyq" element={<PYQPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/brochure" element={<BrochurePage />} />
            <Route path="/societies" element={<SocietiesPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;