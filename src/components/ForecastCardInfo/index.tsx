import {
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { List } from "../../models/ForecastModel";
import { styles } from "./style";

interface PropsType {
  data: ListRenderItemInfo<List>;
}

const ForecastCardInfo = ({ data }: PropsType) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    // setImageUrl(data.item.weather[0].main);
    //    setImageUrl(WeatherImage(data.item.weather[0].main));
  }, []);

  return (
    <LinearGradient
      style={styles.card_style}
      colors={["rgba(69,121,241,255)", "transparent"]}
      end={{ x: 2.8, y: 0 }}
      start={{ x: 2, y: 1 }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {data.item.dt_txt.split(" ")[1]}
      </Text>
      <Image
        style={styles.Image}
        source={
          data.item.weather[0].main === "Clouds"
            ? require("../../assets/images/clouds.png")
            : data.item.weather[0].main === "Rain"
            ? require("../../assets/images/rain.png")
            : require("../../assets/images/clear.png")
        }
      />
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {data.item.main.temp}
      </Text>
    </LinearGradient>
  );
};

export { ForecastCardInfo };
