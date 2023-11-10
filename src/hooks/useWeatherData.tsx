import {fetchWeatherName} from "../services/publicServices";

export const useWeatherData = async (City: string, lat?: string, lot?: string) => {
    const response = await fetchWeatherName(City);

    if (response.ok) {
        return await response.json();
    } else
        alert("City not found");
}

