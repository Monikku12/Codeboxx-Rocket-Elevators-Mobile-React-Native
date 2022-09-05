import { Button, Box, FormControl, Center, Input, WarningOutlineIcon, Heading, VStack } from "native-base";
import axios from "axios";
import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { useIsFocused } from "@react-navigation/native";

// Call API for employee login
const getEmployeeEmail = async (email) => {
    try {
        const res = await axios.get(`https://rocketelevatorsrestapimonique.herokuapp.com/api/Employees?email=${email}`);

        return res.data;
    } catch (error) {
        console.error(error);
    }
};

function Login({ navigation }) {
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            setShow(false);
        }
    }, [isFocused]);

    const onSubmit = async () => {
        setShow(true);
        if (email === "") {
            setErrors({
                ...errors,
                email: "Employee email is required.",
            });
        } else {
            const employeeEmailExist = await getEmployeeEmail(email);

            if (employeeEmailExist) {
                navigation.navigate("Home");
            } else {
                setErrors({
                    ...errors,
                    email: "The email entered is not the email of a listed agent.",
                });
            }
        }
    };

    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <ActivityIndicator animating={show} />
                <Heading
                    alignSelf="center"
                    size="lg"
                    fontWeight="600"
                    color="coolGray.800"
                    _dark={{ color: "warmGray.50" }}
                >
                    Welcome
                </Heading>
                <Heading
                    alignSelf="center"
                    mt="1"
                    _dark={{ color: "warmGray.200" }}
                    color="coolGray.600"
                    fontWeight="medium"
                    size="xs"
                >
                    Sign in to continue!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl isRequired isInvalid={"email" in errors}>
                        <FormControl.Label>Employee email</FormControl.Label>
                        <Input
                            type="email"
                            value={email}
                            placeholder="email"
                            onChangeText={(newEmail) => setEmail(newEmail)}
                        />
                        {"email" in errors && (
                            <FormControl.ErrorMessage
                                leftIcon={<WarningOutlineIcon size="xs" />}
                            >
                                {errors.email}
                            </FormControl.ErrorMessage>
                        )}
                    </FormControl>
                    <Button onPress={onSubmit}>Sign in</Button>
                </VStack>
            </Box>
        </Center>
    );
}

export default Login;