import { StyleSheet, Text, View } from "react-native";
import {
    Button,
    Box,
    Divider,
    Heading,
    Center,
    ZStack,
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

const putElevatorStatusActive = async (elevatorID) => {
    try {
        await axios.put(
            `https://rocketelevatorsrestapimonique.herokuapp.com/api/Elevators/status/${elevatorID}`
        );

    } catch (error) {
        console.error(error);
    }
};


function ElevatorStatus({ route, navigation }) {
    const { elevatorID } = route.params;
    const [selectedElevator, setSelectedElevator] = useState({});
    const [isOperational, setIsOperational] = useState();
    const [isNonOperational, setIsNonOperational] = useState();
    const isFocused = useIsFocused();
    
    useEffect(() => {
        console.log("useEffect operational");
        if (setSelectedElevator != "") {
            getElevatorData(elevatorID, setSelectedElevator);
            }
        }, []);
        
        
    useEffect(() => {
        console.log("useEffect deuxième");
        if (selectedElevator != "") {
            if (selectedElevator.status == "Active") {
                setIsOperational(true);
                setIsNonOperational(false);
            } else {
                setIsOperational(false);
                setIsNonOperational(true);
            }
        }
    }, [selectedElevator, isFocused]);
        
    const onSubmit = async () => {
        const statusUpdate = await putElevatorStatusActive(
            elevatorID
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
                </Box>
                <Box
                    _dark={{
                        borderColor: "muted.50",
                    }}
                    borderColor="muted.800"
                    pl={["0", "4"]}
                    pr={["0", "5"]}
                    py="2"
                >
                    <ZStack alignItems="center">
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
                            <Button
                                onPress={() =>
                                    navigation.navigate("Home", refresh)
                                }
                            >
                                Home
                            </Button>
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
                            <Button onPress={onSubmit}>UPDATE STATUS</Button>
                        </PresenceTransition>
                    </ZStack>
                </Box>
                {/* <Button onPress={() => changeStatus}> */}
                {/* <Button onPress={() => navigation.navigate("Login")}>
                    Logout
                </Button>
                <Button onPress={() => navigation.goBack()}>Back</Button> */}
            </Box>
        </Center>
    );
}

export default ElevatorStatus;