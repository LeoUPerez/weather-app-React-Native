import {View, Text, TouchableOpacity, Button, Image} from "react-native";
import {styles} from "./style";
import * as ImagePicker from "expo-image-picker";
import {SetStateAction, useState} from "react";


export default function Avatar() {
    const [image, setImage] = useState<SetStateAction<any>>("");

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0]!.uri);
        }
    };

    return (
        <TouchableOpacity style={styles.Avatar} onPress={pickImage}>
            <Image source={!image ? require("../../assets/images/userDefault.jpg") : {uri: image}}
                   style={styles.Image}/>
        </TouchableOpacity>
    )
}