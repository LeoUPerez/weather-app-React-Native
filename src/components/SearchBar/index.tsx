import { useEffect, useContext, useRef } from "react";
import { TextInput, StyleSheet } from "react-native";
import * as Device from "expo-device";
import { weatherContext } from "../../contexts/WeatherContext";
import { styles } from "./style";

export default function SearchBar() {
  const Context = useContext(weatherContext);

  return (
    <TextInput
      onChangeText={(value) => Context.setSearchCity(value.trim())}
      style={styles.Input}
      placeholder="Hola"
    />
  );
}
