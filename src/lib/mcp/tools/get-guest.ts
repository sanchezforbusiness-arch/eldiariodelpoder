import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_guest",
  title: "Ver un invitado",
  description:
    "Devuelve la ficha completa de un invitado de Diario del Poder (biografía, resumen de la conversación, temas e ideas clave) a partir de su slug.",
  inputSchema: { slug: z.string().trim().min(1).describe("Slug del invitado.") },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ slug }) => {
    const { getGuestBySlug } = await import("@/data/podcast");
    const guest = getGuestBySlug(slug);
    if (!guest) throw new ToolError(`No existe ningún invitado con el slug "${slug}".`);
    const data = {
      slug: guest.slug,
      name: guest.name,
      role: guest.role,
      bio: guest.bio,
      topics: guest.topics,
      summary: guest.summary,
      keyIdeas: guest.keyIdeas,
      qa: guest.qa,
      youtubeId: guest.youtubeId,
      externalUrl: guest.externalUrl,
      url: `https://eldiariodelpoder.com/invitados/${guest.slug}`,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { guest: data },
    };
  },
});
