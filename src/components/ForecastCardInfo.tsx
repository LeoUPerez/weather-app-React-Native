import { ListRenderItemInfo, StyleSheet, Text, View } from "react-native";
import { City } from "../models/CityModel";
import { List } from "../models/ForecastModel";

type PropsType = {
    data: ListRenderItemInfo<List>
}

export default function Forecast_card_info({data} : PropsType) {
    
    return (
        <View style={styles.card_style}>
            <Text style={{color: "white"}}>{data.item.main.temp}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card_style:{
        width: 85,
        height: 110,
        padding: 3,
        marginHorizontal: 4,
        backgroundColor: "blue",
        borderRadius: 15
    }
})