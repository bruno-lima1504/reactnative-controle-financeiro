import React, { useState, useContext } from "react";
import { Platform, ActivityIndicator } from "react-native";

import * as C from './styles';

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

export default function SignIn(){
    const navigation = useNavigation();
    const { signIn, loadingAuth } = useContext(AuthContext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleLogin(){
        signIn(email, password);
    }

    return(
        <C.Background> 
            <C.Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <C.Logo source={require('../../images/Logo.png')} />

                <C.AreaInput>
                    <C.Input
                        placeholder="Seu email"
                        value={email}
                        onChangeText={ (text) => setEmail(text) }
                    />                   
                </C.AreaInput>
                <C.AreaInput>
                    <C.Input
                        placeholder="Sua senha"
                        value={password}
                        onChangeText={ (text) => setPassword(text) }
                        secureTextEntry={true}
                    />                   
                </C.AreaInput>

                <C.SubmiteButton 
                    activeOpacity={0.8} 
                    onPress={handleLogin}
                >
                    { loadingAuth ? (<ActivityIndicator size={20} color="#FFF" />) : ( <C.SubmiteText>Acessar</C.SubmiteText> ) }
                    
                </C.SubmiteButton>

                <C.Link onPress={ () => navigation.navigate('SignUp') }>
                    <C.LinkText>Criar uma conta!</C.LinkText>
                </C.Link>
            </C.Container> 
        </C.Background>
    )
}