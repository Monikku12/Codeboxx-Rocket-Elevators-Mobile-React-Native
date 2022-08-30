import * as React from "react";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Login Screen</Text>
            <Button title="Login" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <Button title="Elevator Status" onPress={() => navigation.navigate("ElevatorStatus")} />
            <Button title="Logout" onPress={() => navigation.navigate("Login")} />
        </View>
    );
}

function ElevatorStatus({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Elevator Status Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
            <Button title="again" onPress={() => navigation.navigate("Details")} />
            <Button title="Logout" onPress={() => navigation.navigate("Login")} />
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
                <Stack.Screen name="ElevatorStatus" component={ElevatorStatus} options={{ title: "Elevator Status" }} />
            </Stack.Navigator>
        </NavigationContainer>
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
