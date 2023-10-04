import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { globalContext } from "../context/global_Context";
import { useContext } from "react";
import Icon_info from "../components/Icon_info";
import Forecast_card_info from "../components/Forecast_card_info";
import Header from "../components/Header";
import Icon_btn from "../components/Icon_btn";

export default function HomeView() {
  const Context = useContext(globalContext);

  return (
    <View style={styles.temp_container}>
      {/* <Header /> */}
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
      <View style={styles.prueba}>
        <Icon_info
          name="thermometer"
          text="Temp. max"
          defaultData="0"
          data={Context.city!?.main.temp_max.toString().split(".")[0]}
        />
        <Icon_info
          name="water"
          text="Humidity"
          defaultData="0"
          data={Context.city!?.main.humidity}
        />
        <Icon_info
          name="md-cloud"
          text="Wind speed"
          defaultData="0"
          data={Context.city!?.wind.speed}
        />
      </View>
      <View style={styles.container_forecast_style}>
        <View style={styles.header_forecast_style}>
          <Text style={{fontWeight: "bold", color: "rgb(33, 97, 140)"}}>Today</Text>
          <Icon_btn text="5 day weather forecast" name="chevron-forward-outline"/>
        </View>
        <ScrollView horizontal={true} style={styles.container_card_forecast_style}>
          <Forecast_card_info />
          <Forecast_card_info />
          <Forecast_card_info />
          <Forecast_card_info />
          <Forecast_card_info />

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  temp_container: {
    width: "100%",
    height: "45%",
    display: "flex",
    alignItems: "center",
    gap: 10,
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
  gradient_box: {
    width: "70%",
    height: "60%",
    borderRadius: 20,
    marginTop: "3%",
    position: "relative",
  },
  prueba: {
    width: "80%",
    height: "30%",
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "black",
  },
  image: {
    position: "absolute",
    bottom: "-10%",
    left: "-15%",
    width: 150,
    height: 150,
  },
  container_forecast_style: {
    width: "100%",
    height: 170,
    // backgroundColor: "blue",
    padding: 15,
    // borderWidth: .4
  },
  header_forecast_style: {
    width: "100%",
    // backgroundColor: "pink",
    // padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container_card_forecast_style: {
    width: "100%",
    // height: "100%",
    // backgroundColor: "red",
    // display: "flex",
    // gap: 5,
    // flexDirection: "row"
  },
});
