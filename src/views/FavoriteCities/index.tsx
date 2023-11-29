import {Text, View} from "react-native";
import {useContext} from "react";
import {dataBaseContext} from "../../contexts/DataBaseContext";
import FavoritesCities from "../../components/FavoritesCities/FavoritesCities";

export default function CitiesFavView() {
    const Context = useContext(dataBaseContext);

    return (
        <View
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {Context.loading ? <Text>Loading...</Text> :
                <FavoritesCities horizontal={false}/>}
        </View>
    );
}
