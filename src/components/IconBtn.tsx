import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "../routes/Router";
import PropTypes from 'prop-types';

interface PropsType {
  text?: string;
  name: "search" | "chevron-forward-outline";
};

function IconBtn({ text, name }: PropsType) {
  const navigation = useNavigation<NativeStackNavigationProp<IRouteName>>();
  const Context = useContext(globalContext);

  return (
    <View style={styles.ContainerBtn}>
      <Text style={styles.TextStyle}>{text}</Text>
      <Ionicons
        onPress={ () => {
          // Context.fetchCityName();
          navigation.navigate(Routes.FavoriteCity);
        }}
        style={styles.IconButton}
        name={name}
      />
    </View>
  );
}

IconBtn.displayName = "IconBtn";

IconBtn.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.oneOf(['search', "chevron-forward-outline"])
}

const styles = StyleSheet.create({
  IconButton: {
    fontSize: 25,
    color: "rgb(33, 97, 140)",
  },
  ContainerBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  TextStyle: {
    fontWeight: "bold",
    color: "rgb(33, 97, 140)",
  },
});

export default IconBtn;