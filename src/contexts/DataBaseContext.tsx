import {createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from "react";
import {ContextProviderProps} from "../@types/context-provider-props";
import * as Device from 'expo-device';
import {supabase} from "../supabase/initSupabase";
import {CustomCity} from "../models/CustomCityModel";
import {weatherContext} from "./WeatherContext";

interface ContextType {
    RegisterDevice: () => void;
    checkDeviceExistence: () => void;
    loading: boolean;
    onOffLoading: (loading: boolean) => void;
    getFavoriteCities: () => void;
    cities_fav: any;
    checkFavoriteCity: (cityName: string) => void;
    favorite: boolean;
}

export const dataBaseContext = createContext({} as ContextType);

export const DataBaseContextProvider = ({children}: ContextProviderProps) => {
    const [loading, setLoading] = useState(true);
    const [favorite, setFavorite] = useState(false);
    const [cities_fav, setCities_fav] = useState<Array<any>>([]);
    const deviceName = Device.deviceName;

    async function checkDeviceExistence() {
        let {data: device, error} = await supabase
            .from('devices')
            .select('*')
            .eq('id', deviceName);

        if (device!.length == 0)
            await RegisterDevice();
        else
            await getFavoriteCities();
    }

    const RegisterDevice = async () => {
        const {data, error} = await supabase
            .from('devices')
            .insert([
                {id: deviceName, favorite_cities: [{}, {}, {}]},
            ]);
        await getFavoriteCities();
    }

    async function getFavoriteCities() {
        // console.log("getFavoriteCities")
        onOffLoading(true);
        await supabase
            .from('devices')
            .select('favorite_cities')
            .eq('id', deviceName)
            .then((res) => {
                setCities_fav(res.data?.[0].favorite_cities);
            });

        // setCities_fav(devices![0].favorite_cities);

        setTimeout(() => {
            onOffLoading(false);
        }, 1500);
    }

    function onOffLoading(loading: boolean) {
        setLoading(loading);
    }

    async function UpdateFavoriteCities() {
        const {data, error} = await supabase
            .from('devices')
            .update({favorite_cities: [{name: ""}, {name: ""}, {name: "Santiago de los Caballeros"}, {name: ""}]})
            .eq('id', deviceName)

        if (error) {
            console.log(error);
            return;
        } else {
            console.log(data);
        }
    }

    async function checkFavoriteCity(nameCity: string) {
        if (cities_fav.length == 0) {
            await getFavoriteCities();
            return;
        }
        const validatorCityFav = await cities_fav!.find((city: any) => city.name == nameCity);
        if (validatorCityFav != undefined) {
            setFavorite(true);
        } else {
            setFavorite(false);
        }
    }

    return (
        <dataBaseContext.Provider value={{
            RegisterDevice,
            checkDeviceExistence,
            loading,
            onOffLoading,
            cities_fav,
            getFavoriteCities,
            checkFavoriteCity,
            favorite
        }}>
            {children}
        </dataBaseContext.Provider>
    )
}