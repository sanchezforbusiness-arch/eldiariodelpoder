import { createFileRoute } from '@tanstack/react-router';
import { PodcastDiscoveryGuide } from '@/components/ddp/PodcastDiscoveryGuide';
import { youngPodcastsGuide, discoveryHead } from '@/data/spanishPodcastsGuide';
import { COUNTRY_SOCIAL_IMAGE } from '@/data/countryPage';
export const Route = createFileRoute('/podcasts-para-jovenes')({
  head: () => discoveryHead(youngPodcastsGuide, COUNTRY_SOCIAL_IMAGE),
  component: Page,
});
function Page() { return <PodcastDiscoveryGuide guide={youngPodcastsGuide} />; }
