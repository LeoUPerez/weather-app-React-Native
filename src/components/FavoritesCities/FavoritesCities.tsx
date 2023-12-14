import {ActivityIndicator, FlatList, Text, View} from "react-native";
import IconBtn from "../IconBtn";
import {LinearGradient} from "expo-linear-gradient";
import {useContext, useEffect} from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackPramList} from "../../@types/stack-navigation";
import FavoriteCityItem from "../FavoriteCityItem";
import FavoriteCityItemSkeleton, {ForecastCardInfoSkeleton} from "../Skeletons";
import {dataBaseContext} from "../../contexts";

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
            alignContent: Context.cities_fav.length == 1 ? "flex-start" : "center",

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
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        ItemSeparatorComponent={() => <View style={{width: 4.5}}/>}
                        renderItem={() => <FavoriteCityItemSkeleton horizontal={horizontal}/>}
                    />
                    :
                    Context.cities_fav.length > 0 ?
                        <FlatList style={{marginHorizontal: 10.5,}}
                                  data={Context.cities_fav}
                                  ItemSeparatorComponent={() => <View style={{width: 4.5}}/>}
                                  showsHorizontalScrollIndicator={false} horizontal={horizontal}
                                  renderItem={({index}) =>
                                      <FavoriteCityItem data={Context.cities_fav[index]} horizontal={horizontal}/>
                                  }/> :
                        <Text style={{
                            height: "100%",
                        }}>
                            No favorite cities
                        </Text>
            }
        </View>
    )
}