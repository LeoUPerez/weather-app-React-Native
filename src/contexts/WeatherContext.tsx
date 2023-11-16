import React, {
    Dispatch,
    SetStateAction,
    createContext,
    useState,
} from "react";
import {ContextProviderProps} from "../@types/context-provider-props";
import {CustomCity} from "../models/CustomCityModel";

interface ContextType {
    city: CustomCity | undefined;
    setCity: Dispatch<SetStateAction<CustomCity | undefined>>;
    loading: boolean;
    OnOffLoading: (loading: boolean) => void;
}

export const weatherContext = createContext<ContextType>({} as ContextType);
export const WeatherContextProvider = ({children}: ContextProviderProps) => {
    const [city, setCity] = useState<CustomCity>();
    const [loading, setLoading] = useState<boolean>(true);

    const onOffLoading = (loading: boolean) => {
        setLoading(loading);
    }

    return (
        <weatherContext.Provider
            value={{
                city,
                loading,
                setCity,
                OnOffLoading: onOffLoading,
            }}
        >
            {children}
        </weatherContext.Provider>
    );
};
