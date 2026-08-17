import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { subscribeToNewsletter } from "@/lib/beehiiv.functions";

type Props = {
  id?: string;
  size?: "default" | "large";
  hint?: string;
};

export function SubscribeForm({ id = "ddp-email", size = "default", hint }: Props) {
  const subscribe = useServerFn(subscribeToNewsletter);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("error");
      setMessage("Email no válido");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await subscribe({ data: { email: email.trim() } });
      setStatus(res.ok ? "ok" : "error");
      setMessage(res.message);
      if (res.ok) setEmail("");
    } catch {
      setStatus("error");
      setMessage("No hemos podido suscribirte. Inténtalo de nuevo.");
    }
  };

  if (status === "ok") {
    return (
      <p className="font-mono text-2xs uppercase tracking-label">{message}</p>
    );
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        className={
          size === "large"
            ? "flex flex-col gap-6 sm:flex-row sm:items-end"
            : "flex flex-col gap-6 sm:flex-row sm:items-end"
        }
      >
        <div className="flex-1">
          <label htmlFor={id} className="mono-label">
            Correo
          </label>
          <input
            id={id}
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="nombre@empresa.com"
            className={`input-line mt-2 ${size === "large" ? "text-lg" : ""}`}
            required
          />
        </div>
        <button type="submit" className="btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Enviando…" : "Suscribirse"}
        </button>
      </form>
      <p className="mt-4 font-mono text-2xs uppercase tracking-label text-muted-foreground">
        {status === "error" ? (
          <span className="text-signal">{message}</span>
        ) : (
          hint ?? "Un envío por episodio."
        )}
      </p>
    </>
  );
}