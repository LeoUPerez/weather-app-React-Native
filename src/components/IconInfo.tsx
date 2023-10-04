import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalContext } from "../context/GlobalContext";

type PropsType = {
  name: "thermometer" | "water" | "md-cloud";
  text: string;
  data: number | string;
  defaultData: string;
};

export default function IconInfo({
  name,
  text,
  defaultData,
  data,
}: PropsType) {
  const Context = useContext(globalContext);

  return (
    <View style={styles.icon_info_container}>
      <Ionicons name={name} size={30} color={"rgb(33, 97, 140)"} />
      <Text style={styles.data_style}>
        {data != undefined ? data : defaultData}
        <Text>
          {text == "Wind speed" ? " km/h" : text != "Temp. max" ? "%" : "°"}
        </Text>
      </Text>

      <Text style={styles.text_style}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  icon_info_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text_style: {
    color: "rgba(69,121,241,.4)",
    fontWeight: "bold",
    fontSize: 15,
  },
  data_style: {
    color: "rgb(33, 97, 140)",
    fontWeight: "bold",
    fontSize: 15,
  },
});
