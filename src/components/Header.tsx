import { View, StyleSheet } from "react-native";
import SearchBar from "./Search_bar";
import Custom_btn from "./Icon_btn";

export default function Header() {
  return (
    <View style={styles.header}>
      <SearchBar />
      <Custom_btn text="" name="search"/>
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