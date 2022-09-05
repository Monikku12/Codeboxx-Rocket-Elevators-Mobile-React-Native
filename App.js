
import React from 'react';
import { Image, StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Appbar, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Login from "./SRC/components/Login";
import Home from "./SRC/components/Home";
import ElevatorStatus from "./SRC/components/ElevatorStatus";

const Stack = createNativeStackNavigator();
const BOTTOM_APPBAR_HEIGHT = 80;

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

function BottomAppBar() {
    const { bottom } = useSafeAreaInsets();
    const theme = useTheme();
    const navigation = useNavigation();

    return (
        <Appbar
            style={[
                styles.bottom,
                {
                    height: BOTTOM_APPBAR_HEIGHT + bottom,
                    backgroundColor: theme.colors.elevation.level2,
                },
            ]}
            safeAreaInsets={{ bottom }}
        >
            <Appbar.Action
                title="Back"
                icon="arrow-left-circle-outline"
                onPress={() => navigation.goBack()}
            />
            <Appbar.Content title={""} />
            <Appbar.Action
                title="Logout"
                icon="logout"
                onPress={() => navigation.navigate(Login)}
            />
        </Appbar>
    );
};

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: 'cyan',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
});

function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerTitleAlign: "center",
                        headerTitleAlignJustify: "center",
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
                        options={{ title: "HOME",  }}
                    />
                    <Stack.Screen
                        name="ElevatorStatus"
                        component={ElevatorStatus}
                        options={{ title: "ELEVATOR STATUS" }}
                    />
                </Stack.Navigator>
                <BottomAppBar />
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

export default App;