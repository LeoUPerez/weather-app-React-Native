import {useContext, useState} from "react";
import {TextInput, View} from "react-native";
import {weatherContext} from "../../contexts/WeatherContext";
import {styles} from "./style";
import IconBtn from "../IconBtn";

export default function SearchBar() {
    const Context = useContext(weatherContext);
    const [searchCity, setSearchCity] = useState("");

    function fetchCity() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${process.env.API_ID}&units=metric`)
            .then(async (response) => {
                Context.setCity(await response.json());
            })
    }

    return (
        <View style={{width: '85%', display: 'flex', flexDirection: 'row'}}>
            <TextInput
                onChangeText={(value) => setSearchCity(value.trim())}
                style={styles.Input}
                placeholder="Search City"
            />
            <IconBtn func={() => fetchCity()} name="search" text=""/>
        </View>
    );
}
