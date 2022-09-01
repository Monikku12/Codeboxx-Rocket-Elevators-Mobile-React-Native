import { StyleSheet, Text, View } from "react-native";
import {
    Button,
    Box,
    Divider,
    Heading,
    Center,
    HStack,
    Badge,
    PresenceTransition,
} from "native-base";
import { Home } from "./Home";
import axios from "axios";
import { useState, useEffect } from "react";

// Current elevator status
const getInactiveElevator = async (elevatorID, setInactiveElevator) => {
    try {
        const res = await axios.get(
            `https://rocketelevatorsrestapimonique.herokuapp.com/api/Elevators/${elevatorID}`
        );

        setInactiveElevator(res.data);
    } catch (error) {
        console.error(error);
    }
};

// const putElevatorStatusActive = async (elevatorID, setElevatorStatusActive) => {
//     try {
//         const res = await axios.get(
//             `https://rocketelevatorsrestapimonique.herokuapp.com/api/Elevators/status/${elevatorID}`
//         );

//         setElevatorStatusActive(res.data);
//     } catch (error) {
//         console.error(error);
//     }
// };

function ElevatorStatus({ route, navigation }) {
    const { elevatorID } = route.params;
    const [inactiveElevator, setInactiveElevator] = useState({});
    const [elevatorStatusActive, setElevatorStatusActive] = useState({});
    const [isOperational, setIsOperational] = useState();
    const [isNonOperational, setIsNonOperational] = useState();
    console.log("isOperational : ", isOperational);
    console.log("isNonOperational : ", isNonOperational);

    useEffect(() => {
        getInactiveElevator(elevatorID, setInactiveElevator);
        if (inactiveElevator.status == "Active") {
            setIsOperational(true);
            setIsNonOperational(false);
        } else {
            setIsOperational(false);
            setIsNonOperational(true);
        }
    }, []);

    // useEffect(() => {
    //     putElevatorStatusActive(elevatorID, setElevatorStatusActive);
    // }, []);
    
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
                        ID: {inactiveElevator.id}
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
                        Type: {inactiveElevator.elevator_type}
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
                        Serial Number: {inactiveElevator.serial_number}
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
                        Last Inspection: {inactiveElevator.last_inspection_date}
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
                    {/* <Text
                        _dark={{
                            color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        bold
                        mx="3"
                        alignItems="center"
                        flexDirection="row"
                    >
                        STATUS: {inactiveElevator.status}
                    </Text> */}
                    <HStack bold alignItems="center" flexDirection="row">
                        <PresenceTransition
                            visible={isOperational}
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    duration: 250,
                                },
                            }}
                        >
                            <Badge
                                colorScheme="success"
                                variant="solid"
                                alignSelf="center"
                            >
                                Operational
                            </Badge>
                        </PresenceTransition>
                        <PresenceTransition
                            visible={isNonOperational}
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    duration: 250,
                                },
                            }}
                        >
                            <Badge
                                colorScheme="danger"
                                variant="solid"
                                alignSelf="center"
                            >
                                Non-operational
                            </Badge>
                        </PresenceTransition>
                    </HStack>
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