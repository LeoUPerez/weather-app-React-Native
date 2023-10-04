import { useEffect, useContext, useRef } from "react";
import { TextInput, StyleSheet } from "react-native";
import * as Device from "expo-device";
import { globalContext } from "../context/GlobalContext";

export default function SearchBar() {
  const Context = useContext(globalContext);

  return (
    <TextInput
      onChangeText={(value) => Context.setSearchCity(value.trim())}
      style={styles.Input}
      placeholder="Hola"
    />
  );
}

const styles = StyleSheet.create({
  Input: {
    width: "82%",
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});
