import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image, FlatList, Alert } from "react-native";
import { globalContext } from "../context/GlobalContext";
import { SetStateAction, useContext, useEffect, useState } from "react";
import ForecastCardInfo from "../components/ForecastCardInfo";
import Header from "../components/Header";
import Icon_btn from "../components/IconBtn";
import EstimatedDayForecast from "../components/EstimatedDayForecast";
import EstimatedDayTemp from "../components/EstimatedDayTemp";
import * as Location from "expo-location";

export default function HomeView() {
  const Context = useContext(globalContext);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        Context.fetchCityLatLon(
          location.coords.latitude,
          location.coords.longitude
        );
        return;
      }
    })();
  }, []);

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
            text="5 day weather forecast"
            name="chevron-forward-outline"
          />
        </View>
        <FlatList
          horizontal={true}
          data={Context.forecastCity?.list}
          renderItem={(item) => <ForecastCardInfo data={item} />}
        />
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
