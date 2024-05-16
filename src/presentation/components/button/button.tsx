import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "./buttonTypes";
import styles from "./styles";
export const Button: React.FC<ButtonProps> = (props) => {
    const {
        buttonText,
        backgroundColor,
        textStyle
    } = props

    return (


        <TouchableOpacity style={[styles.buttonContainer, { backgroundColor }]}>
            <Text style={textStyle}>{buttonText}</Text>
        </TouchableOpacity>

    )



}