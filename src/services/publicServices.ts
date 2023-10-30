export const fetchWeather = (searchCity: string) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${process.env.API_ID}&units=metric`);
}