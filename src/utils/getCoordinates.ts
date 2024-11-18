import { cityCoordinates, CityName } from "../data/cities";

type Coordinates = {
  latitude: number;
  longitude: number;
};

const getCoordinates = async (cityName: CityName): Promise<Coordinates> => {
  // Simulate an API call with a promise
  return new Promise((resolve, reject) => {
    const coords = cityCoordinates[cityName];

    if (coords) {
      setTimeout(() => {
        resolve(coords);
      }, 500);
    } else {
      reject(new Error("City not found"));
    }
  });
};

export default getCoordinates;
