import Ionicons from "@expo/vector-icons/Ionicons";
import {useContext, useEffect, useState} from "react";
import {TouchableOpacity} from "react-native";
import {dataBaseContext, weatherContext} from "../../contexts";

export default function FavoriteStar() {
    const ContextDB = useContext(dataBaseContext);
    const Context = useContext(weatherContext);
    const [favorite, setFavorite] = useState<boolean>(false);

    useEffect(() => {
        ContextDB.checkFavoriteCity(Context.city?.name!).then((res: boolean) => {
            setFavorite(res!);
        });
    }, [ContextDB.cities_fav]);

    useEffect(() => {
        ContextDB.checkFavoriteCity(Context.city?.name!).then((res: boolean) => {
            setFavorite(res!);
        });
    }, [Context.city]);

    return (
        <TouchableOpacity
            onPress={() => {
                setFavorite(!favorite);
                ContextDB.UpdateFavoriteCities(Context.city!?.name, !favorite);
            }}>
            <Ionicons
                name={favorite ? "star" : "star-outline"}
                size={30}
                color={favorite ? "rgb(241, 196, 15 )" : "rgba(23, 32, 42, .5)"}/>
        </TouchableOpacity>
    )
}