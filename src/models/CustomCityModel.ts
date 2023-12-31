import {CardForecast} from "./CardForecastModel";

export interface CustomCity {
    name: string
    temp: number
    temp_max: number
    humidity: number
    wind_speed: number
    estimateFiveDays?: Array<CardForecast>
    lat: number
    lon: number
    main: string
}
