import {createContext} from "react";
import {ContextProviderProps} from "../@types/context-provider-props";

export const forecastContext = createContext({} as any);

export const ForecastContextProvider = ({children}: ContextProviderProps) => {
    return (
        <forecastContext.Provider value={{}}>
            {children}
        </forecastContext.Provider>
    )
}