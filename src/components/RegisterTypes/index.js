import React, { useState } from "react";

import * as C from './styles';
import Feather from "react-native-vector-icons/Feather"

export default function RegisterTypes({ type, sendTypeChanged }){
    const [typeChecked, setTypeChecked] = useState(type)

    function changeType(name){
        if(name === 'receita'){
            setTypeChecked('receita');
            sendTypeChanged('receita');
        }else{
            setTypeChecked('despesa');
            sendTypeChanged('despesa');
        }
    };

    return(
        <C.RegisterContainer>

            <C.RegisterTypeButton 
                checked={ typeChecked === 'receita' ? true : false }
                onPress={() => changeType('receita')}
            >
                <Feather name="arrow-up" color={'#121212'} size={25}/>
                <C.RegisterLabel>
                    Receita
                </C.RegisterLabel>                
            </C.RegisterTypeButton>

            <C.RegisterTypeButton 
                checked={ typeChecked === 'despesa' ? true : false }
                onPress={() => changeType('despesa')}
            >
                <Feather name="arrow-down" color={'#121212'} size={25}/>
                <C.RegisterLabel>
                    Despesa
                </C.RegisterLabel>
            </C.RegisterTypeButton>

        </C.RegisterContainer>
    )
}

