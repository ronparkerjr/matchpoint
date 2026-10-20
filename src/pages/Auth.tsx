import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) navigate("/admin", { replace: true });
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/admin", { replace: true });
    });
    return () => data.subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: { emailRedirectTo: window.location.origin + "/admin" },
        });
        if (error) throw error;
        toast.success("Account created. You're signed in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });
        if (error) throw error;
        toast.success("Signed in.");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (!email.trim()) {
      toast.error("Enter your email address first.");
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: window.location.origin + "/reset-password",
    });
    if (error) toast.error(error.message);
    else toast.success("Password reset email sent.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-semibold leading-none">Staff &amp; Admin Access</h1>
          <CardDescription>
            {mode === "signin"
              ? "Sign in with your Match Point email address."
              : "Create your account with your Match Point email address."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
            </Button>
          </form>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <button
              type="button"
              className="text-primary underline underline-offset-4"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            >
              {mode === "signin" ? "Need an account? Create one" : "Already have an account? Sign in"}
            </button>
            <Link to="/" className="text-muted-foreground underline underline-offset-4 text-center">
              Return to Match Point
            </Link>
            <button
              type="button"
              className="text-muted-foreground underline underline-offset-4 text-left"
              onClick={handleReset}
            >
              Forgot your password?
            </button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default Auth;
