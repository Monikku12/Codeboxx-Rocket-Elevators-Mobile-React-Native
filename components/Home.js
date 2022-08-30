import { StyleSheet, Button, Text, View } from "react-native";

// Call API to get all elevator not in operation
//rocketelevatorsrestapimonique.herokuapp.com/api/Elevators/list

https: function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <Button title="Elevator Status" onPress={() => navigation.navigate("ElevatorStatus")} />
            <Button title="Logout" onPress={() => navigation.navigate("Login")} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default Home;