import {View} from "react-native";
import {styles} from "./style";
import SearchBar from "../SearchBar";
import Avatar from "../Avatar";

export default function Header() {

    return (
        <View style={styles.Header}>
            <Avatar/>
            <SearchBar/>
        </View>
    );
}
