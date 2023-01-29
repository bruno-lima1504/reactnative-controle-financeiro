import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen 
                name="SignUp"
                component={SignUp}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    );
};
