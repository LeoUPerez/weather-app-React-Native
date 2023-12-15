import React, {useContext, useEffect, useState} from "react";
import {FlatList, Keyboard, Pressable, Text, TextInput, View} from "react-native";
import {styles} from "./style";
import useFetch from "../../hooks/useFetch";
import Ionicons from "@expo/vector-icons/Ionicons";
import {SuggestionsModel} from "../../models/SuggestionsModel";
import {weatherContext} from "../../contexts";

export default function SearchBar() {
    const {getWeatherCity} = useFetch();
    const Context = useContext(weatherContext);
    const [searchCity, setSearchCity] = useState<string>("");
    const [visibleSuggestions, setVisibleSuggestions] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);
    const [suggestions, setSuggestions] = useState<Array<SuggestionsModel>>([]);

    useEffect(() => {
        fetch(`https://api.locationiq.com/v1/autocomplete?key=${process.env.ACCESS_TOKEN_LOCATIONIQ}&q=${searchCity}&limit=6&dedupe=1`)
            .then((response) => response.json())
            .then((data) => {
                if (data.error == undefined) {
                    setSuggestions(data);
                }
            })
        if (searchCity.length == 0)
            setVisibleSuggestions(false)
    }, [searchCity]);

    useEffect(() => {
        setSearchCity("")
    }, [Context.city!?.name]);

    useEffect(() => {
        Keyboard.addListener("keyboardDidHide", () => {
            setFocus(false);
        });
        Keyboard.addListener("keyboardDidShow", () => {
            setFocus(true);
        });
    }, [Keyboard]);

    return (
        <View style={styles.container}>
            <View style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
            }}>
                <TextInput
                    onChange={({nativeEvent: {text}}) => {
                        setVisibleSuggestions(true);
                        setSearchCity(text);
                    }}
                    style={styles.Input}
                    focusable={focus}
                    value={searchCity}
                    placeholder="Search City"
                />
                <Ionicons name={'search'}
                          onPress={async () => {
                              await getWeatherCity(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${process.env.API_ID}&units=metric`)
                              setSuggestions([])
                          }}
                          style={{fontSize: 25}}/>
            </View>
            <View>
                <FlatList style={{
                    position: "absolute",
                    borderRadius: 10,
                    width: "88%",
                    top: -15,
                    display: visibleSuggestions ? "flex" : "none",
                    backgroundColor: "white",
                }} data={suggestions} renderItem={
                    ({item}) => {
                        return (
                            <Pressable style={{
                                display: "flex",
                                width: "100%",
                                flexDirection: "row",
                                alignItems: "center",
                                padding: 8,
                                gap: 5,
                            }} onPress={async () => {
                                setVisibleSuggestions(false);
                                setSearchCity(item.display_place)
                                await getWeatherCity(`https://api.openweathermap.org/data/2.5/weather?q=${item.display_place}&appid=${process.env.API_ID}&units=metric`)
                                setSuggestions([]);
                            }}>
                                <Ionicons name={'location'} style={{fontSize: 25}}/>
                                <View style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}>
                                    <Text>{item.display_place}</Text>
                                    <Text>{item.address.country}</Text>
                                </View>
                            </Pressable>
                        )
                    }
                }/>
            </View>
        </View>
    );
}

