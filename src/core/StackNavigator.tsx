import { View, Text } from "tamagui";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


import WelcomeScreen from "@screens/WelcomeScreen";
import HomeScreen from "@screens/HomeScreen";
import ChatScreen from "@screens/ChatScreen";
import DonationScreen from "@screens/DonationScreen";
import NotebookScreen from "@screens/NotebookScreen";

const Stack = createStackNavigator();


export default function StackNavigator () {



    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="SearchExpert" component={ChatScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Chatroom" component={ChatScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Donation" component={DonationScreen} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Notebook" component={NotebookScreen} options={{
                    headerShown: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}