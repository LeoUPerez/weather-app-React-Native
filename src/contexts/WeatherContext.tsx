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
    city?: City;
    loading: boolean;
    // permissions: string;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setCity: Dispatch<SetStateAction<City | undefined>>;
}

export const weatherContext = createContext<ContextType>({} as any);

export const WeatherContextProvider = ({children}: ContextProviderProps) => {
    // const [searchCity, setSearchCity] = useState("");
    // const [permissions, setPermissions] = useState("");
    const [loading, setLoading] = useState<boolean>(true);
    const [city, setCity] = useState<City>();

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


    return (
        <weatherContext.Provider
            value={{
                fetchCity,
                city,
                loading,
                setLoading,
                setCity,
            }}
        >
            {children}
        </weatherContext.Provider>
    );
};
