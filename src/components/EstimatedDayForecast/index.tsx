import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import { globalContext } from "../../context/GlobalContext";
import { styles } from "./style";
import { IconInfo } from "../IconInfo";

const EstimatedDayForecast = () => {
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
};

export { EstimatedDayForecast };
