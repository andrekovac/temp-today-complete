import { Text, TouchableOpacity } from "react-native";

type StyledButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
};

const StyledButton: React.FC<StyledButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-blue-500 py-3 rounded-lg items-center"
      onPress={onPress}
    >
      <Text className="text-white text-lg font-semibold">{children}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
