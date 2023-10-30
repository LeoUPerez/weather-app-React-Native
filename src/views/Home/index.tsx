import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
} from "react-native";
import {useContext, useEffect, useState} from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {weatherContext, WeatherContextProvider} from "../../contexts/WeatherContext";
import {useNavigation} from "@react-navigation/native";
import {RootStackPramList} from "../../@types/stack-navigation";
import Header from "../../components/Header";
import EstimatedDayForecast from "../../components/EstimatedDayForecast";
import EstimatedDayTemp from "../../components/EstimatedDayTemp";
import IconBtn from "../../components/IconBtn";
import ForecastCardInfo from "../../components/ForecastCardInfo";
import {styles} from "./style";
import * as LocalAuthentication from 'expo-local-authentication'
import ExpoCam from "../../components/ExpoCam";
import {ExpoCamContextProvider} from "../../contexts/ExpoCamContext";
import * as Location from "expo-location";
import {City} from "../../models/CityModel";

export default function HomeView() {
    const Context = useContext(weatherContext);

    const navi = useNavigation<NativeStackNavigationProp<RootStackPramList>>();

    useEffect(() => {
        LocalAuthentication.authenticateAsync().then(async ({success}) => {

            // Context.fetchCity(false);
        })
    }, []);

    return (
        <View style={styles.container}>
            <WeatherContextProvider>
                <ExpoCamContextProvider>
                    <ExpoCam/>
                    <Header/>
                </ExpoCamContextProvider>
                {/**/}
                {/**/}
                <EstimatedDayTemp/>
                <EstimatedDayForecast/>
            </WeatherContextProvider>
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
                        data={[]} //Context.forecastCards
                        renderItem={(item) => <ForecastCardInfo data={item}/>}
                    />
                )}
            </View>
        </View>
    );
}
