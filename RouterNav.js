import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyList from "./MyList";
import Profile from "./Profile";

const Stack = createNativeStackNavigator();

export default function RouterNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyList"
          component={MyList}
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
