import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ContexProvider, globalContext } from "./src/context/GlobalContext";
import HomeView from "./src/views/Home";
import { SetStateAction, useContext, useEffect, useState } from "react";

const windowHeight = Dimensions.get("window").height;

export default function App() {
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
