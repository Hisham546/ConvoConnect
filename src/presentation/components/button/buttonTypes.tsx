import { StyleSheet, Text, View, ViewStyle, TextStyle, StyleProp, KeyboardTypeOptions } from 'react-native'

export  interface ButtonProps{
    buttonText:string,
    backgroundColor:string,
    textStyle:TextStyle,
    onPress(): void,
    iconName?:string
    iconColor?:string
    marginBottom ?:number
    
}