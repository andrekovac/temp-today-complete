import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { observer } from "mobx-react";

import useWeatherData from "../hooks/useWeatherData";
import StyledButton from "./StyledButton";
import { cityCoordinates, CityName } from "../data/cities";

const LocationSelector: React.FC = () => {
  const { location, setLocation } = useWeatherData();
  const [selectedCity, setSelectedCity] = useState<CityName>(location);

  const onPress = () => {
    setLocation(selectedCity);
  };

  return (
    <View className="m-5">
      <Picker
        selectedValue={selectedCity}
        onValueChange={(itemValue) => setSelectedCity(itemValue as CityName)}
        itemStyle={{ color: "blue" }}
      >
        {Object.keys(cityCoordinates).map((city) => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>
      <StyledButton title="Set Location" onPress={onPress} />
    </View>
  );
};

export default observer(LocationSelector);
