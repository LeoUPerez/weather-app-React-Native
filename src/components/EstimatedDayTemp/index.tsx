import { LinearGradient } from "expo-linear-gradient";
import { useContext, useRef } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { globalContext } from "../../context/GlobalContext";
import { styles } from "./style";

const EstimatedDayTemp =  () => {
  const Context = useContext(globalContext);

  function name() {
    console.log("JUAn");
  }

  return (
    <LinearGradient
      colors={["rgba(69,121,241,255)", "transparent"]}
      end={{ x: 2, y: 0 }}
      start={{ x: 0, y: 1 }}
      style={styles.GradientBox}
    >
      <Text style={styles.TempTextStyle}>
        {Context?.city != undefined
          ? Context?.city?.main.temp.toString().split(".")[0]
          : 0 && name()}
        °
      </Text>
      <Image
        style={styles.Image}
        source={require("../../assets/images/clear.png")}
      />
    </LinearGradient>
  );
};

export { EstimatedDayTemp };
