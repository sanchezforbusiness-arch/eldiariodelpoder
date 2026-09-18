import { defineMcp } from "@lovable.dev/mcp-js";
import listEpisodes from "./tools/list-episodes";
import getEpisode from "./tools/get-episode";
import listGuests from "./tools/list-guests";
import getGuest from "./tools/get-guest";
import listPress from "./tools/list-press";

export default defineMcp({
  name: "diario-del-poder",
  title: "Diario del poder",
  version: "0.1.0",
  instructions:
    "Herramientas públicas de Diario del Poder, el podcast español de entrevistas con expresidentes, CEOs y grandes referentes. Usa `list_episodes` y `get_episode` para los episodios, `list_guests` y `get_guest` para los invitados y sus conversaciones, y `list_press` para las apariciones en prensa y televisión.",
  tools: [listEpisodes, getEpisode, listGuests, getGuest, listPress],
});
