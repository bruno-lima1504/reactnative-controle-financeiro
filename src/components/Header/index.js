import React from "react";

import * as C from './styles'

import { useNavigation } from "@react-navigation/native";

import Feather from "react-native-vector-icons/Feather"


export default function Header({ title }){
    const navigation = useNavigation();
    return(
        <C.Container>
            <C.ButtonMenu onPress={ ( ) => navigation.openDrawer() } >
                <Feather name="menu" color={'#000'} size={35}/>
            </C.ButtonMenu>            
            { title && (<C.Title>{title}</C.Title>)}
        </C.Container>
    )
}