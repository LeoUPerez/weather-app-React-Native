import React, {MutableRefObject, useContext, useEffect, useRef, useState} from "react";
import {TextInput, View} from "react-native";
import {weatherContext} from "../../contexts/WeatherContext";
import {styles} from "./style";
import IconBtn from "../IconBtn";
import {fetchWeather} from "../../services/publicServices";
import {useWeatherData} from "../../hooks/useWeatherData";

export default function SearchBar() {

    const Context = useContext(weatherContext);
    const [searchCity, setSearchCity] = useState("");

    return (
        <View style={{width: '85%', display: 'flex', flexDirection: 'row'}}>
            <TextInput
                // ref={textInput}
                onChangeText={(value) => setSearchCity(value.trim())}
                style={styles.Input}
                placeholder="Search City"
            />
            <IconBtn func={async () => {
                const response = await useWeatherData(searchCity);
                if (response !== undefined) Context.setCity(response);
            }} name="search"/>
        </View>
    );
}
