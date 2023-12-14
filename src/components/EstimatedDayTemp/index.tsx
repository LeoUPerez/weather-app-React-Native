import {LinearGradient} from "expo-linear-gradient";
import {useContext, useEffect} from "react";
import {Text, View} from "react-native";
import {styles} from "./style";
import * as Images from "../Images";
import useFetch from "../../hooks/useFetch";
import * as Location from "expo-location";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavoriteStar from "../FavoriteStar/FavoriteStar";
import {weatherContext} from "../../contexts";

export default function EstimatedDayTemp() {
    const Context = useContext(weatherContext);
    const {getWeatherCity} = useFetch();

    useEffect(() => {
        Location.getCurrentPositionAsync({}).then(({coords}) => getWeatherCity(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.API_ID}&units=metric`));
    }, []);


    const key = `Image${Context?.city?.main}`;
    const CustomImage = Images.hasOwnProperty(key) ? (Images as any)[key] : null;

    return (
        <View style={styles.Container}>
            <View style={styles.CityContainer}>
                <Ionicons style={styles.IconStyle} name={'location'}/>
                <Text style={styles.cityTextStyle}>
                    {Context?.city && Context?.city?.name}
                </Text>
                <FavoriteStar/>
            </View>
            <LinearGradient
                colors={["rgba(69,121,241,255)", "transparent"]}
                end={{x: 2, y: 0}}
                start={{x: 0, y: 1}}
                style={styles.Gradient}>
                <Text style={styles.TempTextStyle}>
                    {Context?.city != undefined
                        ? Context?.city?.temp.toString().split(".")[0]
                        : 0}°
                </Text>
                {CustomImage && <CustomImage style={styles.Image}/>}
            </LinearGradient>
        </View>
    );
}
