import { StyleSheet, Text, View } from "react-native";
import { Button, Box, FormControl, Stack, Input, WarningOutlineIcon } from "native-base";
import axios from "axios";
import { useState, useEffect } from "react";

// Call API for employee login
const getEmployeesList = async (setEmployeesList) => {
    try {
        const res = await axios.get("https://rocketelevatorsrestapimonique.herokuapp.com/api/Employees");

        setEmployeesList(res.data);
        console.log(res.data);
    } catch (error) {
        console.warn("[getEmployeesList] Error: ", error);
    }
};







function Login({ navigation }) {
    const [Employees, setEmployeesList] = useState([]);
    
    useEffect(() => {
        getEmployeesList(setEmployeesList);
    }, []);

    return (
        // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Box alignItems="center">
            <Box w="100%" maxWidth="300px">
                <Text>Login Screen</Text>
                <Text>{setEmployeesList}</Text>
                <FormControl isRequired>
                    <Stack mx="4">
                        <FormControl.Label>Employee email</FormControl.Label>
                        <Input type="email" defaultValue="" placeholder="email" />
                        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Please type a valid email.</FormControl.ErrorMessage>
                    </Stack>
                </FormControl>
            </Box>
            <Button onPress={() => navigation.navigate("Home")}>Login</Button>
        </Box>
        // </View>
    );
}

export default Login;
