import {createContext, Dispatch, SetStateAction, useState} from "react";
import {ContextProviderProps} from "../@types/context-provider-props";
import {Forecast} from "../models/ForecastModel";
import {CardForecast} from "../models/CardForecastModel";

export const forecastContext = createContext<ContextType>({} as any);

interface ContextType {
    forecastCards: Array<CardForecast> | undefined;
    fetchForecastCity: (lat: number, lon: number) => void;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

export const ForecastContextProvider = ({children}: ContextProviderProps) => {
    const [forecastCards, setForecastCards] = useState<Array<CardForecast>>();
    const [loading, setLoading] = useState(true);

 async function fetchForecastCity(lat: number, lon: number) {
        let list: any = [];
        console.log("fetchForecastCity")
      const data = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_ID}&units=metric`
        )
     console.log("Before do await")
     console.log(await data.json())
     console.log("After do await")

    }

    return (
        <forecastContext.Provider value={{fetchForecastCity, forecastCards, loading, setLoading}}>
            {children}
        </forecastContext.Provider>
    )
}