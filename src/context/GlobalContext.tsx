import {
  Dispatch,
  SetStateAction,
  createContext,
  useRef,
  useState,
} from "react";
import { City } from "../models/CityModel";
import { Alert } from "react-native";
import { Forecast } from "../models/ForecastModel";

type ContextProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  fetchCity: () => void;
  forecastCity: Forecast | undefined;
  FetchForecastCity: (lat: number, lon: number) => void;
  city?: City;
  searchCity: string;
  setSearchCity: Dispatch<SetStateAction<string>>;
};

export const globalContext = createContext<ContextType>({} as any);

export const ContexProvider = ({ children }: ContextProviderProps) => {
  const lat = useRef();
  const lon = useRef();
  const [searchCity, setSearchCity] = useState("");
  const [city, setCity] = useState<City>();
  const [forecastCity, setForecastCity] = useState<Forecast>();

  const fetchCity = () => {
    const APIID = "8926fd8755940c0fb62183daa7f7ebe6";
    // console.log(searchCity);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIID}&units=metric`
    )
      .then(async (response) => {
        if (response.ok) {
          var city: City = await response.json();
          setCity(city);
          FetchForecastCity(city.coord.lat, city.coord.lon);
        } else {
          Alert.alert("Weather App Alert", "City not found");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(city!?.coord!?.lat, city!?.coord!?.lon, APIID);
      // city?.weather[0].id
      // console.log(data["main"]["temp"])
    //! city?.weather[0].main
  };

  return (
    <globalContext.Provider
      value={{
        fetchCity,
        FetchForecastCity,
        searchCity,
        city,
        forecastCity,
        setSearchCity,
      }}
    >
      {children}
    </globalContext.Provider>
  );
  function FetchForecastCity(lat: number, lon: number) {
    const APIID = "8926fd8755940c0fb62183daa7f7ebe6";
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIID}&units=metric`
    ).then(async (response) => {
      setForecastCity(await response.json());
    });
  }
};