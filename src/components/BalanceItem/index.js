import React, { useMemo } from "react";

import * as C from './styles';

export default function BalanceItem({ data }){

    const labelName = useMemo(()=>{
        if(data.tag === 'saldo'){
            return{
                label: 'Saldo atual',
                color: '3b3dbf'
            }
        }else if(data.tag === 'receita'){
            return{
                label: 'Entradas Hoje',
                color: '00b94a'
            }
        }else{
            return{
                label: 'Saidas Hoje',
                color: 'EF463a'
            }
        }            
        
    }, [data])

    return(
        <C.Container bg={labelName.color}>
            <C.Label>{labelName.label}</C.Label>
            <C.Balance>R$ {data.saldo}</C.Balance>
        </C.Container>
    )
}

