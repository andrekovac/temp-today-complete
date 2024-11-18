export const cityCoordinates = {
  Berlin: { latitude: 52.52, longitude: 13.405 },
  Paris: { latitude: 48.8566, longitude: 2.3522 },
  London: { latitude: 51.5074, longitude: -0.1278 },
  "New York": { latitude: 40.7128, longitude: -74.006 },
  Tokyo: { latitude: 35.6895, longitude: 139.6917 },
};

export type CityName = keyof typeof cityCoordinates;
