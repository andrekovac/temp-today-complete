export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current: CurrentWeather;
  hourly_units: HourlyUnits;
  hourly: HourlyData;
}

export interface CurrentWeather {
  time: string;
  relative_humidity_2m: number;
  wind_speed_10m: number;
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
}

export interface HourlyData {
  time: string[];
  temperature_2m: number[];
}
