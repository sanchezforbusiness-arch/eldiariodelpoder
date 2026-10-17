import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CONTACT_EMAIL } from "@/data/contact";
import { SPONSOR_BUDGETS, SPONSOR_COUNTRIES, SPONSOR_MARKETS, sponsorshipSchema, sponsorshipOrigin } from "@/data/sponsorship";
import { enviarSolicitudPatrocinio } from "@/lib/sponsorship.functions";

export function SponsorshipForm() {
  const send = useServerFn(enviarSolicitudPatrocinio);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pais, setPais] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [mercados, setMercados] = useState<string[]>([]);
  const [acepta, setAcepta] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form));
    const parsed = sponsorshipSchema.safeParse({ ...raw, pais, presupuesto, mercados, acepta, origen: sponsorshipOrigin(document.referrer, window.location.search) });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const first = Object.keys(next)[0];
      if (first) form.querySelector<HTMLElement>(`[id="patrocinio-${first}"]`)?.focus();
      return;
    }
    setErrors({}); setStatus("sending");
    try {
      const result = await send({ data: parsed.data });
      setStatus(result.ok ? "success" : "error");
    } catch { setStatus("error"); }
  }

  const errorFor = (key: string) => errors[key] ? <p id={`error-${key}`} className="mt-2 text-sm text-destructive" role="alert">{errors[key]}</p> : null;
  const fields = [
    { key: "nombre", label: "Nombre*", max: 120, auto: "name", required: true },
    { key: "empresa", label: "Empresa*", max: 120, auto: "organization", required: true },
    { key: "cargo", label: "Cargo", max: 120, auto: "organization-title", required: false },
    { key: "email", label: "Correo profesional*", max: 200, auto: "email", required: true },
    { key: "web", label: "Web de la empresa", max: 2048, auto: "url", required: false },
  ];

  return (
    <section id="solicitud" className="scroll-mt-24 border-t border-border py-16 md:py-24">
      <div className="container-ddp grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div><p className="mono-label">Solicitud</p><h2 className="mt-4 text-2xl font-medium leading-tight">Solicita el media kit.</h2><p className="mt-5 text-base leading-relaxed text-muted-foreground">Te respondemos con el media kit y una propuesta de encaje.</p></div>
        <div aria-live="polite">
          {status === "success" ? (
            <div className="border-y border-border py-10" role="status">
              <Check size={28} className="text-signal" aria-hidden />
              <p className="mt-5 text-lg leading-relaxed">Recibido. Te escribiremos con el media kit. Si prefieres adelantar, reserva una llamada de 30 minutos.</p>
              <Button asChild className="btn-primary mt-7 h-auto"><Link to="/agenda">Reservar una llamada<ArrowUpRight size={16} /></Link></Button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <fieldset disabled={status === "sending"} className="min-w-0 space-y-7">
                <div className="hidden" aria-hidden="true"><label htmlFor="website_url">Website URL</label><input id="website_url" name="website_url" type="text" tabIndex={-1} autoComplete="off" maxLength={2048} /></div>
                <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
                  {fields.map((field) => <div key={field.key} className="min-w-0"><Label htmlFor={`patrocinio-${field.key}`}>{field.label}</Label><Input id={`patrocinio-${field.key}`} name={field.key} type={field.key === "email" ? "email" : field.key === "web" ? "url" : "text"} autoComplete={field.auto} maxLength={field.max} required={field.required} aria-invalid={!!errors[field.key]} aria-describedby={errors[field.key] ? `error-${field.key}` : undefined} className="mt-3 h-12 rounded-sm text-base" />{errorFor(field.key)}</div>)}
                  <div className="min-w-0"><Label htmlFor="patrocinio-pais">País de la empresa*</Label><Select value={pais} onValueChange={setPais}><SelectTrigger id="patrocinio-pais" className="mt-3 h-12 w-full rounded-sm text-base" aria-required="true" aria-invalid={!!errors.pais} aria-describedby={errors.pais ? "error-pais" : undefined}><SelectValue placeholder="Selecciona un país" /></SelectTrigger><SelectContent>{SPONSOR_COUNTRIES.map((country) => <SelectItem key={country} value={country}>{country}</SelectItem>)}</SelectContent></Select>{errorFor("pais")}</div>
                </div>
                <fieldset aria-describedby={errors.mercados ? "error-mercados" : undefined}>
                  <legend className="text-sm font-medium">Mercados que te interesan*</legend>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2" id="patrocinio-mercados" tabIndex={-1}>
                    {SPONSOR_MARKETS.map((market, index) => <div key={market} className="flex min-w-0 items-start gap-3"><Checkbox id={`market-${index}`} checked={mercados.includes(market)} onCheckedChange={(checked) => setMercados((current) => checked === true ? [...current, market] : current.filter((value) => value !== market))} className="mt-1" /><Label htmlFor={`market-${index}`} className="cursor-pointer py-1 text-sm leading-relaxed">{market}</Label></div>)}
                  </div>{errorFor("mercados")}
                </fieldset>
                <div><Label htmlFor="patrocinio-presupuesto">Presupuesto orientativo*</Label><Select value={presupuesto} onValueChange={setPresupuesto}><SelectTrigger id="patrocinio-presupuesto" className="mt-3 h-12 rounded-sm text-base" aria-required="true" aria-invalid={!!errors.presupuesto} aria-describedby={errors.presupuesto ? "error-presupuesto" : undefined}><SelectValue placeholder="Selecciona un presupuesto" /></SelectTrigger><SelectContent>{SPONSOR_BUDGETS.map((budget) => <SelectItem key={budget} value={budget}>{budget}</SelectItem>)}</SelectContent></Select>{errorFor("presupuesto")}</div>
                <div><Label htmlFor="patrocinio-objetivo">¿Qué quieres conseguir?*</Label><Textarea id="patrocinio-objetivo" name="objetivo" rows={5} required minLength={10} maxLength={2000} aria-invalid={!!errors.objetivo} aria-describedby={errors.objetivo ? "error-objetivo" : undefined} className="mt-3 min-h-36 rounded-sm text-base" />{errorFor("objetivo")}</div>
                <div><div className="flex items-start gap-3"><Checkbox id="patrocinio-acepta" checked={acepta} onCheckedChange={(checked) => setAcepta(checked === true)} aria-required="true" aria-invalid={!!errors.acepta} aria-describedby={errors.acepta ? "error-acepta" : undefined} className="mt-1" /><Label htmlFor="patrocinio-acepta" className="cursor-pointer text-sm leading-relaxed">Acepto que Diario del Poder use estos datos para responder a mi solicitud.</Label></div>{errorFor("acepta")}</div>
                {status === "error" && <p role="alert" className="text-sm leading-relaxed text-destructive">No se ha podido enviar. Escríbenos a <a href={`mailto:${CONTACT_EMAIL}`} className="break-all underline">{CONTACT_EMAIL}</a>.</p>}
                <Button type="submit" disabled={status === "sending"} className="btn-primary h-auto min-h-12 w-full sm:w-auto">{status === "sending" ? <><Loader2 className="animate-spin" aria-hidden />Enviando…</> : <>Enviar solicitud<ArrowUpRight size={16} aria-hidden /></>}</Button>
              </fieldset>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}