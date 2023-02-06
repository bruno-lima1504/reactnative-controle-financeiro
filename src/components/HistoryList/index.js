import React from "react";
import { TouchableWithoutFeedback, Alert} from "react-native";

import * as C from './styles'
import Feather from "react-native-vector-icons/Feather"

export default function HistoryList({ data, deleteItem }){

    function handleDeleteItem(){
        Alert.alert(
            'Atenção',
            'Você tem certeza que deseja deletar esse registro?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Continuar',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    }

    return(
        <TouchableWithoutFeedback onLongPress={ handleDeleteItem }>
            <C.Container>
                <C.Type>
                    <C.IconView tipo={data.type}>
                        <Feather
                            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
                            color={'#FFF'}
                            size={20}
                        />
                        <C.TypeText>{data.type}</C.TypeText>
                    </C.IconView>
                </C.Type>
                <C.TextValue>
                R$ {data.value}
                </C.TextValue>
            </C.Container>
        </TouchableWithoutFeedback>
    )
}