import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
} from "react-native";
import {useContext, useEffect} from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {globalContext} from "../../context/GlobalContext";
import {useNavigation} from "@react-navigation/native";
import {RootStackPramList} from "../../@types/stack-navigation";
import Header from "../../components/Header";
import EstimatedDayForecast from "../../components/EstimatedDayForecast";
import EstimatedDayTemp from "../../components/EstimatedDayTemp";
import IconBtn from "../../components/IconBtn";
import ForecastCardInfo from "../../components/ForecastCardInfo";
import {styles} from "./style";

export default function HomeView() {
    const Context = useContext(globalContext);

    const navi = useNavigation<NativeStackNavigationProp<RootStackPramList>>();


    useEffect(() => {
        Context.fetchCity(false);

    }, [Context.permissions]);

    setTimeout(() => {
        Context.setLoading(false);
    }, 3000);

    return (
        <View style={styles.container}>
            <Header/>
            {/**/}
            <Text>{Context.city?.name}</Text>
            {/**/}
            <EstimatedDayTemp/>
            <EstimatedDayForecast/>
            <View style={styles.ContainerForecastStyle}>
                <View style={styles.DaysForecastHeader}>
                    <Text style={{fontWeight: "bold", color: "rgb(33, 97, 140)"}}>
                        Today
                    </Text>
                    <IconBtn
                        func={() => navi.navigate("FavoriteCity")}
                        text="5 day weather forecast"
                        name="chevron-forward-outline"
                    />
                </View>
                {Context.loading ? (
                    <ActivityIndicator size={50}/>
                ) : (
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={Context.forecastCards}
                        renderItem={(item) => <ForecastCardInfo data={item}/>}
                    />
                )}
            </View>
        </View>
    );
}
