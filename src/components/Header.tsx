import { View, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import IconBtn from "./IconBtn";

export default function Header() {
  return (
    <View style={styles.header}>
      <SearchBar />
      <IconBtn text="" name="search"/>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        display:"flex",
        flexDirection: "row",
        alignItems: "center",
        // position: 'relative'
    }
})