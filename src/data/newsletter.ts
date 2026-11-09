/** Change only this line to restore the newsletter everywhere. */
export const NEWSLETTER_ENABLED: boolean = false;

/** Preserve the original copy while hiding only its newsletter list item. */
export function newsletterText(text: string, enabled = NEWSLETTER_ENABLED): string {
  return enabled ? text : text.replace(/, newsletter(?: Primera Mano)?\b/gi, "");
}

export function isNewsletterPath(pathname: string): boolean {
  return /^\/newsletter(?:\/|$)/.test(pathname);
}

export function disabledNewsletterResponse(pathname: string, enabled = NEWSLETTER_ENABLED): Response | undefined {
  if (enabled || !isNewsletterPath(pathname)) return undefined;
  return new Response(null, {
    status: 302,
    headers: { Location: "/", "X-Robots-Tag": "noindex", "Cache-Control": "no-store" },
  });
}