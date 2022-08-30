import * as React from "react";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from "react-native";

// Current elevator status





function ElevatorStatus({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Elevator Status Screen</Text>
            <Button title="Home" onPress={() => navigation.navigate("Home")} />
            <Button title="Logout" onPress={() => navigation.navigate("Login")} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default ElevatorStatus;