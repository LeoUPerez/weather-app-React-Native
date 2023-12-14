import {Skeleton} from "moti/skeleton";
import {useContext} from "react";
import {weatherContext} from "../../contexts/WeatherContext";

export function ForecastCardInfoSkeleton(){
    const Context = useContext(weatherContext);

    return(
        <Skeleton
            show={Context.loading}
            width={85}
            height={110}
            colorMode="light"
            transition={{
                type: 'timing',
                duration: 3000,
            }}
        />
    )
}

export default function FavoriteCityItemSkeleton({horizontal}: {horizontal: boolean}){

    return(
        <Skeleton
            show={true}
            width={horizontal ? 175 : "97%"}
            height={horizontal ? "100%" : 100}
            colorMode="light"
            transition={{
                type: 'timing',
                duration: 3000,
            }}
        />
    )
}