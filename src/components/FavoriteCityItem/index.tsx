import {LinearGradient} from "expo-linear-gradient";
import {Pressable, Text} from "react-native";
import useFetch from "../../hooks/useFetch";

interface FavoriteCityItemProps {
    horizontal: boolean;
    data: any;
}

export default function FavoriteCityItem({horizontal, data}: FavoriteCityItemProps) {
    const {getWeatherCity} = useFetch();

    return (
        <Pressable
            onPress={() => getWeatherCity(`https://api.openweathermap.org/data/2.5/weather?q=${data.name}&appid=${process.env.API_ID}&units=metric`)}>
            <LinearGradient
                style={{
                    width: horizontal ? 175 : "97%",
                    height: horizontal ? "100%" : 100,
                    borderRadius: 15,
                    padding: 10,
                    marginVertical: horizontal ? 0 : 4,
                }}
                colors={["rgba(69,121,241,255)", "transparent"]}
                end={{x: 2.8, y: 0}}
                start={{x: 2, y: 1}}
            >
                <Text style={{
                    color: "white",
                }}>{data.name}</Text>
            </LinearGradient>
        </Pressable>
    )
}