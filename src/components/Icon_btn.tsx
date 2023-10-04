import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { globalContext } from "../context/global_Context";

type PropsType = {
  text: string;
  name: "search" | "chevron-forward-outline";
};

export default function Icon_btn({ text, name }: PropsType) {
  const Context = useContext(globalContext);

  return (
    <View style={styles.container_btn}>
      <Text style={styles.text_style}>{text}</Text>
      <Ionicons
        onPress={() => {
          // Context.fetchCity();
        }}
        style={styles.icon_button}
        name={name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon_button: {
    fontSize: 25,
    color: "rgb(33, 97, 140)"
  },
  container_btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text_style: {
    fontWeight: "bold",
    color: "rgb(33, 97, 140)",
  },
});
