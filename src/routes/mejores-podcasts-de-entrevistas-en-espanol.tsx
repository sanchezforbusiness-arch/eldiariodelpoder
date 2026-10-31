import { createFileRoute } from '@tanstack/react-router';
import { PodcastDiscoveryGuide } from '@/components/ddp/PodcastDiscoveryGuide';
import { interviewPodcastsGuide, discoveryHead } from '@/data/spanishPodcastsGuide';
import { COUNTRY_SOCIAL_IMAGE } from '@/data/countryPage';
export const Route = createFileRoute('/mejores-podcasts-de-entrevistas-en-espanol')({
  head: () => discoveryHead(interviewPodcastsGuide, COUNTRY_SOCIAL_IMAGE),
  component: Page,
});
function Page() { return <PodcastDiscoveryGuide guide={interviewPodcastsGuide} />; }
