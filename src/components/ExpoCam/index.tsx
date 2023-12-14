import {useContext} from "react";
import {Camera, CameraType} from "expo-camera";
import {Dimensions, Text, TouchableOpacity, View} from "react-native";
import {expoCamContext} from "../../contexts/ExpoCamContext";
import {style} from "./style";

export default function ExpoCam() {
    const Context = useContext(expoCamContext);
    const windowHei = Dimensions.get("window").height;

    return (
        <TouchableOpacity style={{
            position: "absolute",
            zIndex: 6,
            width: "100%",
            height: windowHei,
            display: Context.stateCamera ? "flex" : "none",
            backgroundColor: "transparent",
            alignItems: "center",
            gap: 5,
            paddingTop: 30,
        }}
        onPress={() => Context.cancelPicture()}
        >
            <View style={Context.stateCamera ? style.cameraON : style.cameraOFF}>
                {Context.stateCamera &&
                    <Camera ref={Context.camera} style={{width: "100%", height: 450}} type={CameraType.front}/>}
            </View>
            {Context.stateCamera &&
                <View style={{
                    width: "100%",
                    display: "flex",
                    gap: 10,
                    justifyContent: "center",
                    flexDirection: "row",
                }}>
                    <TouchableOpacity onPress={() => Context.takePicture()}><Text style={style.takePhoto}>Take a
                        photo</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => Context.cancelPicture()}><Text style={style.cancelPhoto}>Cancel Photo</Text></TouchableOpacity>
                </View>

            }
        </TouchableOpacity>
    )
};