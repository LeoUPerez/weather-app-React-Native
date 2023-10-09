import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "../views/Home";
import CitiesFavView from "../views/FavoriteCities";

const Stack = createNativeStackNavigator<IRouteName>();

export const Routes = {
  FavoriteCity: "FavoriteCity",
  Home: "Home",
};

export default function RouterNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Home}>
        <Stack.Screen name={Routes.Home} component={HomeView} />
        <Stack.Screen name={Routes.FavoriteCity} component={CitiesFavView} />
      </Stack.Navigator>
     </NavigationContainer>
  );
}
