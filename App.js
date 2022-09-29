import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import { store } from "./src/store";
import { Counter } from "./src/Counter";
import User from "./src/User";
import TickerData from "./src/TickerData";
import AuthenticPortfolio from "./src/AuthenticPortfolio";
export default function App() {
  return (
    <Provider store={store}>
      <AuthenticPortfolio />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
