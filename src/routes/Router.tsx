import {NavigationContainer} from "@react-navigation/native";
import {
    createNativeStackNavigator,
} from "@react-navigation/native-stack";
import {RootStackPramList} from "../@types/stack-navigation";
import HomeView from "../views/Home";
import CitiesFavView from "../views/FavoriteCities";

const Stack = createNativeStackNavigator<RootStackPramList>();

export default function RouterNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Home"
                    component={HomeView}
                />
                <Stack.Screen name="FavoriteCity" component={CitiesFavView}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
