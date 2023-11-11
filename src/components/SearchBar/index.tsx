import React, {useState} from "react";
import {TextInput, View} from "react-native";
import {styles} from "./style";
import IconBtn from "../IconBtn";
import useFetch from "../../hooks/useFetch";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchBar() {
    const {getWeatherCity} = useFetch()

    const [searchCity, setSearchCity] = useState("");
    console.log("searchCity")

    return (
        <View style={{width: '85%', display: 'flex', flexDirection: 'row'}}>
            <TextInput
                onChangeText={(value) => {
                        setSearchCity(value.trim());
                }}
                style={styles.Input}
                placeholder="Search City"
            />

            <Ionicons name={'search'}
                      onPress={() => getWeatherCity(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${process.env.API_ID}&units=metric`)}
                      style={{fontSize: 35}}/>
            {/*<IconBtn*/}
            {/*    func={() => clear}*/}
            {/*    name="search"/>*/}
        </View>
    );
}
//
