import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import "../global.css";

import StoreProvider from "./stores/StoreContext";
import MainScreen from "./screens/MainScreen";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <MainScreen />
      </SafeAreaView>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default App;
