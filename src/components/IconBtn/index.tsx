import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { globalContext } from "../../context/GlobalContext";
import { styles } from "./style";

interface PropsType {
  text: string;
  name: "search" | "chevron-forward-outline";
  func: () => void;
}

const IconBtn = ({ text, name, func }: PropsType) => {
  return (
    <TouchableOpacity style={styles.ContainerBtn} onPress={() => func()}>
      <Text style={styles.TextStyle}>{text}</Text>
      <Ionicons name={name} style={styles.IconButton}></Ionicons>
    </TouchableOpacity>
  );
};

export { IconBtn };
