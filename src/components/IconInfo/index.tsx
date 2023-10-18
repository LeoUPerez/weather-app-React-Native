import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalContext } from "../../context/GlobalContext";
import { styles } from "./style";

interface PropsType {
  name: "thermometer" | "water" | "md-cloud";
  text: string;
  data: number | string;
  defaultData?: string;
}

export default function IconInfo ({ name, text, defaultData, data }: PropsType) {
  const Context = useContext(globalContext);

  return (
    <View style={styles.IconInfoContainer}>
      <Ionicons name={name} size={30} color={"rgb(33, 97, 140)"} />
      <Text style={styles.DataStyle}>
        {data != undefined ? data : defaultData || 0}
        <Text>
          {text == "Wind speed" ? " km/h" : text != "Temp. max" ? "%" : "°"}
        </Text>
      </Text>

      <Text style={styles.TextStyle}>{text}</Text>
    </View>
  );
};

