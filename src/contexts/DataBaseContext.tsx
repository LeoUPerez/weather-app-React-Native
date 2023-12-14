import {createContext, useEffect, useState} from "react";
import {ContextProviderProps} from "../@types/context-provider-props";
import * as Device from 'expo-device';
import {supabase} from "../supabase/initSupabase";

interface ContextType {
    RegisterDevice: () => void;
    checkDeviceExistence: () => void;
    loading: boolean;
    onOffLoading: (loading: boolean) => void;
    getFavoriteCities: () => void;
    UpdateFavoriteCities: (cityName: string, favorite: boolean) => void;
    cities_fav: any;
    checkFavoriteCity: (cityName: string) => Promise<boolean>;
}

export const dataBaseContext = createContext({} as ContextType);

export const DataBaseContextProvider = ({children}: ContextProviderProps) => {
    const [loading, setLoading] = useState(true);
    const [cities_fav, setCities_fav] = useState<Array<any>>([]);
    const deviceName = Device.deviceName;

    async function checkDeviceExistence() {
        let {data: device, error} = await supabase
            .from('devices')
            .select('*')
            .eq('id', deviceName);

        if (device!.length != 0)
            await getFavoriteCities();
        else
            await RegisterDevice();
    }

    async function RegisterDevice() {
        await supabase
            .from('devices')
            .insert([
                {id: deviceName, favorite_cities: []},
            ]);
    }

    async function getFavoriteCities() {
        await supabase
            .from('devices')
            .select('favorite_cities')
            .eq('id', deviceName)
            .then((res) => {
                setCities_fav(res.data?.[0].favorite_cities);
                setLoading(false);
            });
    }

    function onOffLoading(loading: boolean) {
        setLoading(loading);

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }

    async function UpdateFavoriteCities(cityName: string, favorit: boolean) {
        if (favorit) {
            cities_fav.push({name: cityName});
            await supabase
                .from('devices')
                .update({favorite_cities: cities_fav})
                .eq('id', deviceName)

        } else {

            await supabase
                .from('devices')
                .update({favorite_cities: cities_fav.filter((city: any) => city.name != cityName)})
                .eq('id', deviceName)
        }
        await getFavoriteCities();
    }

    async function checkFavoriteCity(nameCity: string) {
        const validatorCityFav = await cities_fav!.find((city: any) => city.name == nameCity);
        return validatorCityFav != undefined;
    }

    return (
        <dataBaseContext.Provider value={{
            RegisterDevice,
            checkDeviceExistence,
            loading,
            onOffLoading,
            UpdateFavoriteCities,
            cities_fav,
            getFavoriteCities,
            checkFavoriteCity,
        }}>
            {children}
        </dataBaseContext.Provider>
    )
}