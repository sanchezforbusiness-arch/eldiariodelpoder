import { createFileRoute } from '@tanstack/react-router';
import { PodcastDiscoveryGuide } from '@/components/ddp/PodcastDiscoveryGuide';
import { spanishPodcastsGuide, discoveryHead } from '@/data/spanishPodcastsGuide';
import { COUNTRY_SOCIAL_IMAGE } from '@/data/countryPage';
export const Route = createFileRoute('/mejores-podcasts-en-espanol')({
  head: () => discoveryHead(spanishPodcastsGuide, COUNTRY_SOCIAL_IMAGE),
  component: Page,
});
function Page() { return <PodcastDiscoveryGuide guide={spanishPodcastsGuide} />; }
