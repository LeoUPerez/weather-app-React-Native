import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { globalContext } from "../context/global_Context";
import { useContext } from "react";

export default function HomeView() {
  const Context = useContext(globalContext);

  return (
    // <ScrollView>
    <View style={styles.temp_container}>
      <Header />
      <LinearGradient
        colors={["rgba(69,121,241,255)", "transparent"]}
        end={{ x: 2, y: 0 }}
        start={{ x: 0, y: 1 }}
        style={styles.gradient_box}
      >
        <Text
          style={{
            fontWeight: "900",
            fontSize: 140,
            textAlign: "right",
            color: "rgba(255, 255, 255, .9)",
            opacity: 0.8,
            paddingHorizontal: 5,
            marginTop: "-10%",
          }}
        >
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
      <View style={styles.prueba}>
        <Ionicons name="umbrella" size={50} />
        <Ionicons name="water" size={50} />
        <Ionicons name="md-cloud" size={50} />
      </View>
    </View>
    //  </ScrollView>
  );
}

const styles = StyleSheet.create({
  temp_container: {
    width: "100%",
    height: "45%",
    borderWidth: 2,
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  gradient_box: {
    width: "70%",
    height: "60%",
    borderRadius: 20,
    marginTop: "3%",
    position: "relative",
    // paddingHorizontal: "3.5%",
  },
  prueba: {
    width: "80%",
    height: "30%",
    backgroundColor: "white",
    borderRadius: 15,
    // padding: "3.5%",
    elevation: 10,
    display: "flex",
    flexDirection: "row",
    // shadowOffset: {
    //   height: 100,
    //   width: 100
    // },
    shadowColor: "black",
  },
  image: {
    position: "absolute",
    bottom: "-10%",
    left: "-15%",
    width: 120,
    height: 120,
  },
});
