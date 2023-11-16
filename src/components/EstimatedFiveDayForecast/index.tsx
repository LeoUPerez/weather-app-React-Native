import {ActivityIndicator, FlatList, View} from "react-native";
import ForecastCardInfo from "../ForecastCardInfo";
import {useContext, useEffect} from "react";
import {weatherContext} from "../../contexts/WeatherContext";

export default function EstimatedFiveDayForecast() {
    const Context = useContext(weatherContext);

    useEffect(() => {
        setTimeout(() => {
            Context.OnOffLoading(false);
        }, 2000);
    }, [Context]);

    return (
        <View>
            {Context.loading ? (
                <ActivityIndicator size={50}/>
            ) : (
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={Context.city?.estimateFiveDays}
                    renderItem={(item) => <ForecastCardInfo data={item}/>}
                />
            )}
        </View>
    )
}