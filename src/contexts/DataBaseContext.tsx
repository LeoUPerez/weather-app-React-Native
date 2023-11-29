import {createContext, useState} from "react";
import {ContextProviderProps} from "../@types/context-provider-props";
import * as Device from 'expo-device';
import {supabase} from "../supabase/initSupabase";

interface ContextType {
    RegisterDevice: () => void;
    checkDeviceExistence: () => void;
    loading: boolean;
    onOffLoading: (loading: boolean) => void;
    getFavoriteCities: () => void;
    UpdateFavoriteCities: (favoriteCity: boolean, cityName: string) => void;
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
                {id: deviceName, favorite_cities: []},
            ]);
        await getFavoriteCities();
    }

    async function getFavoriteCities() {
        if (cities_fav.length == 0) {
            onOffLoading(true);
            setTimeout(() => {
                onOffLoading(false);
            }, 1500);
        }
        await supabase
            .from('devices')
            .select('favorite_cities')
            .eq('id', deviceName)
            .then((res) => {
                setCities_fav(res.data?.[0].favorite_cities);
            });


    }

    function onOffLoading(loading: boolean) {
        setLoading(loading);
    }

    async function UpdateFavoriteCities(favoriteCity: boolean, cityName: string) {
        setFavorite(!favoriteCity);
        if (favoriteCity) {
            const {data, error} = await supabase
                .from('devices')
                .update({favorite_cities: cities_fav.filter((city: any) => city.name != cityName)})
                .eq('id', deviceName)
        } else {
            cities_fav.push({name: cityName});
            const {data, error} = await supabase
                .from('devices')
                .update({favorite_cities: cities_fav})
                .eq('id', deviceName)
        }
        await getFavoriteCities();
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
            UpdateFavoriteCities,
            cities_fav,
            getFavoriteCities,
            checkFavoriteCity,
            favorite
        }}>
            {children}
        </dataBaseContext.Provider>
    )
}