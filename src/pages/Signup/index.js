import React, { useContext, useState } from "react";
import { Platform, ActivityIndicator } from "react-native";


import { Background, Container, AreaInput, Input, SubmiteButton, SubmiteText } from './styles';

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
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <AreaInput>
                    <Input
                        placeholder="Seu nome"
                        value={name}
                        onChangeText={(text) => setName(text) }
                    />
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Seu email"
                        value={email}
                        onChangeText={(text) => setEmail(text) }
                    />
                </AreaInput>  
                <AreaInput>  
                    <Input
                        placeholder="Senha"
                        value={password}
                        onChangeText={(text) => setPassword(text) }
                        secureTextEntry= {true} 
                    />
                </AreaInput>

                <SubmiteButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#FFF" />
                        ) : (
                            <SubmiteText>Cadastrar</SubmiteText>
                        )
                    }                    
                </SubmiteButton>

            </Container>
        </Background>

    )
}