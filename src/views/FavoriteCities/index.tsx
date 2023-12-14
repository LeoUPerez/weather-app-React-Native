import {Text, View} from "react-native";
import {useContext} from "react";
import FavoritesCities from "../../components/FavoritesCities/FavoritesCities";
import {dataBaseContext} from "../../contexts";

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
