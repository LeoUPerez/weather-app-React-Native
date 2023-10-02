import { Dispatch, SetStateAction, createContext, useState } from "react";
import { City } from "../models/city_model";

type ContextProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  fetchCity: () => void;
  city?: City;
  searchCity: string;
  setSearchCity: Dispatch<SetStateAction<string>>;
};

export const globalContext = createContext<ContextType>({} as any);

export const ContexProvider = ({ children }: ContextProviderProps) => {
  const [searchCity, setSearchCity] = useState("");
  const [city, setCity] = useState<City>();

  const fetchCity = () => {
    const APIID = "8926fd8755940c0fb62183daa7f7ebe6";
    // console.log(searchCity);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIID}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setCity(data); 
        // console.log(data["main"]["temp"])
      });
    // .catch((err) => {
    //   console.log(err);
    // });
    //! city?.weather[0].main
  };

  return (
    <globalContext.Provider value={{ fetchCity, searchCity, city, setSearchCity }}>
      {children}
    </globalContext.Provider>
  );
};
