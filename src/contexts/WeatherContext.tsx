import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useState,
} from "react";
import {Forecast} from "../models/ForecastModel";
import {ContextProviderProps} from "../@types/context-provider-props";
import {Root} from "../models/ModelPrueba";

interface ContextType {
    city: Root | undefined;
    setCity: Dispatch<SetStateAction<Root | undefined>>;
}

export const weatherContext = createContext<ContextType>({} as any);

export const WeatherContextProvider = ({children}: ContextProviderProps) => {
    const [city, setCity] = useState<Root>();

    return (
        <weatherContext.Provider
            value={{
                city,
                setCity,
            }}
        >
            {children}
        </weatherContext.Provider>
    );
};
