import { tmdbData } from "../config/tmdbConfig";

export async function fetchTmdbData(tmdbId: string) {
  const url = `${tmdbData.movieUrl}${tmdbId}?api_key=${tmdbData.apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`TMDB ERROR: ${response.statusText}`);
    return response.json();
  } catch (error) {
    console.error("Error fetching TMDB data:", error);
    // Here you could add a fallback to Jellyfin or another service
    throw error;
  }
}

