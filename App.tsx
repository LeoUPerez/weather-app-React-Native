import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ContexProvider } from "./src/context/global_Context";
import HomeView from "./src/views/home_View";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "rgba(13, 151, 242, 0.14)",
        width: "100%",
        height: "100%",
        paddingTop: 30
      }}
    >
      <ContexProvider>
        <HomeView></HomeView>
      </ContexProvider>
    </View>
  );
}
