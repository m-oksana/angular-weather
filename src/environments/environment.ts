export const environment = {
  apiBaseUrl: 'https://api.openweathermap.org/data/3.0/onecall',
  apiGeoUrl: 'https://api.openweathermap.org/geo/1.0',
  // @ts-expect-error
  apiKey: process.env.API_KEY,
  favouriteCities: [
    {
      name: "Minsk"
    },
    {
      name: "Warsaw"
    },
    {
      name: "Vilnus"
    }
  ]
};
