import {ActivityIndicator, FlatList, View} from "react-native";
import ForecastCardInfo from "../ForecastCardInfo";
import {useContext, useEffect} from "react";
import {forecastContext} from "../../contexts/ForecastContext";
import * as Location from "expo-location";


export default function EstimatedFiveDayForecast() {
    const Context = useContext(forecastContext);

    console.log("EstimatedFiveDayForecast")

    useEffect(() => {
        console.log("before EstimatedFiveDayForecast useEffect")
        Location.getCurrentPositionAsync().then(({coords}) => {
            // const {latitude, longitude} = coords;
            // Context.fetchForecastCity(latitude, longitude);
            console.log(coords)
        });
        console.log("after EstimatedFiveDayForecast useEffect")
    }, []);

    return (
        <View>
            {!Context.forecastCards ? (
                <ActivityIndicator size={50}/>
            ) : (
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={Context.forecastCards}
                    renderItem={(item) => <ForecastCardInfo data={item}/>}
                />
            )}
        </View>
    )
}