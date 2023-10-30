import {Dimensions, ScrollView, StyleSheet, View} from "react-native";
import RouterNavigator from "./src/routes/Router";
// import {ContextProvider} from "./src/contexts/WeatherContext";
import {} from '@supabase/supabase-js'

const windowHeight = Dimensions.get("window").height;

export default function App() {
    return (
        <ScrollView>
            <View style={styles.container_style}>
                {/*<ContextProvider>*/}
                    <RouterNavigator/>
                {/*</ContextProvider>*/}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container_style: {
        backgroundColor: "rgba(13, 151, 242, 0.15)",
        width: "100%",
        minHeight: windowHeight,
        marginTop: 30,
    },
});
