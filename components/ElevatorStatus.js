import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";

// Current elevator status

function ElevatorStatus({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Elevator Status Screen</Text>
            <Button onPress={() => navigation.navigate("Home")}>Home</Button>
            <Button onPress={() => navigation.navigate("Login")}>Logout</Button>
            <Button onPress={() => navigation.goBack()}>Back</Button>
        </View>
    );
}

export default ElevatorStatus;
