import {View, Text} from "react-native";
import {Link} from "expo-router";

const SignUp = () => {
    return (
        <View>
            <Text>SignIn</Text>
            <Link href={"/(auth)/sign-in"} className="mt-4 rounded bg-primary text-white p-4" >Already have an account ?</Link>
        </View>
    )
}

export  default SignUp