import { Platform } from "react-native";
import styled from "styled-components/native";

const HeaderContainer = styled.View`
  background-color: #007aff;
  padding: 15px 0;
  align-items: center;
  justify-content: center;
  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.25;
      shadow-radius: 3.84px;
    `,
    android: `
      elevation: 5;
    `,
  })}
`;

const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderText>Temp Today</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
