import {
    View,
    Text,
} from "react-native";
import {WeatherContextProvider} from "../../contexts/WeatherContext";
import Header from "../../components/Header";
import EstimatedDayForecast from "../../components/EstimatedDayForecast";
import EstimatedDayTemp from "../../components/EstimatedDayTemp";
import {styles} from "./style";
import ExpoCam from "../../components/ExpoCam";
import {ExpoCamContextProvider} from "../../contexts/ExpoCamContext";
import EstimatedFiveDayForecast from "../../components/EstimatedFiveDayForecast";
import {useContext, useEffect} from "react";
import {dataBaseContext} from "../../contexts/DataBaseContext";
import FavoritesCities from "../../components/FavoritesCities/FavoritesCities";

export default function HomeView() {

    const Context = useContext(dataBaseContext);

    useEffect(() => {
        Context.checkDeviceExistence();
    }, []);

    return (
        <View style={styles.container}>
            <WeatherContextProvider>
                <ExpoCamContextProvider>
                    <ExpoCam/>
                    <Header/>
                </ExpoCamContextProvider>
                <EstimatedDayTemp/>
                <EstimatedDayForecast/>
                <View style={styles.ContainerForecastStyle}>
                    <View style={styles.DaysForecastHeader}>
                        <Text style={{fontWeight: "bold", color: "rgb(33, 97, 140)"}}>
                            Today
                        </Text>
                    </View>
                    <EstimatedFiveDayForecast/>
                </View>
                <FavoritesCities horizontal={true}/>
            </WeatherContextProvider>
        </View>
    );
}

