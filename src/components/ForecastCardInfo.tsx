import {
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { City } from "../models/CityModel";
import { List } from "../models/ForecastModel";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { WeatherImage } from "../common/weatherImage";

interface PropsType {
  data: ListRenderItemInfo<List>;
}

export default function Forecast_card_info({ data }: PropsType) {
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
      <Text style={{ color: "white", fontWeight: "bold" }}>{data.item.dt_txt.split(" ")[1]}</Text>
      <Image
        style={styles.Image}
        source={
          data.item.weather[0].main === "Clouds"
            ? require("../assets/images/clouds.png")
            : data.item.weather[0].main === "Rain"
            ? require("../assets/images/rain.png")
            : require("../assets/images/clear.png")
        }
      />
      <Text style={{ color: "white", fontWeight: "bold" }}>{data.item.main.temp}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card_style: {
    width: 85,
    height: 110,
    padding: 3,
    marginHorizontal: 4,
    backgroundColor: "blue",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Image: {
    width: 45,
    height: 45,
  },
});
