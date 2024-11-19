import styled from "styled-components/native";

import formatMeasurement from "../utils/formatMeasurement";

type WeatherDisplayProps = {
  /**
   * The temperature to display.
   */
  temperature: number;
  /**
   * A description of the displayed temperature.
   */
  condition: string;
};

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  temperature,
  condition,
}) => {
  return (
    <Container>
      <TemperatureText>{formatMeasurement(temperature)}</TemperatureText>
      <ConditionText>{condition}</ConditionText>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  margin-top: 50px;
`;

const TemperatureText = styled.Text`
  font-size: 72px;
  font-weight: bold;
  color: #333;
`;

const ConditionText = styled.Text`
  font-size: 24px;
  color: #666;
  margin-top: 10px;
`;

export default WeatherDisplay;
