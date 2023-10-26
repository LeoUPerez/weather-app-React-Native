import Ionicons from "@expo/vector-icons/Ionicons";
import {Text, View} from "react-native";
import {styles} from "./style";

interface PropsType {
    name: "thermometer" | "water" | "md-cloud";
    text: string;
    data: number | string;
}

export default function IconInfo({name, text, data}: PropsType) {

    return (
        <View style={styles.IconInfoContainer}>
            <Ionicons name={name} size={30} color={"rgb(33, 97, 140)"}/>
            <Text style={styles.DataStyle}>
                {data != undefined ? data : 0}
                <Text>
                    {text == "Wind speed" ? " km/h" : text == "Temp. max" ? "°" : "%"}
                </Text>
            </Text>
            <Text style={styles.TextStyle}>{text}</Text>
        </View>
    );
};

