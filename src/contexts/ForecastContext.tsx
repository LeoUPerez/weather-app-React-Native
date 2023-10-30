import {createContext, useState} from "react";
import {ContextProviderProps} from "../@types/context-provider-props";
import {Forecast} from "../models/ForecastModel";
import {CardForecast} from "../models/CardForecastModel";

export const forecastContext = createContext<ContextType>({} as any);

interface ContextType {
    forecastCards: Array<CardForecast> | undefined;
    fetchForecastCity: (lat: number, lon: number) => void;
}

export const ForecastContextProvider = ({children}: ContextProviderProps) => {
    const [forecastCards, setForecastCards] = useState<Array<CardForecast>>();


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

            // setForecastCards(list);
        });
    }

    return (
        <forecastContext.Provider value={{fetchForecastCity, forecastCards}}>
            {children}
        </forecastContext.Provider>
    )
}