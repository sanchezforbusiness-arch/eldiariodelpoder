import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_episode",
  title: "Ver un episodio",
  description:
    "Devuelve el detalle de un episodio de Diario del Poder a partir de su slug (por ejemplo 'jordi-juan-la-teoria-de-los-cajones').",
  inputSchema: { slug: z.string().trim().min(1).describe("Slug del episodio.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ slug }) => {
    const { getEpisodeBySlug } = await import("@/data/podcast");
    const episode = getEpisodeBySlug(slug);
    if (!episode) throw new ToolError(`No existe ningún episodio con el slug "${slug}".`);
    const data = {
      slug: episode.slug,
      episodeNumber: episode.episodeNumber,
      guest: episode.guest,
      guestSlug: episode.guestSlug,
      role: episode.role,
      title: episode.title,
      description: episode.description,
      date: episode.date,
      duration: episode.duration,
      youtubeId: episode.youtubeId,
      url: `https://eldiariodelpoder.com/episodios/${episode.slug}`,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { episode: data },
    };
  },
});
