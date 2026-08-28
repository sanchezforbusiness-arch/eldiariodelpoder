import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const applicationSchema = z.object({
  name: z.string().trim().min(2).max(150),
  email: z.string().trim().email().max(150),
  role: z.string().trim().min(2).max(150),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  about: z.string().trim().min(10).max(500),
});

export const submitClubApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => applicationSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("club_applications").insert({
      name: data.name,
      email: data.email,
      role: data.role,
      phone: data.phone || null,
      about: data.about,
    });

    if (error) {
      throw new Error("No hemos podido registrar tu solicitud.");
    }

    return { ok: true as const };
  });
