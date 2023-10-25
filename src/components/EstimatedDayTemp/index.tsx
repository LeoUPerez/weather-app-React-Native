import {LinearGradient} from "expo-linear-gradient";
import {useContext, useRef} from "react";
import {Image, StyleSheet, Text} from "react-native";
import {weatherContext} from "../../contexts/WeatherContext";
import {styles} from "./style";

export default function EstimatedDayTemp() {
    const Context = useContext(weatherContext);

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
            <Image
                style={styles.Image}
                source={autoSelectImg(Context?.city!?.weather[0].main)}
            />
        </LinearGradient>
    );

    function autoSelectImg(weather: string) {
        switch (weather) {
            case "Clear":
                return require("../../assets/images/clear.png");
            case "Clouds":
                return require("../../assets/images/clouds.png");
            case "Drizzle":
                return require("../../assets/images/drizzle.png");
            case "Mist":
                return require("../../assets/images/mist.png");
            case "Rain":
                return require("../../assets/images/rain.png");
            case "Snow":
                return require("../../assets/images/snow.png");
        }
    }
}
