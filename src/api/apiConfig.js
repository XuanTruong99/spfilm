const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "56c3ba88d498f4443260cfdb5f186a93",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
