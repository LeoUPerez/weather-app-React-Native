import {ForecastItemModel} from "./ForecastItemModelAPI";
import {CardForecast} from "./CardForecastModel";

export interface Root {
    name: string
    temp: number
    temp_max: number
    humidity: number
    wind_speed: number
    estimateFiveDays?: Array<CardForecast>
}
