import {useContext} from "react";
import {Camera, CameraType} from "expo-camera";
import {Text, TouchableOpacity, View} from "react-native";
import {expoCamContext} from "../../contexts/ExpoCamContext";
import {style} from "./style";

export default function ExpoCam() {
    const Context = useContext(expoCamContext);

    return (
        <View style={Context.stateCamera ? style.cameraON : style.cameraOFF}>
            {Context.stateCamera &&
                <Camera ref={Context.camera} style={{width: '100%', height: '90%'}} type={CameraType.front}/>}
            {Context.stateCamera &&
                <TouchableOpacity onPress={() => Context.takePicture()}><Text style={style.textBtn}>Take a
                    photo</Text></TouchableOpacity>}
        </View>
    )
};