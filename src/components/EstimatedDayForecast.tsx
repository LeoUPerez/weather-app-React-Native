import IconInfo from "./IconInfo";
import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";

export default function EstimatedDayForecast() {
  const Context = useContext(globalContext);
  return (
    <View style={styles.EstimatesContainerStyles}>
      <IconInfo
        name="thermometer"
        text="Temp. max"
        defaultData="0"
        data={Context.city!?.main.temp_max.toString().split(".")[0]}
      />
      <IconInfo
        name="water"
        text="Humidity"
        defaultData="0"
        data={Context.city!?.main.humidity}
      />
      <IconInfo
        name="md-cloud"
        text="Wind speed"
        defaultData="0"
        data={Context.city!?.wind.speed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  EstimatesContainerStyles: {
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
});

