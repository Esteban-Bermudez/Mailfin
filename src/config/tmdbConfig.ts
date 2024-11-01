export const tmdbData = {
  apiKey: process.env.TMDB_API_KEY || "",
  movieUrl: "https://api.themoviedb.org/3/movie/",
  tvUrl: "https://api.themoviedb.org/3/tv/",
  posterUrl: "https://image.tmdb.org/t/p/original",
  imdbUrl: "https://www.imdb.com/title/",
};

if (!tmdbData.apiKey) {
  console.error("TMDB API Key not found");
  process.exit(1);
}

