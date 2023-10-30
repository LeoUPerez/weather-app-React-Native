import {LinearGradient} from "expo-linear-gradient";
import {useContext, useEffect} from "react";
import {Text} from "react-native";
import {weatherContext} from "../../contexts/WeatherContext";
import {styles} from "./style";
import * as Images from "../Images";
import * as Location from "expo-location";

export default function EstimatedDayTemp() {

    useEffect(() => {
        (async () => {
            // await Location.requestForegroundPermissionsAsync();
            // let location = await Location.getCurrentPositionAsync({});
            // fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${process.env.API_ID}&units=metric`)
            //     .then(async (response) => {
            //         Context.setCity(await response.json());
            //     })
        })();
    }, []);

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
            <Text>{Context.city?.name}</Text>
            <Text style={styles.TempTextStyle}>
                {Context?.city != undefined
                    ? Context?.city?.main.temp.toString().split(".")[0]
                    : 0 + "°"}
            </Text>
            {CustomImage && <CustomImage style={styles.Image}/>}
        </LinearGradient>
    );
}
