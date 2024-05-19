import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Keyboard } from "react-native";
import styles from "./styles";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Button } from "../../../components/button/button";
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function Verification({ navigation }: { navigation: any }) {

    // const [confirm, setConfirm] = useState(route.params.confirm);

    // const [code, setCode] = useState(route.params.confirm.code ? route.params.confirm.code : '');
    const [confirm, setConfirm] = useState();

    const [code, setCode] = useState('');
    return (

        <View style={styles.mainContainer}>
            <View style={styles.topView}></View>
            <View style={styles.footerView}>
                <View style={styles.textBox}>
                    <Text style={styles.firstH1Text}>Enter Verification Code</Text>
                    <Text style={styles.secondH1Text}>We will send you a confirmation code</Text>
                </View>
                <OTPInputView
                    pinCount={6}
                    style={styles.enterPin}
                    code={code}
                    autoFocusOnLoad={false}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeChanged={text => setCode(text)}
                    onCodeFilled={() => Keyboard.dismiss()}
                />
                <Button
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                    buttonText={"Verify"}
                    backgroundColor="white"
                    textStyle={styles.buttonTextStyle}
                    width={deviceWidth * 0.65}
                    borderRadius={15}

                />



            </View>
        </View>


    )
}