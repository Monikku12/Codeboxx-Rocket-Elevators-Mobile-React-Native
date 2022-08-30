import * as React from "react";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box } from "native-base";
import Login from "./components/Login";
import Home from "./components/Home";
import ElevatorStatus from "./components/ElevatorStatus";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
                    <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
                    <Stack.Screen name="ElevatorStatus" component={ElevatorStatus} options={{ title: "Elevator Status" }} />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default App;
