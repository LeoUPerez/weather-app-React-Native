import * as Location from "expo-location";

export default async function getLocation() {

    const permission = await Location.requestForegroundPermissionsAsync();
    const {coords} = await Location.getCurrentPositionAsync({});
    return {
        latitude: coords.latitude,
        longitude: coords.longitude,
    }
}