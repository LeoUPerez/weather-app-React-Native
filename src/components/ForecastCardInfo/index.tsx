import {ListRenderItemInfo, Text, Image} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {styles} from "./style";
import {CardForecast} from "../../models/CardForecastModel";

interface PropsType {
    data: ListRenderItemInfo<CardForecast>;
}

export default function ForecastCardInfo({data}: PropsType) {
    const {weather} = data.item;

    return (
        <LinearGradient
            style={styles.card_style}
            colors={["rgba(69,121,241,255)", "transparent"]}
            end={{x: 2.8, y: 0}}
            start={{x: 2, y: 1}}
        >
            <Text style={{color: "white", fontWeight: "bold", fontSize: 10}}>
                {data.item.hour}
            </Text>
            <Text style={{color: "white", fontWeight: "bold", fontSize: 10}}>
                {data.item.date}
            </Text>

            <Image
                style={styles.Image}
                source={
                    weather == "Clear" ?
                        require("../../assets/images/clouds.png")
                        : data.item.weather == "Clouds"
                            ? require("../../assets/images/clouds.png")
                            : data.item.weather == "Drizzle"
                                ? require("../../assets/images/drizzle.png")
                                : data.item.weather == "Mist"
                                    ? require("../../assets/images/mist.png")
                                    : data.item.weather == "Rain"
                                        ? require("../../assets/images/rain.png")
                                        : require("../../assets/images/snow.png")
                }
            />
            {/* <Text>{data.item.weather}</Text> */}
            <Text style={{color: "white", fontWeight: "bold"}}>
                {data.item.temp} C°
            </Text>
        </LinearGradient>
    );
}
