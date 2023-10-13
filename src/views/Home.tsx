import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import { globalContext } from "../context/GlobalContext";
import { SetStateAction, useContext, useEffect, useState } from "react";
import ForecastCardInfo from "../components/ForecastCardInfo";
import Header from "../components/Header";
import Icon_btn from "../components/IconBtn";
import EstimatedDayForecast from "../components/EstimatedDayForecast";
import EstimatedDayTemp from "../components/EstimatedDayTemp";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackPramList } from "../@types/stack-navigation";
import { useNavigation } from "@react-navigation/native";

export default function HomeView() {
  const Context = useContext(globalContext);

  const navi = useNavigation<NativeStackNavigationProp<RootStackPramList>>();

  useEffect(() => {
    Context.fetchCityLatLon();
  }, [Context.permissions]);

  setTimeout(() => {
    Context.setLoading(false);
  }, 3000);

  return (
    <View style={styles.container}>
      <Header />
      <EstimatedDayTemp />
      <EstimatedDayForecast />
      <View style={styles.ContainerForecastStyle}>
        <View style={styles.DaysForecastHeader}>
          <Text style={{ fontWeight: "bold", color: "rgb(33, 97, 140)" }}>
            Today
          </Text>
          <Icon_btn
            func={() => navi.navigate("FavoriteCity")}
            text="5 day weather forecast"
            name="chevron-forward-outline"
          />
        </View>
        {Context.loading ? (
          <ActivityIndicator size={50} />
        ) : (
          <FlatList
            horizontal={true}
            data={Context.forecastCity?.list}
            renderItem={(item) => <ForecastCardInfo data={item} />}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "45%",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  ContainerForecastStyle: {
    width: "100%",
    height: 170,
    padding: 15,
  },
  DaysForecastHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
