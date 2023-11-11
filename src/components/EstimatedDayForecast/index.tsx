import {View} from "react-native";
import {useContext} from "react";
import {weatherContext} from "../../contexts/WeatherContext";
import {styles} from "./style";
import IconInfo from "../IconInfo";

export default function EstimatedDayForecast() {
    const Context = useContext(weatherContext);

    return (
        <View style={styles.EstimatesContainerStyles}>
            <IconInfo
                name="thermometer"
                text="Temp. max"
                data={Context.city!?.temp_max.toString().split(".")[0]}
            />
            <IconInfo
                name="water"
                text="Humidity"
                data={Context.city!?.humidity}
            />
            <IconInfo
                name="md-cloud"
                text="Wind speed"
                data={Context.city!?.wind_speed}
            />
        </View>
    );
};

