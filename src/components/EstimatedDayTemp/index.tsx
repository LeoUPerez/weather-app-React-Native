import {LinearGradient} from "expo-linear-gradient";
import {useContext, useEffect} from "react";
import {Text} from "react-native";
import {weatherContext} from "../../contexts/WeatherContext";
import {styles} from "./style";
import * as Images from "../Images";
import useFetch from "../../hooks/useFetch";
import getLocation from "../../utils/getLocation";

export default function EstimatedDayTemp() {
    const Context = useContext(weatherContext);
    const {getWeatherCity} = useFetch()

    useEffect(() => {
        (async () => {
            try {
                const coords = await getLocation();
                await getWeatherCity(`https://api.openweathermap.org/data/2.5/weather?lat=${coords!.latitude}&lon=${coords!.longitude}&appid=${process.env.API_ID}&units=metric`);
            } catch (e) {
                console.log(e+" Error useeffect")
            }
        })();
    }, []);

    // const key = `Image${Context?.city?.weather[0].main}`;
    // const CustomImage = Images.hasOwnProperty(key) ? (Images as any)[key] : null;

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
                    ? Context?.city?.temp.toString().split(".")[0]
                    : 0}°
            </Text>
            {/*{CustomImage && <CustomImage style={styles.Image}/>}*/}
        </LinearGradient>
    );
}
