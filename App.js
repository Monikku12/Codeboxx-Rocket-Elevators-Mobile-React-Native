
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box } from "native-base";
import Login from "./SRC/components/Login";
import Home from "./SRC/components/Home";
import ElevatorStatus from "./SRC/components/ElevatorStatus";
import logo from "./SRC/images/logo.png";

const Stack = createNativeStackNavigator();

// function ColorPalete() {
//     const {
//     colors
//     } = useTheme();
//     return <Box>
//         <FlatList numColumns="5" data={Object.keys(colors["cyan"])} renderItem={({
//         item
//     }) => <Box p="5" bg={`cyan.${item}`} />} />
//     </Box>;
// }

function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Box>
                    {/* <Image
                        source={logo}
                        alt="Rocket Elevators Logo"
                        style={styles.logo}
                    /> */}
                </Box>
                {/* <ColorPalete /> */}
                <Stack.Navigator
                    screenOptions={{
                        headerTitleAlign: "center",
                        headerTitleStyle: {
                            // fontFamily: "FontAwesome",
                            color: "1F262D",
                        },
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    // logo: {
    //     size: 10,
    //     // width: 305,
    //     // height: 159,
    //     marginBottom: 10,
    // },
});

export default App;
