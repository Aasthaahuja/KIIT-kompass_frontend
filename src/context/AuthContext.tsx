import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthUser {
  email: string;
  name: string;
}

interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<{ error: string | null }>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const MOCK_USERS: Record<string, { password: string; name: string }> = {
  "student@kiit.ac.in": { password: "kiit1234", name: "Aryan Kumar" },
  "demo@kiit.ac.in": { password: "demo1234", name: "Demo Student" },
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Restore session from localStorage
    const stored = localStorage.getItem("kiit_kompass_user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("kiit_kompass_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<{ error: string | null }> => {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));

    const match = MOCK_USERS[email.toLowerCase()];
    if (!match || match.password !== password) {
      return { error: "Invalid email or password." };
    }

    const authUser: AuthUser = { email: email.toLowerCase(), name: match.name };
    setUser(authUser);
    localStorage.setItem("kiit_kompass_user", JSON.stringify(authUser));
    return { error: null };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("kiit_kompass_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
