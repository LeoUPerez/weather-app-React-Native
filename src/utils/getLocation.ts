import * as Location from "expo-location";

export default async function getLocation() {
    try {
        const permission = await Location.requestForegroundPermissionsAsync();
        const {coords} = await Location.getCurrentPositionAsync({});
        return {
            latitude: coords.latitude,
            longitude: coords.longitude,
        };
    } catch (error) {
        console.log(error + " Error getLocation")
    }
}