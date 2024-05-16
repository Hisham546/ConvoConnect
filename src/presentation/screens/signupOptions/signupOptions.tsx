import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

import { Button } from "../../components/button/button";


export default function SignUpOptions({ navigation }: { navigation: any }) {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topView}></View>
            <View style={styles.footerView}>
                <Button
                    onPress={() => {
                        navigation.navigate('SignUpOptions')
                    }}
                    buttonText={"Continue with phone number"}
                    backgroundColor="white"
                    textStyle={styles.buttonTextStyle}
                    iconName="phone"
                    iconColor="#A9A9A9"
                    marginBottom={15}
                />

                <Button
                    onPress={() => {
                        navigation.navigate('SignUpOptions')
                    }}
                    buttonText={"Continue with Google"}
                    backgroundColor="white"
                    textStyle={styles.buttonTextStyle}
                    iconName="google"
                    iconColor="#EA4335"
                />


            </View>

        </View>



    )


}