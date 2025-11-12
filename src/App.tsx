import { StatusBar } from "expo-status-bar";
import Navigation from "./navigations/Navigation";
import { LogBox } from "react-native";

const App = () => {
  LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"]);

  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
};
export default App;
