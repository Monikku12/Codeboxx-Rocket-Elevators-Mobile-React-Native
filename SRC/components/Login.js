import { Button, Box, FormControl, Center, Input, WarningOutlineIcon, Heading, VStack } from "native-base";
import axios from "axios";
import { useState } from "react";
import { Image } from "react-native";
import logo from "SRC/images/logo.png";

// Call API for employee login
// const getEmployeeEmail = async (email, setEmployeeEmail) => {
const getEmployeeEmail = async (email) => {
    try {
        const res = await axios.get(`https://rocketelevatorsrestapimonique.herokuapp.com/api/Employees?email=${email}`);
        // const res = await axios.get(
        //     `https://rocketelevatorsrestapimonique.herokuapp.com/api/Employees?email=raul@thiel.io`
        // );

        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error(error);
    }
};

function Login({ navigation }) {
    // const [employeeEmail, setEmployeeEmail] = useState({});
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");

    console.log("email is ", email);
    // console.log("employeeEmail is: ", employeeEmail);

    // useEffect(() => {
    //     if (email.length !== 0) {
    //         console.log("UseEffect: ", email);
    //     }
    // }, []);

    
    const onSubmit = async() => {
        console.log("onSubmit");
        const employeeEmailExist = await getEmployeeEmail(email);
        console.log("EmployeeEmailExist: ", employeeEmailExist);
        
        if (employeeEmailExist) {
            navigation.navigate("Home");
        } else if (email.email === undefined) {
            setErrors({
                ...errors,
                email: "Employee email is required.",
            });
        } else {
            setErrors({
                ...errors,
                email: "The email entered is not the email of a listed agent.",
            });
        }
    };

    // const validate = () => {
    // };

    return (
        <Center w="100%">
                <Image
                    source={logo
                    }
                    alt="Rocket Elevators Logo"
                    size="xs"
                />
            <Box safeArea p="2" py="8" w="90%" maxW="290">
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
                            onChangeText={(value) =>
                                setEmail({ ...email, email: value })
                            }
                        />
                        {"email" in errors && (
                            <FormControl.ErrorMessage
                                leftIcon={<WarningOutlineIcon size="xs" />}
                            >
                                errors
                            </FormControl.ErrorMessage>
                        )}
                    </FormControl>
                    <Button onPress={onSubmit}>
                        {/* <Button mt="2" colorScheme="indigo" onPress={() => navigation.navigate("Home")}> */}
                        Sign in
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
}

export default Login;