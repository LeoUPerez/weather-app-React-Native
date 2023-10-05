import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ContexProvider } from "./src/context/GlobalContext";
import HomeView from "./src/views/Home";
import { SetStateAction, useEffect, useState } from "react";
import * as Location from "expo-location";

const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [location, setLocation] =
    useState<SetStateAction<Location.LocationObject>>();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
      console.log(location);
    })();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container_style}>
        <ContexProvider>
          <HomeView />
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
