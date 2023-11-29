import {ActivityIndicator, FlatList, View} from "react-native";
import IconBtn from "../IconBtn";
import {LinearGradient} from "expo-linear-gradient";
import {useContext} from "react";
import {dataBaseContext} from "../../contexts/DataBaseContext";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackPramList} from "../../@types/stack-navigation";

interface FavoritesCitiesProps {
    horizontal: boolean;
}

export default function FavoritesCities({horizontal}: FavoritesCitiesProps) {
    const Context = useContext(dataBaseContext);
    const navi = useNavigation<NativeStackNavigationProp<RootStackPramList>>();

    return (
        <View style={{
            width: "100%",
            height: horizontal ? "34%" : "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <View style={{
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
            }}>
                {
                    horizontal ?
                        <IconBtn
                            func={() => navi.navigate("FavoriteCity")}
                            text="Favorite Cities"
                            name="chevron-forward-outline"
                        /> :
                        null
                }
            </View>
            {
                Context.loading ?
                    <ActivityIndicator size={50}/> :
                    <FlatList style={{
                        marginHorizontal: 10.5,
                    }} data={Context.cities_fav} showsHorizontalScrollIndicator={false} horizontal={horizontal}
                              renderItem={() =>
                                  <LinearGradient
                                      style={{
                                          width: horizontal ? 175 : "97%",
                                          height: horizontal ? "100%" : 100,
                                          borderRadius: 15,
                                          marginHorizontal: 4,
                                          marginVertical: horizontal ? 0 : 4,
                                      }}
                                      colors={["rgba(69,121,241,255)", "transparent"]}
                                      end={{x: 2.8, y: 0}}
                                      start={{x: 2, y: 1}}
                                  ></LinearGradient>
                              }/>
            }
        </View>
    )
}