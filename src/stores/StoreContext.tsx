import React, { useMemo } from "react";
import WeatherStore from "./WeatherStore";

export const StoreContext = React.createContext({
  weatherStore: WeatherStore,
});

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const store = useMemo(() => ({ weatherStore: WeatherStore }), []);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
