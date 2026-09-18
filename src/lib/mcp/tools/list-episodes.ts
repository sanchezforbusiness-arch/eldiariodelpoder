import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_episodes",
  title: "Listar episodios",
  description:
    "Lista los episodios publicados del podcast Diario del Poder: invitado, título, fecha, duración y enlace.",
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async () => {
    const { episodeList } = await import("@/data/podcast");
    const items = episodeList.map((e) => ({
      slug: e.slug,
      guest: e.guest,
      role: e.role,
      title: e.title,
      date: e.date,
      duration: e.duration,
      youtubeId: e.youtubeId,
      url: `https://eldiariodelpoder.com/episodios/${e.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { episodes: items },
    };
  },
});
