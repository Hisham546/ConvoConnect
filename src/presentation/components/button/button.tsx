import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "./buttonTypes";
import styles from "./styles";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
export const Button: React.FC<ButtonProps> = (props) => {
    const {
        buttonText,
        backgroundColor,
        textStyle,
        onPress,
        iconName,
        iconColor,
        marginBottom 
    } = props

    return (


        <TouchableOpacity activeOpacity={0.75}
            onPress={onPress}
            style={[styles.buttonContainer, { backgroundColor,  marginBottom: marginBottom !== undefined ? marginBottom : 0 }]}>
            {iconName && <MaterialIcon name={iconName} size={20} color={iconColor} />}
            <Text style={textStyle}>{buttonText}</Text>
        </TouchableOpacity>

    )



}