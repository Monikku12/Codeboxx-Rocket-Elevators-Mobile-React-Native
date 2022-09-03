
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Login from "./SRC/components/Login";
import Home from "./SRC/components/Home";
import ElevatorStatus from "./SRC/components/ElevatorStatus";

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return (
        <Image
            style={{
                width: 170,
                height: 50,
                marginTop: 10,
                marginBottom: 10,
            }}
            source={require("./SRC/images/logo.png")}
        />
    );
}

function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitleAlign: "center",
                        headerTitleAlignJustify: "center",
                        headerTitleStyle: {
                            // fontFamily: "FontAwesome",
                            color: "1F262D",
                        },
                        headerTitle: (props) => <LogoTitle {...props} />,
                    }}
                >
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ title: "LOGIN" }}
                        />
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{ title: "HOME" }}
                        />
                        <Stack.Screen
                            name="ElevatorStatus"
                            component={ElevatorStatus}
                            options={{ title: "ELEVATOR STATUS" }}
                            />
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

export default App;