import Ionicons from "@expo/vector-icons/Ionicons";
import {useContext, useEffect} from "react";
import {dataBaseContext} from "../../contexts/DataBaseContext";
import {weatherContext} from "../../contexts/WeatherContext";
import {TouchableOpacity} from "react-native";

export default function FavoriteStar() {
    const ContextDB = useContext(dataBaseContext);
    const Context = useContext(weatherContext);

    useEffect(() => {
        ContextDB.checkFavoriteCity(Context.city?.name!);
    }, [Context.city!?.name]);

    return (
        <TouchableOpacity style={{zIndex: 1}}
                          onPress={() => ContextDB.UpdateFavoriteCities(ContextDB.favorite, Context.city!?.name)}>
            <Ionicons
                name={ContextDB.favorite ? "star" : "star-outline"} style={{zIndex: 0}} size={30}
                color={ContextDB.favorite ? "rgb(241, 196, 15 )" : "rgba(23, 32, 42, .5)"}/>
        </TouchableOpacity>
    )
}