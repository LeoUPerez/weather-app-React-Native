import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { globalContext } from "../context/GlobalContext";

export default function EstimatedDayTemp() {
  const Context = useContext(globalContext);

  return (
    <LinearGradient
      colors={["rgba(69,121,241,255)", "transparent"]}
      end={{ x: 2, y: 0 }}
      start={{ x: 0, y: 1 }}
      style={styles.gradient_box}
    >
      <Text style={styles.temp_text_style}>
        {Context?.city != undefined
          ? Context?.city?.main.temp.toString().split(".")[0]
          : 0}
        °
      </Text>
      <Image
        style={styles.image}
        source={require("../assets/images/clear.png")}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient_box: {
    width: "70%",
    height: "60%",
    borderRadius: 20,
    marginTop: "3%",
    position: "relative",
  },
  temp_text_style: {
    fontWeight: "900",
    fontSize: 140,
    textAlign: "right",
    color: "rgba(255, 255, 255, .9)",
    opacity: 0.8,
    paddingHorizontal: 5,
    marginTop: "-10%",
  },
  image: {
    position: "absolute",
    bottom: "-10%",
    left: "-15%",
    width: 150,
    height: 150,
  },
});
