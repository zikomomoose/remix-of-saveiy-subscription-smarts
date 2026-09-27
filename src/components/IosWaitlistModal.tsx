import { FormEvent, ReactNode, useState } from "react";
import { Apple, CheckCircle2, Loader2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { trackButtonClick } from "@/lib/analytics";

const FORMSPREE_URL = "https://formspree.io/f/xzddzddb";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Props = {
  location: string;
  trigger?: ReactNode;
  triggerClassName?: string;
  size?: "sm" | "md";
};

const IosWaitlistModal = ({ location, trigger, triggerClassName = "", size = "md" }: Props) => {
  const route = useLocation();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const pad = size === "sm" ? "px-5 py-3 text-[10px]" : "px-8 py-4 text-xs";

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    if (!EMAIL_PATTERN.test(normalizedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");
    const sourcePage = route.pathname.slice(0, 255) || "/";

    try {
      const [databaseResult, formspreeResult] = await Promise.all([
        supabase.from("ios_waitlist").insert({ email: normalizedEmail, source_page: sourcePage }),
        fetch(FORMSPREE_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email: normalizedEmail, source_page: sourcePage, waitlist: "iOS" }),
        }),
      ]);

      const isDuplicate = databaseResult.error?.code === "23505";
      if (databaseResult.error && !isDuplicate) throw databaseResult.error;
      if (!formspreeResult.ok) throw new Error("Form delivery failed");

      setSuccess(true);
      trackButtonClick("ios_waitlist_submit", location);
    } catch {
      setError("We couldn't add you right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(next) => { setOpen(next); if (!next) setError(""); }}>
      <DialogTrigger asChild onClick={() => trackButtonClick("ios_waitlist_open", location)}>
        {trigger ?? (
          <Button
            type="button"
            variant="outline"
            className={`h-auto rounded-full border-border bg-transparent ${pad} font-semibold uppercase tracking-[0.22em] ${triggerClassName}`}
          >
            <Apple size={size === "sm" ? 13 : 15} /> Join the iOS waitlist
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-md rounded-md border-border p-7 sm:p-8">
        {success ? (
          <div className="py-5 text-center" role="status">
            <CheckCircle2 className="mx-auto text-primary" size={38} />
            <DialogTitle className="mt-5 font-display text-3xl">You're on the list.</DialogTitle>
            <DialogDescription className="mt-3 leading-relaxed">
              We'll email you when Saveiy is ready for iPhone.
            </DialogDescription>
            <Button className="mt-7 rounded-full px-7" onClick={() => setOpen(false)}>Done</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">+ iOS access</p>
              <DialogTitle className="font-display text-3xl leading-tight">Join the iOS waitlist</DialogTitle>
              <DialogDescription className="leading-relaxed">
                Be first to know when Saveiy launches on the App Store.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="mt-3 space-y-3" noValidate>
              <label htmlFor={`ios-email-${location}`} className="sr-only">Email address</label>
              <Input
                id={`ios-email-${location}`}
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `ios-error-${location}` : undefined}
                className="h-12"
                required
              />
              {error && <p id={`ios-error-${location}`} className="text-sm text-destructive" role="alert">{error}</p>}
              <Button type="submit" className="h-12 w-full rounded-full uppercase tracking-[0.18em]" disabled={loading}>
                {loading ? <><Loader2 className="animate-spin" /> Joining…</> : "Join the waitlist"}
              </Button>
            </form>
            <p className="text-[11px] leading-relaxed text-muted-foreground">Only launch updates. No spam.</p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default IosWaitlistModal;