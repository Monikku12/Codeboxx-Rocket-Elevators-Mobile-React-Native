import { Text, ActivityIndicator } from "react-native";
import { Button, Center, Box, Heading, FlatList, HStack, Avatar, VStack, Spacer } from "native-base";
import axios from "axios";
import { useState, useEffect, } from "react";
import { useIsFocused } from "@react-navigation/native";

// Call API to get all inactive elevators
const getInactiveElevators = async (setInactiveElevators) => {
    try {
        const res = await axios.get(
            "https://rocketelevatorsrestapimonique.herokuapp.com/api/Elevators/list"
        );

        setInactiveElevators(res.data);
        // setShow(false);
    } catch (error) {
        console.error(error);
    }
};

function Home({ navigation }) {
    const [inactiveElevator, setInactiveElevators] = useState([]);
    const isFocused = useIsFocused();
    // const [show, setShow] = useState(false);

    useEffect(() => {
        // setShow(true);
        if (isFocused) {
            getInactiveElevators(setInactiveElevators);
        }
    }, [isFocused]);

    return (
        <Center>
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                {/* <ActivityIndicator animating={show} /> */}
                <Heading fontSize="xl" p="4" pb="3">
                    Inactive Elevators List
                </Heading>
                <FlatList
                    data={inactiveElevator}
                    renderItem={({ item }) => (
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
                            <HStack
                                space={[2, 3]}
                                justifyContent="space-between"
                            >
                                <Avatar
                                    size="48px"
                                    source={{
                                        uri: "https://t4.ftcdn.net/jpg/04/84/63/55/360_F_484635523_fOiDlFDoWu1VZwMf5l4taqe5AyrKfB9E.jpg",
                                    }}
                                />
                                <VStack>
                                    <Text
                                        _dark={{
                                            color: "warmGray.50",
                                        }}
                                        color="coolGray.800"
                                        bold
                                    >
                                        {item.id}
                                    </Text>
                                    <Text
                                        color="coolGray.600"
                                        _dark={{
                                            color: "warmGray.200",
                                        }}
                                    >
                                        {item.status}
                                    </Text>
                                </VStack>
                                <Spacer />
                                <Button
                                    onPress={() => {
                                        navigation.navigate("ElevatorStatus", {
                                            elevatorID: item.id,
                                        });
                                    }}
                                >
                                    Edit
                                </Button>
                            </HStack>
                        </Box>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </Box>
        </Center>
    );
}

export default Home;