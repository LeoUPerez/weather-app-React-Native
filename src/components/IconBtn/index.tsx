import {Text, TouchableOpacity} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import {styles} from "./style";

interface PropsType {
    text: string;
    name: "search" | "chevron-forward-outline";
    func: () => void;
}

export default function IconBtn({text, name, func}: PropsType) {
    return (
        <TouchableOpacity style={styles.ContainerBtn} onPress={() => func()}>
            <Text style={styles.TextStyle}>{text}</Text>
            <Ionicons name={name} style={styles.IconButton}></Ionicons>
        </TouchableOpacity>
    );
}
