import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";

type PropsType = {
  text: string;
  name: "search" | "chevron-forward-outline";
};

export default function IconBtn({ text, name }: PropsType) {
  const Context = useContext(globalContext);

  return (
    <View style={styles.ContainerBtn}>
      <Text style={styles.TextStyle}>{text}</Text>
      <Ionicons
        onPress={ () => {
          Context.fetchCityName();
        }}
        style={styles.IconButton}
        name={name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  IconButton: {
    fontSize: 25,
    color: "rgb(33, 97, 140)",
  },
  ContainerBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  TextStyle: {
    fontWeight: "bold",
    color: "rgb(33, 97, 140)",
  },
});
