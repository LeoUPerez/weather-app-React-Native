import {useContext} from "react";
import {City} from "../models/CityModel";
import {Forecast} from "../models/ForecastModel";
import {weatherContext} from "../contexts/WeatherContext";
import {CustomCity} from "../models/CustomCityModel";


export default function useFetch() {
    const ContextWeather = useContext(weatherContext);
    const getWeatherCity = async (url: string) => {
        ContextWeather.onLoading();

        try {
            const data = await fetch(url)
                .then(async (res) => {
                    const ApiResponse: City = await res.json();
                    return {
                        name: ApiResponse.name,
                        temp: Math.trunc(ApiResponse.main.temp),
                        temp_max: Math.trunc(ApiResponse.main.temp_max),
                        humidity: ApiResponse.main.humidity,
                        wind_speed: ApiResponse.wind.speed,
                        weather: ApiResponse.weather[0].main,
                        lat: ApiResponse.coord.lat,
                        lon: ApiResponse.coord.lon,
                    }
                })
            getForecastCity(data)
        } catch (e) {
            console.log(e + " Error useFetch")
        }
    }

    const getForecastCity = (weather: CustomCity) => {
        let list: any = [];
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
                loading: true,
            })
        });

        setTimeout(() => {
            ContextWeather.offLoading();
        }, 1500);
    }
    return {getWeatherCity, getForecastCity}
}

