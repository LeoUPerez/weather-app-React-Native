import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import { globalContext } from "../context/global_Context";
import { useContext } from "react";


export default function HomeView() {
  const Context = useContext(globalContext);

  return (
    <View style={styles.temp_container}>
      <Header />
      <LinearGradient
        colors={["rgba(13, 151, 242, .8)", "transparent"]}
        end={{ x: 1.3, y: 0 }}
        start={{ x: 0, y: 1 }}
        style={styles.gradient_box}
      >
        <Text
          style={{
            fontWeight: "900",
            fontSize: 100,
            // textAlign: "center",
            color: "white",
            opacity: 0.8,
            paddingHorizontal: 20,
          }}
        >
          {Context?.city != undefined ? Context?.city?.main.temp : 0}°
        </Text>
        <View style={styles.prueba}></View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  temp_container: {
    width: "100%",
    height: "50%",
    borderWidth: 2,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  gradient_box: {
    width: "80%",
    height: "60%",
    borderRadius: 20,
    // paddingHorizontal: "3.5%",
  },
  prueba: {
    width: "100%",
    height: "35%",
    backgroundColor: "yellow",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    // padding: "3.5%",
  },
});
