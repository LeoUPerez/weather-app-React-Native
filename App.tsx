import { StatusBar } from "expo-status-bar";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { ContexProvider } from "./src/context/global_Context";
import HomeView from "./src/views/home_View";

export default function App() {
  const windowHeight = Dimensions.get("window").height;

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "rgba(13, 151, 242, 0.15)",
          width: "100%",
          minHeight: windowHeight,
          marginTop: 30,
        }}
      >
        <ContexProvider>
          <HomeView />
        </ContexProvider>
      </View>
    </ScrollView>
  );
}
