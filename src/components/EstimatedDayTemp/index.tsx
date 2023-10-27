import {LinearGradient} from "expo-linear-gradient";
import {useContext} from "react";
import {Text} from "react-native";
import {weatherContext} from "../../contexts/WeatherContext";
import {styles} from "./style";
import * as Images from "../Images";

export default function EstimatedDayTemp() {
    const Context = useContext(weatherContext);
    const key = `Image${Context?.city?.weather[0].main}`;
    const CustomImage = Images.hasOwnProperty(key) ? (Images as any)[key] : null;

    console.log("EstimatedDayTemp")

    return (
        <LinearGradient
            colors={["rgba(69,121,241,255)", "transparent"]}
            end={{x: 2, y: 0}}
            start={{x: 0, y: 1}}
            style={styles.GradientBox}
        >
            <Text style={styles.TempTextStyle}>
                {Context?.city != undefined
                    ? Context?.city?.main.temp.toString().split(".")[0]
                    : 0 + "°"}
            </Text>
            {CustomImage && <CustomImage style={styles.Image}/>}
        </LinearGradient>
    );
}
