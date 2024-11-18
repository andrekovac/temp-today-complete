import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";

import useWeatherData from "../hooks/useWeatherData";
import AdditionalInfo from "../components/AdditionalInfo";
import LocationSelector from "../components/LocationSelector";
import WeatherDisplay from "../components/WeatherDisplay";
import Header from "../components/Header";

const MainScreen: React.FC = () => {
  const { averageTemperature, error, humidity, loading, windSpeed } =
    useWeatherData();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" />
          </View>
        ) : error ||
          averageTemperature === null ||
          humidity === null ||
          windSpeed === null ? (
          <View style={styles.center}>
            <Text>Error fetching weather data.</Text>
          </View>
        ) : (
          <>
            <WeatherDisplay
              temperature={averageTemperature}
              condition="Average Temperature"
            />
            <AdditionalInfo windSpeed={windSpeed} humidity={humidity} />
          </>
        )}
      </View>
      <LocationSelector />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light gray background
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default observer(MainScreen);
