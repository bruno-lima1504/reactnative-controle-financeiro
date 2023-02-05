import React, {useState} from "react";
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import * as C from './styles'
import api from '../../services/api'
import { format } from "date-fns";

import Header from '../../components/Header'
import RegisterTypes from "../../components/RegisterTypes";
import { useNavigation } from "@react-navigation/native";

export default function New(){
    const navigation = useNavigation();
    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    function handleSubmit(){
        Keyboard.dismiss();

        if(isNaN(parseFloat(valueInput)) || type === null ){
            alert('Preencha todos os campos')
            return;
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        )
    }

    async function handleAdd(){
        Keyboard.dismiss();

        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format( new Date(), 'dd/MM/yyyy')
        })

        setLabelInput('');
        setValueInput('');
        navigation.navigate('Home')
    }

    return(
        <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
            <C.Background>
                <Header title="Registrando" />

                <SafeAreaView style={{ marginTop: 14, alignItems: 'center'}}>
                    <C.Input 
                        placeholder="Descrição desse registro"
                        value={labelInput}
                        onChangeText={(text) => setLabelInput(text)}
                    />

                    <C.Input 
                        placeholder="Valor desejado"
                        keyboardType="numeric"
                        value={valueInput}
                        onChangeText={(text) => setValueInput(text)}
                    />

                    <RegisterTypes type={type} sendTypeChanged={ (item) => setType(item) }/>

                    <C.SubmitButton onPress={handleSubmit}>
                        <C.SubmiteText>Registrar</C.SubmiteText>
                    </C.SubmitButton>


                </SafeAreaView>
            </C.Background>
        </TouchableWithoutFeedback>
    )
}