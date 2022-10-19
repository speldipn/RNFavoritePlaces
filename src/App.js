import AddPlace from "./screens/AddPlace";
import AllPlaces from "./screens/AllPlaces";
import Map from "./screens/Map";
import PlaceDetail from "./screens/PlaceDetail";
import IconButton from "./components/UI/IconButton";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "./constants/Colors";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: Colors.gray700,
        contentStyle: { backgroundColor: Colors.gray700 },
      }}
    >
      <Stack.Screen
        name="all"
        component={AllPlaces}
        options={({ navigation }) => ({
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="add"
              size={24}
              color={tintColor}
              onPress={() => navigation.navigate("add")}
            />
          ),
        })}
      />
      <Stack.Screen name="add" component={AddPlace} />
      <Stack.Screen name="map" component={Map} />
      <Stack.Screen name="placeDetail" component={PlaceDetail} />
    </Stack.Navigator>
  );
}

function Root() {
  return <MainNavigation />;
}

function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
});

export default App;
