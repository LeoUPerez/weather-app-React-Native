import Ionicons from "@expo/vector-icons/Ionicons";
import {useContext, useEffect} from "react";
import {dataBaseContext} from "../../contexts/DataBaseContext";
import {weatherContext} from "../../contexts/WeatherContext";

export default function FavoriteStar() {
    const ContextDB = useContext(dataBaseContext);
    const Context = useContext(weatherContext);

    useEffect(() => {
        ContextDB.checkFavoriteCity(Context.city?.name!);
    }, [Context.city!?.name]);

    return (
        <Ionicons name={ContextDB.favorite ? "star" : "star-outline"} style={{}} size={30}
                  color={ContextDB.favorite ? "rgb(241, 196, 15 )" : "rgba(23, 32, 42, .5)"}/>
    )
}