import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

import { WeatherApiResponse } from "../types/WeatherData";
import getCoordinates from "../utils/getCoordinates";
import calculateAverage from "../utils/calculateAverage";
import { CityName } from "../data/cities";

class WeatherStore {
  location: CityName = "Berlin";
  weatherData: WeatherApiResponse | null = null;
  loading: boolean = false;
  error: Error | null = null;
  averageTemperature: number | null = null;
  humidity: number | null = null;
  windSpeed: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  initialize = () => {
    this.fetchWeather();
  };

  setLocation = (newLocation: CityName) => {
    this.location = newLocation;
    this.fetchWeather();
  };

  fetchWeather = async () => {
    this.loading = true;
    this.error = null;
    this.averageTemperature = null;
    this.humidity = null;
    this.windSpeed = null;

    try {
      const coords = await getCoordinates(this.location);

      const response = await axios.get<WeatherApiResponse>(
        "https://api.open-meteo.com/v1/forecast",
        {
          params: {
            latitude: coords.latitude,
            longitude: coords.longitude,
            current: "relative_humidity_2m,wind_speed_10m",
            hourly: "temperature_2m",
            timezone: "Europe/Berlin",
            past_days: 0,
            forecast_days: 1,
          },
        }
      );

      const data = response.data;

      // Compute average temperature from hourly data
      const temperatures = data.hourly.temperature_2m;
      const averageTemp = calculateAverage(temperatures);

      runInAction(() => {
        this.weatherData = data;
        this.averageTemperature = averageTemp;
        this.humidity = data.current.relative_humidity_2m;
        this.windSpeed = data.current.wind_speed_10m;
        this.loading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err as Error;
        this.loading = false;
      });
    }
  };
}

const weatherStore = new WeatherStore();
weatherStore.initialize();

export default weatherStore;
