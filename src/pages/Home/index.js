import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

import { AuthContext } from '../../contexts/auth'
import Header from "../../components/Header";

import api from "../../services/api";
import { format } from "date-fns";

import { useIsFocused } from '@react-navigation/native'

import BalanceItem from "../../components/BalanceItem";

import * as C from './styles';
import Feather from "react-native-vector-icons/Feather"
import HistoryList from "../../components/HistoryList";


export default function Home(){
    const isFocused = useIsFocused();
    const [listBalance, setListBalance] = useState([]);
    const[movements, setMovements] = useState([]);

    const [dateMovements, setDateMovements] = useState(new Date())


    useEffect(()=>{

        let isActive = true;
        
        async function getMovements(){
            let dateFormated = format(dateMovements, 'dd/MM/yyyy');
            
            const receives = await api.get('/receives', {
                params:{
                    date: dateFormated
                }
            })

            const balance = await api.get('/balance', {
                params:{
                    date: dateFormated
                }
            })

            if(isActive){
                setMovements(receives.data);
                setListBalance(balance.data);
            }
        }

        getMovements();

        return () => isActive = false;


    },[isFocused])


    return(
        <C.Background>
            <Header title="Minhas movimentações" />
            <C.ListBalance
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={ item => item.tag }
                renderItem={ ({ item })=> ( <BalanceItem data={item} /> ) }
            />
            <C.Area>
                <TouchableOpacity>
                    <Feather name="calendar" color={'#121212'} size={30}/>
                </TouchableOpacity>
                <C.Title>Ultimas movimentações</C.Title>
            </C.Area>
            <C.List
                data={movements}
                keyExtractor= { item => item.id }
                renderItem={ ({ item }) => <HistoryList data={item} />  }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </C.Background>
    )
}