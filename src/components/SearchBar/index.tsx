import { useEffect, useContext, useRef } from "react";
import { TextInput, StyleSheet } from "react-native";
import * as Device from "expo-device";
import { globalContext } from "../../context/GlobalContext";
import { styles } from "./style";

const SearchBar = () => {
  const Context = useContext(globalContext);

  return (
    <TextInput
      onChangeText={(value) => Context.setSearchCity(value.trim())}
      style={styles.Input}
      placeholder="Hola"
    />
  );
};

export { SearchBar };
