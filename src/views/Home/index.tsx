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
import ExpoCam from "../../components/ExpoCam";
import {ExpoCamContextProvider} from "../../contexts/ExpoCamContext";
import * as Location from "expo-location";
import {City} from "../../models/CityModel";
import {useWeatherData} from "../../hooks/useWeatherData";
import onAuthenticate from "../../auth/onAuthenticate";
import useFetch from "../../hooks/useFetch";
import {ForecastContextProvider} from "../../contexts/ForecastContext";
import EstimatedFiveDayForecast from "../../components/EstimatedFiveDayForecast";

export default function HomeView() {
    const Context = useContext(weatherContext);
    const {getWeatherCity} = useFetch()

    // useEffect(() => {
    //     Location.getCurrentPositionAsync().then(({coords}) => {
    //         const {latitude, longitude} = coords;
    // console.log(latitude, longitude)
    // console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_ID}&units=metric`)
    // getWeather(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.API_ID}&units=metric`)
    // });
    // }, []);


    const navi = useNavigation<NativeStackNavigationProp<RootStackPramList>>();
// const auth = LocalAuthentication.authenticateAsync();


    console.log("HomeView")

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
                    {/*<IconBtn*/}
                    {/*    func={() => navi.navigate("FavoriteCity")}*/}
                    {/*    text="5 day weather forecast"*/}
                    {/*    name="chevron-forward-outline"*/}
                    {/*/>*/}
                </View>
                <ForecastContextProvider>
                    <EstimatedFiveDayForecast />
                </ForecastContextProvider>
            </View>
        </View>
    );
}
