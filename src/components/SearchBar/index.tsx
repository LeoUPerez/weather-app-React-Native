import React, {useContext, useState} from "react";
import {TextInput, View} from "react-native";
import {weatherContext} from "../../contexts/WeatherContext";
import {styles} from "./style";
import IconBtn from "../IconBtn";
import {useWeatherData} from "../../hooks/useWeatherData";
import useFetch from "../../hooks/useFetch";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchBar() {
    const {getWeatherCity} = useFetch()

    const Context = useContext(weatherContext);
    const [searchCity, setSearchCity] = useState("");
    const url = ``;

    return (
        <View style={{width: '85%', display: 'flex', flexDirection: 'row'}}>
            <TextInput
                onChangeText={(value) => setSearchCity(value.trim())}
                style={styles.Input}
                placeholder="Search City"
            />

            <Ionicons name={'search'}
                      onPress={() => null}
                      style={{fontSize: 35}}/>
            {/*<IconBtn*/}
            {/*    func={() => clear}*/}
            {/*    name="search"/>*/}
        </View>
    );
}
// Context.setCity(getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${process.env.API_ID}&units=metric`))
