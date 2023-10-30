import {fetchWeather} from "../services/publicServices";

export const useWeatherData = async (City: string) => {
    const response = await fetchWeather(City);

    if (response.ok) {
        return await response.json();
    } else
        alert("City not found");

    // return await fetchWeather(City).then(async (response) => {
    //     if (response.ok) {
    //         return await response.json()
    //     } else
    //         alert("City not found");
    // });
}

