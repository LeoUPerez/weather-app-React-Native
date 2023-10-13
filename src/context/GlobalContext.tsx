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
import * as Location from "expo-location";
import axios from "axios";

interface ContextProviderProps {
  children: React.ReactNode;
}

interface ContextType {
  fetchCityName: () => void;
  fetchCityLatLon: () => void;
  forecastCity: Forecast | undefined;
  FetchForecastCity: (lat: number, lon: number) => void;
  city?: City;
  loading: boolean;
  permissions: string;
  searchCity: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSearchCity: Dispatch<SetStateAction<string>>;
}

export const globalContext = createContext<ContextType>({} as any);

export const ContexProvider = ({ children }: ContextProviderProps) => {
  const [searchCity, setSearchCity] = useState("");
  const [permissions, setPermissions] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [load, setLoad] = useState(true);
  const [city, setCity] = useState<City>();
  const [forecastCity, setForecastCity] = useState<Forecast>();

  const fetchCityName = () => {
    const APIID = "8926fd8755940c0fb62183daa7f7ebe6";
    // console.log(searchCity);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIID}&units=metric`
    )
      .then(async (response) => {
        if (response.ok) {
          setLoading(true); //!loading
          var city: City = await response.json();
          setCity(city);
          FetchForecastCity(city.coord.lat, city.coord.lon);
          setTimeout(() => {
            setLoading(false); //!loading
          }, 1500);
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

  const fetchCityLatLon = async () => {
    console.log("fetchCityLatLon");

    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status == "granted") {
      setPermissions("change");
    }
    let location = await Location.getCurrentPositionAsync({});

    // if (load) {
    const APIID = "8926fd8755940c0fb62183daa7f7ebe6";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${APIID}&units=metric`
    )
      .then(async (response) => {
        var city: City = await response.json();
        setCity(city);
        console.log(city);
        
        // console.log("Hizo la peticion");
        // if (response.ok) {
        //   FetchForecastCity(city.coord.lat, city.coord.lon);
        //   setLoad(false);
        // }
      })


    // }
  };

  return (
    <globalContext.Provider
      value={{
        fetchCityName,
        fetchCityLatLon,
        FetchForecastCity,
        searchCity,
        city,
        permissions,
        loading,
        forecastCity,
        setLoading,
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
