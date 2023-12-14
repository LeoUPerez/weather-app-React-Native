import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    Container: {
        width: "70%",
        height: "65%",
        borderRadius: 20,
        marginBottom: 5,
        position: "relative",
    },
    Gradient: {
        width: "100%",
        height: "85%",
        borderRadius: 20,
    },
    TempTextStyle: {
        fontWeight: "900",
        fontSize: 140,
        textAlign: "right",
        color: "rgba(255, 255, 255, .9)",
        opacity: 0.8,
        paddingHorizontal: 5,
        marginTop: "-10%",
    },
    cityTextStyle: {
        color: "rgb(33, 97, 140)",
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
    },
    CityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        zIndex: 1,
        marginBottom: 5,
    },
    IconStyle: {
        fontSize: 25,
        color: "rgb(33, 97, 140)",
    },
    Image: {
        position: "absolute",
        bottom: "-10%",
        left: "-15%",
        width: 150,
        height: 150,
    },
});