import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "list_guests",
  title: "Listar invitados",
  description:
    "Lista los invitados de Diario del Poder (nombre, cargo, temas). Admite una búsqueda por texto sobre nombre, cargo o temas.",
  inputSchema: {
    query: z.string().trim().optional().describe("Texto opcional para filtrar invitados."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ query }) => {
    const { guestList } = await import("@/data/podcast");
    const q = query?.toLowerCase();
    const items = guestList
      .filter((g) =>
        !q
          ? true
          : [g.name, g.role, g.bio, ...(g.topics ?? [])].join(" ").toLowerCase().includes(q),
      )
      .map((g) => ({
        slug: g.slug,
        name: g.name,
        role: g.role,
        topics: g.topics,
        url: `https://eldiariodelpoder.com/invitados/${g.slug}`,
      }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { guests: items },
    };
  },
});
