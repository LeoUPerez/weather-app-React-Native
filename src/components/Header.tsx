import { View, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import IconBtn from "./IconBtn";
import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";

export default function Header() {
  const Context = useContext(globalContext);

  return (
    <View style={styles.Header}>
      <SearchBar />
      <IconBtn func={()=>console.log(Context.city)
      } name="search" text="" />
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
