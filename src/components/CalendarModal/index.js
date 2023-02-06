import React, { useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

import * as C from './styles'

import {Calendar, LocaleConfig } from 'react-native-calendars'
import { ptBR } from './localeCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }){
    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});

    function handleOnDayPress(date){
        setDateNow(new Date(date.dateString));

        let markedDay= {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#FFF'
        }
        setMarkedDates(markedDay);
    }

    function handleFilterDate(){
        handleFilter(dateNow);
        setVisible(false);
    }
    return(
        <C.Container>
            <TouchableWithoutFeedback onPress={ () => setVisible()}>
                <View style={{ flex: 1}}></View>
            </TouchableWithoutFeedback>

            <C.ModalContent>
                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}                    
                    theme={{
                        todayTextColor: '#FF0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#FFF'
                    }}                    
                />

                <C.ButtonFilter onPress={handleFilterDate}>
                    <C.ButtonFilterText>Filtrar</C.ButtonFilterText>
                </C.ButtonFilter>                
            </C.ModalContent>            
        </C.Container>
    )
}