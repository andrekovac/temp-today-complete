import { useContext } from "react";
import { StoreContext } from "../stores/StoreContext";

const useWeatherData = () => {
  const { weatherStore } = useContext(StoreContext);
  return weatherStore;
};

export default useWeatherData;
