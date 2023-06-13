import React from "react";
import { styled } from "styled-components/native";
import { Dimensions } from "react-native";
import PropsTypes from 'prop-types'

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
    placeholerTextColor: theme.main,
}))`
    width: ${({ width }) => width - 40}px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.itemBackground};
    font-size: 25px;
    color: ${({ theme }) => theme.text};
`;

const Input = ({ 
    placeholder, 
    value, 
    onChangeText, 
    onsubmitEditing,
    onBlur,
    }) => {
    const width = Dimensions.get('window').width;

    return(
        <StyledInput 
        width={width} 
        placeholder={placeholder} 
        maxLength={50}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="done"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onsubmitEditing}
        onBlur={onBlur}
        />
    );
};

Input.PropsTypes = {
    placeholder: PropsTypes.string,
    value: PropsTypes.string.isRequired,
    onChangeText: PropsTypes.func.isRequired,
    onSubmitEditing: PropsTypes.func.isRequired,
    onBlur: PropsTypes.func.isRequired,
};

export default Input;