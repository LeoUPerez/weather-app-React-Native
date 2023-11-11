import {
    View,
    Text,
} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {WeatherContextProvider} from "../../contexts/WeatherContext";
import {useNavigation} from "@react-navigation/native";
import {RootStackPramList} from "../../@types/stack-navigation";
import Header from "../../components/Header";
import EstimatedDayForecast from "../../components/EstimatedDayForecast";
import EstimatedDayTemp from "../../components/EstimatedDayTemp";
import IconBtn from "../../components/IconBtn";
import {styles} from "./style";
import ExpoCam from "../../components/ExpoCam";
import {ExpoCamContextProvider} from "../../contexts/ExpoCamContext";
import EstimatedFiveDayForecast from "../../components/EstimatedFiveDayForecast";


export default function HomeView() {
    console.log("HomeView")
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
                        {/*<IconBtn*/}
                        {/*    func={() => navi.navigate("FavoriteCity")}*/}
                        {/*    text="5 day weather forecast"*/}
                        {/*    name="chevron-forward-outline"*/}
                        {/*/>*/}
                    </View>
                    <EstimatedFiveDayForecast/>
                </View>
            </WeatherContextProvider>
        </View>
    );
}

// const navi = useNavigation<NativeStackNavigationProp<RootStackPramList>>();
