import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Contact from "./pages/Contact"




const Stack = createNativeStackNavigator()

export default function Router () {
    return (
        <Stack.Navigator initialRouteName="contact">
            <Stack.Screen name="contact" component={Contact}/>
        </Stack.Navigator>
    )
}