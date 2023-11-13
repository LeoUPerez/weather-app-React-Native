import React, {useRef, useState} from "react";
import {TextInput, View} from "react-native";
import {styles} from "./style";
import IconBtn from "../IconBtn";
import useFetch from "../../hooks/useFetch";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SearchBar() {
    const {getWeatherCity} = useFetch();
    const [searchCity, setSearchCity] = useState<string>("");

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={(value) => setSearchCity(value)}
                style={styles.Input}
                placeholder="Search City"
            />
            <View style={{
                height: '100%',
                backgroundColor: 'red',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <Ionicons name={'search'}
                          onPress={() => getWeatherCity(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${process.env.API_ID}&units=metric`)}
                          style={{fontSize: 25}}/>
            </View>
            {/*<IconBtn*/}
            {/*    func={() => clear}*/}
            {/*    name="search"/>*/}
        </View>
    );
}
//
