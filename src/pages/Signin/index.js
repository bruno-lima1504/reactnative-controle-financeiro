import React from "react";
import { SafeAreaView, StatusBar, Text, View, TouchableOpacity } from "react-native";

import { Background, Container, Logo, AreaInput, Input, SubmiteButton, SubmiteText, Link, LinkText } from './styles';

import { useNavigation } from "@react-navigation/native";

export default function SignIn(){
    const navigation = useNavigation();

    return(
        <Background> 
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo source={require('../../images/Logo.png')} />

                <AreaInput>
                    <Input
                        placeholder="Seu email"
                    />                   
                </AreaInput>
                <AreaInput>
                    <Input
                        placeholder="Sua senha"
                    />                   
                </AreaInput>

                <SubmiteButton activeOpacity={0.8}>
                    <SubmiteText>Acessar</SubmiteText>
                </SubmiteButton>

                <Link onPress={ () => navigation.navigate('SignUp') }>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>
            </Container> 
        </Background>
    )
}