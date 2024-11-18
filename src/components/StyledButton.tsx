import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";

type StyledButtonProps = {
  title: string;
  onPress: () => void;
};

const StyledButton: React.FC<StyledButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-blue-500 py-3 rounded-lg items-center"
      onPress={onPress}
    >
      <Text className="text-white text-lg font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
