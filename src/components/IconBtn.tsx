import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";
import { useNavigation } from "@react-navigation/native";
// import { Routes } from "../routes/Router";

import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RootStackPramList } from "../@types/stack-navigation";
// import { navigate } from "../routes/Router";

interface PropsType {
  text: string;
  name: "search" | "chevron-forward-outline";
}
// export type NavigationProps = NativeStackScreenProps<RootStackPramList>;

function IconBtn({ text, name }: PropsType) {
  const navi =
    useNavigation<NativeStackNavigationProp<RootStackPramList>>();

  const Context = useContext(globalContext);

  return (
    <TouchableOpacity
      style={styles.ContainerBtn}
      onPress={() => navi.navigate("FavoriteCity")}
    >
      <Text style={styles.TextStyle}>{text}</Text>
      <Ionicons name={name} style={styles.IconButton}></Ionicons>
    </TouchableOpacity>
  );
}

// IconBtn.displayName = "IconBtn";

// IconBtn.propTypes = {
//   text: PropTypes.string.isRequired,
//   name: PropTypes.oneOf(["search", "chevron-forward-outline"]),
// };

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
