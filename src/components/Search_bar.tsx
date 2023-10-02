import { useEffect, useContext, useRef } from "react";
import { TextInput, StyleSheet } from "react-native";
import * as Device from "expo-device";
import { globalContext } from "../context/global_Context";

export default function SearchBar() {
  const Context = useContext(globalContext);

  return (
    <TextInput
      onChangeText={(value) => Context.setSearchCity(value.trim())}
      style={styles.input}
      placeholder="Hola"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "82%",
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});
