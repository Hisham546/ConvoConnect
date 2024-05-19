import React from "react";
import { Dimensions, Text, TouchableOpacity } from "react-native";

import { ButtonProps } from "./buttonTypes";
import styles from "./styles";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export const Button: React.FC<ButtonProps> = (props) => {
    const {
        buttonText,
        backgroundColor,
        textStyle,
        onPress,
        iconName,
        iconColor,
        marginBottom,
        width,
        borderRadius
    } = props

    return (


        <TouchableOpacity activeOpacity={0.75}
            onPress={onPress}
            style={[styles.buttonContainer,
            {
                backgroundColor,
                marginBottom: marginBottom !== undefined ? marginBottom : 0,
                width: width !== undefined ? width : deviceWidth * 0.60,
                borderRadius:borderRadius!== undefined ? borderRadius :30

            }]}>
            {iconName && <MaterialIcon name={iconName} size={20} color={iconColor} />}
            <Text style={textStyle}>{buttonText}</Text>
        </TouchableOpacity>

    )



}