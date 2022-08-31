import { StyleSheet, Text, View } from "react-native";
import { Button, Box, FormControl, Center, Input, WarningOutlineIcon, Heading, VStack } from "native-base";
import axios from "axios";
import { useState, useEffect } from "react";

// Call API for employee login
// const getEmployeeEmail = async (email, setEmployeeEmail) => {
//     try {
//         const res = await axios.get(`https://rocketelevatorsrestapimonique.herokuapp.com/api/Employees?email=${email}`);

//         setEmployeeEmail(res);
//         console.log(res.data);
//     } catch (error) {
//         console.warn("[getEmployeeEmail] Error: ", error);
//     }
// };

function Login({ navigation }) {
    // const [EmployeeEmail, setEmployeeEmail] = useState([]);
    // const [errors, setErrors] = useState({});

    // let email = ("");

    // useEffect(() => {
    //     getEmployeeEmail(setEmployeeEmail);
    // }, []);

    // const onSubmit = () => {
    //     validate() ? navigation.navigate("Home") : setErrors;
    // };

    // const validate = () => {
    //     if (EmployeeEmail === true) {
    //         return true;
    //     } else {
    //         setErrors({ ...errors, name: "The email entered is not the email of a listed agent." });
    //         return false;
    //     }
    // };

    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading alignSelf="center" size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                    Welcome
                </Heading>
                <Heading alignSelf="center" mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
                    Sign in to continue!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl isRequired isInvalid={false}>
                        <FormControl.Label>Employee email</FormControl.Label>
                        {/* <Input type="email" defaultValue="" placeholder="email" onChangeText={{email}} /> */}
                        <Input type="email" defaultValue="123" placeholder="email" />
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Please type a valid email.</FormControl.ErrorMessage>
                    </FormControl>
                    {/* <Button mt="2" colorScheme="indigo" onPress={onSubmit}> */}
                        <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate("Home")}>
                        Sign in
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
}

export default Login;