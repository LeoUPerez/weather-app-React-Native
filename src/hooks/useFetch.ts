import {useContext, useEffect, useState} from "react";
import {City} from "../models/CityModel";
import {Forecast} from "../models/ForecastModel";
import {weatherContext} from "../contexts/WeatherContext";
import {expoCamContext} from "../contexts/ExpoCamContext";
import {forecastContext} from "../contexts/ForecastContext";


export default function useFetch() {
    const ContextWeather = useContext(weatherContext);
    const ContextForecast = useContext(forecastContext);
    const getWeatherCity = (url: string) => {
        fetch(url)
            .then(async (res) => {
                ContextWeather.setCity(await res.json())
            }).catch((error) => {
            console.log(error)
        });
    }

    const getForecastCity = (url: string) => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => ContextWeather.setCity(data))
    }

    // function getWeather() {
    //     console.log("getWeather")
    // }


    // const Context = useContext(expoCamContext);

    // useEffect(() => {
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // console.log(url)
    // }, []);
    return {getWeatherCity, getForecastCity}
}

