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
import axios from "axios";
import { useState, useEffect } from "react";

// Call API inactive elevator
const getElevatorData = async (elevatorID, setSelectedElevator) => {
    try {
        const res = await axios.get(
            `https://rocketelevatorsrestapimonique.herokuapp.com/api/Elevators/${elevatorID}`
        );

        setSelectedElevator(res.data);
    } catch (error) {
        console.error(error);
    }
};

const putElevatorStatusActive = async (elevatorID, setSelectedElevator) => {
    try {
        const res = await axios.put(
            `https://rocketelevatorsrestapimonique.herokuapp.com/api/Elevators/status/${elevatorID}`
        );

        setSelectedElevator(res.data);
    } catch (error) {
        console.error(error);
    }
};

function ElevatorStatus({ route, navigation }) {
    const { elevatorID } = route.params;
    const [selectedElevator, setSelectedElevator] = useState({});
    const [isOperational, setIsOperational] = useState();
    const [isNonOperational, setIsNonOperational] = useState();

    useEffect(() => {
        if (setSelectedElevator != "") {
            getElevatorData(elevatorID, setSelectedElevator);
            if (selectedElevator.status == "Active") {
                setIsOperational(true);
                setIsNonOperational(false);
            } else {
                setIsOperational(false);
                setIsNonOperational(true);
            }
        }
    }, []);
    
    // useEffect(() => {
        //     putElevatorStatusActive(elevatorID, setElevatorStatusActive);
        // }, []);
        
    const onSubmit = async () => {
        const statusUpdate = await putElevatorStatusActive(
            elevatorID,
            setSelectedElevator
        );
        const dataUpdate = await getElevatorData(
            elevatorID,
            setSelectedElevator
        );
    };
    console.log("Final status is ", selectedElevator.status);
    
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
                        ID: {selectedElevator.id}
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
                        Type: {selectedElevator.elevator_type}
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
                        Serial Number: {selectedElevator.serial_number}
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
                        Last Inspection: {selectedElevator.last_inspection_date}
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
                    <HStack
                        bold
                        alignItems="center"
                        flexDirection="row"
                    >
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
                                z-index="2"
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
                                z-index="2"
                            >
                                Non-operational
                            </Badge>
                            <Button onPress={onSubmit}>UPDATE STATUS</Button>
                        </PresenceTransition>
                    </HStack>
                </Box>
                {/* <Button onPress={() => changeStatus}> */}
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