import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useState,
} from "react";
import {City} from "../models/CityModel";
import {Alert} from "react-native";
import {Forecast} from "../models/ForecastModel";
import {CardForecast} from "../models/CardForecastModel";
import * as Location from "expo-location";
import {ContextProviderProps} from "../@types/context-provider-props";

interface ContextType {
    fetchCity: (fetchMethod: boolean) => void;
    forecastCards: Array<CardForecast> | undefined;
    fetchForecastCity: (lat: number, lon: number) => void;
    city?: City;
    loading: boolean;
    permissions: string;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setCity: Dispatch<SetStateAction<City | undefined>>;
}

export const weatherContext = createContext<ContextType>({} as any);

export const WeatherContextProvider = ({children}: ContextProviderProps) => {
    const [searchCity, setSearchCity] = useState("");
    const [permissions, setPermissions] = useState("");
    const [loading, setLoading] = useState<boolean>(true);
    const [city, setCity] = useState<City>();
    const [forecastCards, setForecastCards] = useState<Array<CardForecast>>();

    async function fetchCity(fetchMethod: boolean) {
        // let {status} = await Location.requestForegroundPermissionsAsync();
        // if (status == "granted") {
        //     setPermissions("change");
        // }
        // let location = await Location.getCurrentPositionAsync({});
        //
        // const url = fetchMethod
        //     ? `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${process.env.API_ID}&units=metric`
        //     : `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${process.env.API_ID}&units=metric`;
        //
        // fetch(url)
        //     .then(async (response) => {
        //         if (response.ok) {
        //             setLoading(true);
        //             const city: City = await response.json();
        //             setCity(city);
        //             fetchForecastCity(city.coord.lat, city.coord.lon);
        //         } else {
        //             Alert.alert("Weather App Alert", "City not found");
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        //
        // setTimeout(() => {
        //     setLoading(false);
        // }, 2000);
    }

    function fetchForecastCity(lat: number, lon: number) {
        let list: any = [];
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_ID}&units=metric`
        ).then(async (response) => {
            const ApiResponse: Forecast = await response.json();
            ApiResponse.list.map((item) => {
                const date = new Date(item.dt_txt);
                list.push({
                    hour: date.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"}),
                    date: date.toLocaleDateString('en-us', {year: "numeric", month: "short", day: "numeric"}),
                    weather: item.weather[0].main,
                    temp: Math.trunc(item.main.temp),
                });
            });

            setForecastCards(list);
        });
    }

    return (
        <weatherContext.Provider
            value={{
                fetchCity,
                fetchForecastCity,
                city,
                permissions,
                loading,
                forecastCards,
                setLoading,
                setCity,
            }}
        >
            {children}
        </weatherContext.Provider>
    );
};
