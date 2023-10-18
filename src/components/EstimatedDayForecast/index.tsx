import { View } from "react-native";
import { useContext } from "react";
import { globalContext } from "../../context/GlobalContext";
import { styles } from "./style";
import  IconInfo  from "../IconInfo";

export default function EstimatedDayForecast() {
  const Context = useContext(globalContext);

  return (
    <View style={styles.EstimatesContainerStyles}>
      <IconInfo
        name="thermometer"
        text="Temp. max"
        data={Context.city!?.main.temp_max.toString().split(".")[0]}
      />
      <IconInfo
        name="water"
        text="Humidity"
        data={Context.city!?.main.humidity}
      />
      <IconInfo
        name="md-cloud"
        text="Wind speed"
        data={Context.city!?.wind.speed}
      />
    </View>
  );
};

