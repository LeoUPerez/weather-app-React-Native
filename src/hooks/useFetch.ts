import {useContext, useEffect} from "react";
import {City} from "../models/CityModel";
import {Forecast} from "../models/ForecastModel";
import {CustomCity} from "../models/CustomCityModel";
import {Alert} from "react-native";
import {CardForecast} from "../models/CardForecastModel";
import {weatherContext} from "../contexts";

export default function useFetch() {
    const ContextWeather = useContext(weatherContext);

    const getWeatherCity = async (url: string) => {
        try {
            await fetch(url)
                .then(async (res) => {
                    if (res.ok) {
                        ContextWeather.OnOffLoading(true);
                        const ApiResponse: City = await res.json();
                        const data = {
                            name: ApiResponse.name,
                            temp: Math.trunc(ApiResponse.main.temp),
                            temp_max: Math.trunc(ApiResponse.main.temp_max),
                            humidity: ApiResponse.main.humidity,
                            wind_speed: ApiResponse.wind.speed,
                            weather: ApiResponse.weather[0].main,
                            lat: ApiResponse.coord.lat,
                            lon: ApiResponse.coord.lon,
                            main: ApiResponse.weather[0].main
                        }
                        getForecastCity(data);
                    } else {
                        Alert.alert("Error", "City not found")
                    }
                })
        } catch (e) {
            console.log(e + " Error useFetch")
        }

    }
    const getForecastCity = (weather: CustomCity) => {
        let list: CardForecast[] = [];
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${weather.lat}&lon=${weather.lon}&appid=${process.env.API_ID}&units=metric`
        ).then(async (response) => {
            const ApiResponse: Forecast = await response.json();
            ApiResponse.list.map((item) => {
                const date = new Date(item.dt_txt);
                list.push({
                    hour: date.toLocaleTimeString("en-US", {hour: "2-digit", minute: "2-digit"}),
                    date: date.toLocaleDateString('en-us', {year: "numeric", month: "short", day: "numeric"}),
                    weather: item.weather[0].main,
                    temp: Math.trunc(item.main.temp),
                });
            });

            ContextWeather.setCity({
                name: weather.name,
                temp: weather.temp,
                temp_max: weather.temp_max,
                humidity: weather.humidity,
                wind_speed: weather.wind_speed,
                estimateFiveDays: list,
                lat: weather.lat,
                lon: weather.lon,
                main: weather.main
            })
        });
    }
    return {getWeatherCity, getForecastCity}
}

