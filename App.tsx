import {Dimensions, StyleSheet, View} from "react-native";
import RouterNavigator from "./src/routes/Router";
import {useEffect} from "react";
import * as Location from "expo-location";
import * as LocalAuthentication from "expo-local-authentication";
import {DataBaseContextProvider} from "./src/contexts/DataBaseContext";

const windowHeight = Dimensions.get("window").height;

export default function App() {

    useEffect(() => {
        // LocalAuthentication.authenticateAsync().then(async (res) => {
        //     await Location.requestForegroundPermissionsAsync();
        // });
    }, []);

    return (
        <View style={{
            width: "100%",
            backgroundColor: "rgba(13, 151, 242, 0.15)",
            display: "flex",
            alignItems: "center",
        }}>
            <View style={styles.container_style}>
                <DataBaseContextProvider>
                    <RouterNavigator/>
                </DataBaseContextProvider>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container_style: {
        width: 430,
        height: 875,
        marginTop: 15,
        // minHeight: windowHeight - 30,
        // padding: 20,
    },
});
