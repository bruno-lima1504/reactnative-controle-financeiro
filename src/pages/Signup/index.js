import React, { useContext, useState } from "react";
import { Platform, ActivityIndicator } from "react-native";

import * as C from './styles';

import { AuthContext } from "../../contexts/auth";

export default function SignUp() {
    
    const { signUp, loadingAuth } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp(){
        if( name === '' || email === '' || password === ''){
            alert('Preencha os dados.')
            return
        };

        signUp(name, email, password );
    }

    return (
        <C.Background>
            <C.Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <C.AreaInput>
                    <C.Input
                        placeholder="Seu nome"
                        value={name}
                        onChangeText={(text) => setName(text) }
                    />
                </C.AreaInput>
                <C.AreaInput>
                    <C.Input
                        placeholder="Seu email"
                        value={email}
                        onChangeText={(text) => setEmail(text) }
                    />
                </C.AreaInput>  
                <C.AreaInput>  
                    <C.Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={(text) => setPassword(text) }
                        secureTextEntry= {true} 
                    />
                </C.AreaInput>

                <C.SubmiteButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                            <C.SubmiteText>Cadastrar</C.SubmiteText>
                        )
                    }                    
                </C.SubmiteButton>

            </C.Container>
        </C.Background>

    )
}