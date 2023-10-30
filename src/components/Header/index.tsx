import {View} from "react-native";
import {useContext} from "react";
import {weatherContext} from "../../contexts/WeatherContext";
import {styles} from "./style";
import IconBtn from "../IconBtn";
import SearchBar from "../SearchBar";
import Avatar from "../Avatar";

export default function Header() {
    const Context = useContext(weatherContext);

    return (
        <View style={styles.Header}>
            <Avatar/>
            <SearchBar/>
        </View>
    );
}
