import {useContext} from "react";
import {TextInput} from "react-native";
import {weatherContext} from "../../contexts/WeatherContext";
import {styles} from "./style";

export default function SearchBar() {
    const Context = useContext(weatherContext);

    return (
        <TextInput
            onChangeText={(value) => Context.setSearchCity(value.trim())}
            style={styles.Input}
            placeholder="Search City"
        />
    );
}
