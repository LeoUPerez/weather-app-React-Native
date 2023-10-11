import { useState } from "react";

export function WeatherImage(weather: string): string {

    const [Case, setCase] = useState<string>("")

  switch (weather) {
    case "Clouds":
       setCase("../assets/images/clouds.png");
      break;

    case "Rain":
      setCase("../assets/images/rain.png")
      break;

  }

  return Case;
}
