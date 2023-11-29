import {Dimensions, StyleSheet, View} from "react-native";
import RouterNavigator from "./src/routes/Router";
import {useEffect} from "react";
import * as Location from "expo-location";
import * as LocalAuthentication from "expo-local-authentication";
import {DataBaseContextProvider} from "./src/contexts/DataBaseContext";

const windowHeight = Dimensions.get("window").height;

export default function App() {

    useEffect(() => {
        LocalAuthentication.authenticateAsync().then(async (res) => {
            await Location.requestForegroundPermissionsAsync();
        });
    }, []);

    return (
        <View style={styles.container_style}>
            <DataBaseContextProvider>
                <RouterNavigator/>
            </DataBaseContextProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container_style: {
        backgroundColor: "rgba(13, 151, 242, 0.15)",
        width: "100%",
        minHeight: windowHeight - 30,
        marginTop: 30,
    },
});
