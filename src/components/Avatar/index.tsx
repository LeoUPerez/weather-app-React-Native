import {Image, TouchableOpacity} from "react-native";
import {styles} from "./style";
import {useContext} from "react";
import {expoCamContext} from "../../contexts/ExpoCamContext";

export default function Avatar() {

    const Context = useContext(expoCamContext);

    return (
        <TouchableOpacity style={styles.Avatar} onPress={Context.selectActions}>
            <Image source={!Context.image ? require("../../assets/images/userDefault.jpg") : {uri: Context.image}}
                   style={styles.Image}/>
        </TouchableOpacity>
    )
}