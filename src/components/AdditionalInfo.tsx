import { View, Text, StyleSheet } from "react-native";

import formatMeasurement from "../utils/formatMeasurement";

type AdditionalInfoProps = {
  windSpeed: number;
  humidity: number;
};

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  windSpeed,
  humidity,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Wind Speed: {formatMeasurement(windSpeed, " km/h")}
      </Text>
      <Text style={styles.text}>
        Humidity: {formatMeasurement(humidity, "%")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default AdditionalInfo;
