import styled from "styled-components/native"

export const Background = styled.View`
    flex: 1;
    background-color: #F0F4FF;
`

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput`
    background-color: #FFF;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: '#121212';
    margin-bottom: 20px;
`;

export const SubmiteButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-radius: 8px;
    background-color: #3b3dbf;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
`;

export const SubmiteText = styled.Text`
    font-size: 20px;
    color: #fff;
`;