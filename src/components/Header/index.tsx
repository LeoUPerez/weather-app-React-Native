import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { globalContext } from "../../context/GlobalContext";
import { styles } from "./style";
import IconBtn from "../IconBtn";
import SearchBar from "../SearchBar";

export default function Header() {
  const Context = useContext(globalContext);

  return (
    <View style={styles.Header}>
      <SearchBar />
      <IconBtn func={() => console.log(Context.city)} name="search" text="" />
    </View>
  );
}
