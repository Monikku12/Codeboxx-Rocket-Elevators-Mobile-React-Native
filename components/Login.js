import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";

// Call API for employee login

function Login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Login Screen</Text>
            <Button onPress={() => navigation.navigate("Home")}>Login</Button>
        </View>
    );
}

export default Login;
