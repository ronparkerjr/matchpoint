import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Admin = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (!nextSession) navigate("/auth", { replace: true });
    });
    supabase.auth.getSession().then(({ data: { session: current } }) => {
      setSession(current);
      if (!current) navigate("/auth", { replace: true });
    });
    return () => data.subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (!session) return;
    let active = true;
    (async () => {
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id);
      if (!active) return;
      setIsAdmin(!!data?.some((r) => r.role === "admin"));
      setChecking(false);
    })();
    return () => {
      active = false;
    };
  }, [session]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  if (!session || checking) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">{session.user.email}</p>
          </div>
          <Button variant="outline" onClick={signOut}>
            Sign out
          </Button>
        </div>

        {isAdmin ? (
          <Card>
            <CardHeader>
              <CardTitle>Full administrator access</CardTitle>
              <CardDescription>
                You have complete access to every area of the Match Point site.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <Button asChild variant="secondary">
                <Link to="/">Home page</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/programs">Programs</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/leagues">Leagues</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/sponsors">Sponsors</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Account pending approval</CardTitle>
              <CardDescription>
                You are signed in, but this account does not have administrator access yet.
                Please contact operations@mpcolumbus.com.
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      </div>
    </main>
  );
};

export default Admin;
