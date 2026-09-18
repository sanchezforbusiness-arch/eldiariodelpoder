import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_press",
  title: "Apariciones en prensa y televisión",
  description:
    "Lista las apariciones de Diario del Poder en prensa, televisión y medios digitales, con medio, titular, fecha y enlace.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async () => {
    const [{ pressItems }, { tvAppearances }] = await Promise.all([
      import("@/data/press"),
      import("@/data/tv"),
    ]);
    const press = pressItems.map((p) => ({
      outlet: p.outlet,
      kind: p.kind,
      context: p.context,
      headline: p.headline,
      date: p.date,
      summary: p.summary,
      url: p.url,
    }));
    const tv = tvAppearances.map((t) => ({
      channel: t.channel,
      program: t.program,
      title: t.title,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify({ press, tv }, null, 2) }],
      structuredContent: { press, tv },
    };
  },
});
