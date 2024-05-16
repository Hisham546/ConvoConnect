import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

import { Button } from "../../components/button/button";


export default function Welcome({ navigation }: { navigation: any })  {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.topView}></View>
            <View style={styles.footerView}>
                <View style={styles.descriptionView}>
                <View style={styles.descriptionBox}>
                    <Text style={styles.decriptionText}>Stay connected </Text>
                    <Text style={styles.decriptionText}>with your friends  </Text>
                    <Text style={styles.decriptionText}>and family </Text>
                    </View>
                </View>
                <View style={styles.buttonParentView}>
                    <Button
                     onPress={() => {
                       navigation.navigate('SignUpOptions')
                      }}
                        buttonText={"Get Started"}
                        backgroundColor="white"
                        textStyle={styles.buttonTextStyle}
                    /></View>

            </View>

        </View>



    )


}