import React, { useContext } from "react";

import { AuthContext } from '../../contexts/auth'
import Header from "../../components/Header";

import * as C from './styles';

export default function Home(){
    const { signOut, user } = useContext(AuthContext);

    return(
        <C.Background>
            <Header title="Minhas movimentações" />
        </C.Background>
    )
}