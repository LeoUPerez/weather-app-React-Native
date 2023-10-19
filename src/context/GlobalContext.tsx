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

interface ContextProviderProps {
    children: React.ReactNode;
}

interface ContextType {
    fetchCity: (fetchMethod: boolean) => void;
    forecastCards: Array<CardForecast> | undefined;
    FetchForecastCity: (lat: number, lon: number) => void;
    city?: City;
    loading: boolean;
    permissions: string;
    searchCity: string;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setSearchCity: Dispatch<SetStateAction<string>>;
}

export const globalContext = createContext<ContextType>({} as any);

export const ContextProvider = ({children}: ContextProviderProps) => {
    const [searchCity, setSearchCity] = useState("");
    const [permissions, setPermissions] = useState("");
    const [loading, setLoading] = useState<boolean>(true);
    const [city, setCity] = useState<City>();
    const [forecastCards, setForecastCards] = useState<Array<CardForecast>>();

    const fetchCity = async (fetchMethod: boolean) => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status == "granted") {
            setPermissions("change");
        }
        let location = await Location.getCurrentPositionAsync({});
        const API_ID = "8926fd8755940c0fb62183daa7f7ebe6";

        const url = fetchMethod
            ? `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_ID}&units=metric`
            : `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_ID}&units=metric`;

        fetch(url)
            .then(async (response) => {
                if (response.ok) {
                    setLoading(true);
                    const city: City = await response.json();
                    setCity(city);
                    FetchForecastCity(city.coord.lat, city.coord.lon);
                    setTimeout(() => {
                        setLoading(false);
                    }, 1500);
                } else {
                    Alert.alert("Weather App Alert", "City not found");
                }
            })
            .catch((err) => {
                console.log(err);
            });

    };

    function FetchForecastCity(lat: number, lon: number) {
        let list: any = [];

        const API_ID = "8926fd8755940c0fb62183daa7f7ebe6";
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_ID}&units=metric`
        ).then(async (response) => {
            const ok: Forecast = await response.json();
            ok.list.map((item) => {
                const date = new Date(item.dt_txt);
                list.push({
                    hour: date.toLocaleTimeString("en-US"),
                    date: item.dt_txt.toString().split(' ')[0],
                    weather: item.weather[0].main,
                    temp: item.main.temp.toString(),
                });
            });

            setForecastCards(list);
        });
    }

    return (
        <globalContext.Provider
            value={{
                fetchCity,
                FetchForecastCity,
                searchCity,
                city,
                permissions,
                loading,
                forecastCards,
                setLoading,
                setSearchCity,
            }}
        >
            {children}
        </globalContext.Provider>
    );
};
