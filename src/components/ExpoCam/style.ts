import {StyleSheet} from "react-native";

export const style = StyleSheet.create({
    takePhoto: {
        width: 100,
        height: 35,
        padding: 5,
        backgroundColor: 'green',
        borderRadius: 10,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    cancelPhoto: {
        width: 100,
        height: 35,
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 10,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    cameraON: {
        height: 450,
        width: "90%",
        borderRadius: 20,
        overflow: 'hidden',
        zIndex: 3
    },
    cameraOFF: {},
});