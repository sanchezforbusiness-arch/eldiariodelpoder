import { useEffect, useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { getBeehiivPosts, type BeehiivPost } from "@/lib/beehiiv.functions";

function formatDate(ts: number | null) {
  if (!ts) return "";
  try {
    return new Date(ts * 1000).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export function Publications() {
  const fetchPosts = useServerFn(getBeehiivPosts);
  const [posts, setPosts] = useState<BeehiivPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchPosts()
      .then((r) => {
        if (cancelled) return;
        setPosts(r.posts);
        setError(r.error);
      })
      .catch(() => {
        if (!cancelled) setError("No se pudieron cargar las publicaciones.");
      })
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [fetchPosts]);

  const [featured, ...rest] = posts;

  return (
    <section
      id="publicaciones"
      className="py-28 md:py-40 relative overflow-hidden border-t border-border grain"
    >
      <div className="container-ddp relative">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="eyebrow block mb-6">Newsletter</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] font-light tracking-[-0.02em]">
              Newsletter.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Entrevistas cortas con los mayores referentes. En tu correo.
            </p>
          </div>
          <a
            href="https://eldiariodelpoder.beehiiv.com"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-muted-foreground hover:text-gold transition-colors"
          >
            Ver todas <ArrowUpRight size={14} />
          </a>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-24 text-muted-foreground">
            <Loader2 className="animate-spin" size={20} />
          </div>
        )}

        {!loading && error && posts.length === 0 && (
          <p className="text-center text-muted-foreground py-12">{error}</p>
        )}

        {!loading && posts.length > 0 && (
          <div className="grid gap-10 lg:gap-14">
            {featured && (
              <a
                href={featured.web_url}
                target="_blank"
                rel="noreferrer"
                className="group grid md:grid-cols-2 gap-8 md:gap-14 items-center border-b border-border pb-14"
              >
                <div className="aspect-[4/3] overflow-hidden bg-card border border-border">
                  {featured.thumbnail_url ? (
                    <img
                      src={featured.thumbnail_url}
                      alt={featured.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-card to-background" />
                  )}
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-5">
                    Destacado · {formatDate(featured.publish_date)}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-[-0.02em] group-hover:text-gold transition-colors">
                    {featured.title}
                  </h3>
                  {(featured.subtitle || featured.preview_text) && (
                    <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed line-clamp-3">
                      {featured.subtitle || featured.preview_text}
                    </p>
                  )}
                  <span className="mt-8 inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-gold">
                    Leer <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            )}

            {rest.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                {rest.map((p) => (
                  <a
                    key={p.id}
                    href={p.web_url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-card border border-border mb-6">
                      {p.thumbnail_url ? (
                        <img
                          src={p.thumbnail_url}
                          alt={p.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-card to-background" />
                      )}
                    </div>
                    <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground mb-3">
                      {formatDate(p.publish_date)}
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl leading-[1.15] tracking-[-0.01em] group-hover:text-gold transition-colors">
                      {p.title}
                    </h3>
                    {(p.subtitle || p.preview_text) && (
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {p.subtitle || p.preview_text}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mt-16 md:hidden text-center">
          <a
            href="https://eldiariodelpoder.beehiiv.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-muted-foreground hover:text-gold transition-colors"
          >
            Ver todas <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}