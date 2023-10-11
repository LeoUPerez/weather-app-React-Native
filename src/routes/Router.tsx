import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "../views/Home";
import CitiesFavView from "../views/FavoriteCities";
import { RootStackPramList } from "../@types/stack-navigation";


// export const Routes = {
//   FavoriteCity: "FavoriteCity",
//   Home: "Home",
// };


const Stack = createNativeStackNavigator<RootStackPramList>();


export default function RouterNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{headerShown:false, }} name='Home' component={HomeView} />
        <Stack.Screen name='FavoriteCity' component={CitiesFavView} />
      </Stack.Navigator>
     </NavigationContainer>
  );
}
