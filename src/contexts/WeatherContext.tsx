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
    onLoading: () => void;
    offLoading: () => void
}

export const weatherContext = createContext<ContextType>({} as ContextType);

export const WeatherContextProvider = ({children}: ContextProviderProps) => {
    const [city, setCity] = useState<CustomCity>();
    const [loading, setLoading] = useState<boolean>(true);

   const onLoading = () => {
        setLoading(true);
   }
   const offLoading = () => {
        setLoading(false);
   }

    return (
        <weatherContext.Provider
            value={{
                city,
                loading,
                setCity,
                onLoading,
                offLoading
            }}
        >
            {children}
        </weatherContext.Provider>
    );
};
