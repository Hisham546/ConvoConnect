import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "./buttonTypes";
import styles from "./styles";
export const Button: React.FC<ButtonProps> = (props) => {
    const {
        buttonText,
        backgroundColor,
        textStyle,
        onPress
    } = props

    return (


        <TouchableOpacity  activeOpacity={0.75}  
        onPress={onPress}
          style={[styles.buttonContainer, { backgroundColor }]}>
            <Text style={textStyle}>{buttonText}</Text>
        </TouchableOpacity>

    )



}