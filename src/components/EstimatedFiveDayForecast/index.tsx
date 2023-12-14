import {ActivityIndicator, FlatList, View} from "react-native";
import ForecastCardInfo from "../ForecastCardInfo";
import {useContext, useEffect} from "react";
import {weatherContext} from "../../contexts/WeatherContext";
import {ForecastCardInfoSkeleton} from "../Skeletons";

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
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        ItemSeparatorComponent={() => <View style={{width: 4.5}}/>}
                        renderItem={() => <ForecastCardInfoSkeleton/>}
                    />

            ) : (
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={Context.city?.estimateFiveDays}
                    ItemSeparatorComponent={() => <View style={{width: 4.5}}/>}
                    renderItem={(item) => <ForecastCardInfo data={item}/>}
                />
            )}
        </View>
    )
}