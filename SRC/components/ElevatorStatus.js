import { StyleSheet, Text, View } from "react-native";
import { Button, Box, Divider, Heading, Center } from "native-base";
import { Home } from "./Home";
import axios from "axios";
import { useState, useEffect } from "react";

// Current elevator status
const getElevator = async (elevatorID, setElevator) => {
    try {
        const res = await axios.get(
            `https://rocketelevatorsrestapimonique.herokuapp.com/api/Elevators/${elevatorID}`
        );

        setElevator(res.data);
    } catch (error) {
        console.error(error);
    }
};

function ElevatorStatus({ route, navigation }) {
    const { itemID } = route.params;
    const [elevator, setElevator] = useState({});

    useEffect(() => {
        getElevator(itemID, setElevator);
    }, []);

    return (
        <Center>
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading>Elevator Status Screen</Heading>
                <Box
                    borderBottomWidth="1"
                    _dark={{
                        borderColor: "muted.50",
                    }}
                    borderColor="muted.800"
                    pl={["0", "4"]}
                    pr={["0", "5"]}
                    py="2"
                >
                    <Text
                        _dark={{
                            color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        bold
                        mx="3"
                        alignItems="center"
                        flexDirection="row"
                    >
                        ID: {elevator.id}
                    </Text>
                    <Divider
                        my="2"
                        _light={{
                            bg: "muted.800",
                        }}
                        _dark={{
                            bg: "muted.50",
                        }}
                    />
                    <Text
                        _dark={{
                            color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        bold
                        mx="3"
                        alignItems="center"
                        flexDirection="row"
                    >
                        Type: {elevator.elevator_type}
                    </Text>
                    <Divider
                        my="2"
                        _light={{
                            bg: "muted.800",
                        }}
                        _dark={{
                            bg: "muted.50",
                        }}
                    />
                    <Text
                        _dark={{
                            color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        bold
                        mx="3"
                        alignItems="center"
                        flexDirection="row"
                    >
                        Serial Number: {elevator.serial_number}
                    </Text>
                    <Divider
                        my="2"
                        _light={{
                            bg: "muted.800",
                        }}
                        _dark={{
                            bg: "muted.50",
                        }}
                    />
                    <Text
                        _dark={{
                            color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        bold
                        mx="3"
                        alignItems="center"
                        flexDirection="row"
                    >
                        Last Inspection: {elevator.last_inspection_date}
                    </Text>
                    <Divider
                        my="2"
                        _light={{
                            bg: "muted.800",
                        }}
                        _dark={{
                            bg: "muted.50",
                        }}
                    />
                    <Text
                        _dark={{
                            color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        bold
                        mx="3"
                        alignItems="center"
                        flexDirection="row"
                    >
                        STATUS: {elevator.status}
                    </Text>
                </Box>
                <Button onPress={() => navigation.navigate("Home")}>
                    Home
                </Button>
                <Button onPress={() => navigation.navigate("Login")}>
                    Logout
                </Button>
                <Button onPress={() => navigation.goBack()}>Back</Button>
            </Box>
        </Center>
    );
}

export default ElevatorStatus;