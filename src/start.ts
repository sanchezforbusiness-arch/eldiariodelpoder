import { createMiddleware, createStart } from "@tanstack/react-start";
import { disabledNewsletterResponse } from "@/data/newsletter";

const newsletterAvailability = createMiddleware().server(({ request, next }) => {
  const response = disabledNewsletterResponse(new URL(request.url).pathname);
  return response ?? next();
});

export const startInstance = createStart(() => ({
  requestMiddleware: [newsletterAvailability],
}));