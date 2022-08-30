import { StyleSheet, Button, Text, View } from "react-native";

// Call API for employee login




function Login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Login Screen</Text>
            <Button title="Login" onPress={() => navigation.navigate("Home")} />
        </View>
    );
}

export default Login;