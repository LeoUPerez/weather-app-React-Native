import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { ContexProvider } from "./src/context/GlobalContext";
import RouterNavigator from "./src/routes/Router";
import { useEffect } from "react";

const windowHeight = Dimensions.get("window").height;

export default function App() {

  return (
    <ScrollView>
      <View style={styles.container_style}>
        <ContexProvider>
          <RouterNavigator />
        </ContexProvider>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container_style: {
    backgroundColor: "rgba(13, 151, 242, 0.15)",
    width: "100%",
    minHeight: windowHeight,
    marginTop: 30,
  },
});
