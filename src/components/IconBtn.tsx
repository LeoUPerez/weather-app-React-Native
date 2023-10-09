import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "../routes/Router";

interface PropsType {
  text: string;
  name: "search" | "chevron-forward-outline";
}

function IconBtn({ text, name }: PropsType) {
  const navigation = useNavigation<NativeStackNavigationProp<IRouteName>>();
  const Context = useContext(globalContext);

  
  return (
    <TouchableOpacity
    style={styles.ContainerBtn}
    onPress={() => {
      // Context.fetchCityName();
      // navigation.navigate()
      navigation.push(Routes.FavoriteCity);
      }}
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
