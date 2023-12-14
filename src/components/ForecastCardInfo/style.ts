import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    Card: {
        width: 85,
        height: 110,
        padding: 3,
        backgroundColor: "blue",
        borderRadius: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    Hour: {
        color: "white",
        fontWeight: "bold",
        fontSize: 10
    },
    Date: {
        color: "white",
        fontWeight: "bold",
        fontSize: 10
    },
    Temp: {
        color: "white",
        fontWeight: "bold"
    },
    Image: {
        width: 45,
        height: 45,
    },
});