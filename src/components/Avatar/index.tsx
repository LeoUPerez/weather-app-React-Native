import {Alert, Image, Text, TouchableOpacity} from "react-native";
import {styles} from "./style";
import * as ImagePicker from "expo-image-picker";
import {SetStateAction, useRef, useState} from "react";
import {createClient} from '@supabase/supabase-js'
import {Camera, CameraType} from 'expo-camera'


export default function Avatar() {
    const [image, setImage] = useState<SetStateAction<any>>("");
    const [stateCamera, setStateCamera] = useState(false)
    const camera: any = useRef();


    const pickImage = async () => {

        Alert.alert("", "¿Que desea?", [
            {
                text: 'Buscar foto en galeria',
                onPress: async () => {
                    let result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 1,
                    });

                    if (!result.canceled) {
                        setImage(result.assets[0]!.uri);
                        // uploadImageDB();
                    }
                },
            },
            {
                text: 'Tomar foto',
                onPress: async () => {
                    await Camera.requestCameraPermissionsAsync().then(({granted}) => {
                        if (granted) {
                            setStateCamera(true);
                        }
                    });

                },
            },
        ])
    };


    return (
        <TouchableOpacity style={styles.Avatar} onPress={pickImage}>
            {stateCamera &&
                <Camera ref={camera} style={{width: 200, height: 200}} type={CameraType.front} onCameraReady={() => {
                }}/>}
            {stateCamera && <TouchableOpacity onPress={() => {
                setStateCamera(false)
            }}><Text>Close</Text></TouchableOpacity>}
            <Image source={!image ? require("../../assets/images/userDefault.jpg") : {uri: image}}
                   style={styles.Image}/>
        </TouchableOpacity>
    )
}