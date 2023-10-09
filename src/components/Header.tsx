import { View, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import IconBtn from "./IconBtn";

export default function Header() {
  return (
    <View style={styles.Header}>
      <SearchBar />
      <IconBtn name="search"/>
    </View>
  );
}

const styles = StyleSheet.create({
    Header: {
        display:"flex",
        flexDirection: "row",
        alignItems: "center",
        // position: 'relative'
    }
})