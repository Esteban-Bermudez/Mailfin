export function generateHtmlTemplate(data: any) {
  return `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h3 style="text-align: center;">A new movie was added to Jellyfin</h3>
        <h1 style="text-align: center;">${data.title}</h1>
        <img src="${data.posterPath}" alt="${data.title} poster" style="width: 100%; max-width: 300px; height: auto; border-radius: 10px;">
        <h3>${data.title} (${data.releaseDate})</h3>
        <p>${data.overview}</p>
        <a href="${data.movieUrl}" target="_blank">View on TMDB</a>
        <footer style="text-align: center; margin-top: 20px;">
          <p style="font-size: 12px; color: #AAA;">Esteban Bermudez - 2024</p>
        </footer>
      </body>
    </html>
  `;
}

