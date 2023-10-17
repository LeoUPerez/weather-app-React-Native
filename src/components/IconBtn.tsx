import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";
import { useNavigation } from "@react-navigation/native";

interface PropsType {
  text: string;
  name: "search" | "chevron-forward-outline";
  func: () => void;
}

function IconBtn({ text, name, func }: PropsType) {
  return (
    <TouchableOpacity style={styles.ContainerBtn} onPress={() => func()}>
      <Text style={styles.TextStyle}>{text}</Text>
      <Ionicons name={name} style={styles.IconButton}></Ionicons>
    </TouchableOpacity>
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

export default IconBtn;
