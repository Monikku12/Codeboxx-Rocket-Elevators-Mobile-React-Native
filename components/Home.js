import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";

// Call API to get all elevator not in operation
//   https://rocketelevatorsrestapimonique.herokuapp.com/api/Elevators/list

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate("ElevatorStatus")}>Elevator Status</Button>
            <Button onPress={() => navigation.navigate("Login")}>Logout</Button>
            <Button onPress={() => navigation.goBack()}>Back</Button>
        </View>
    );
}

export default Home;