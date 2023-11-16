import {ListRenderItemInfo, Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {styles} from "./style";
import {CardForecast} from "../../models/CardForecastModel";
import * as Images from "../Images";

interface PropsType {
    data: ListRenderItemInfo<CardForecast>;
}

export default function ForecastCardInfo({data}: PropsType) {
    const {weather} = data.item;

    const key = `Image${weather}`;
    const CustomImage = Images.hasOwnProperty(key) ? (Images as any)[key] : null;

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
            {CustomImage && <CustomImage style={styles.Image}/>}
            <Text style={{color: "white", fontWeight: "bold"}}>
                {data.item.temp} C°
            </Text>
        </LinearGradient>
    );
}
