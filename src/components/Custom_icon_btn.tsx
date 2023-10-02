import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { globalContext } from "../context/global_Context";

export default function Custom_btn() {
  const Context = useContext(globalContext);

  return (
    <Ionicons
      onPress={() => {
        Context?.getCity();
      }}
      style={styles.icon_button}
      name="search"
    ></Ionicons>
  );
}

const styles = StyleSheet.create({
  icon_button: {
    fontSize: 25,
  },
});
