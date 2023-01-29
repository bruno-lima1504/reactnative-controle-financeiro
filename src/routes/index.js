import React from "react";
import { SafeAreaView } from "react-native";

import AuthRoutes from "./auth.routes";

export default function Routes(){
    const loading = false;
    const signed = false;

    return (
        signed ? <SafeAreaView></SafeAreaView> : <AuthRoutes/>
    )
}