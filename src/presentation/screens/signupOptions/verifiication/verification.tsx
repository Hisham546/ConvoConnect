import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, Keyboard } from "react-native";
import styles from "./styles";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Button } from "../../../components/button/button";
import { verifyCode } from "../../../../services/api/firebase/auth";

import { useToast } from "../../../components/toast/toast";
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default function Verification({ navigation, route }: { navigation: any, route: any }) {

    const [confirm, setConfirm] = useState(route.params.confirm);

    const [code, setCode] = useState(route.params.confirm.code ? route.params.confirm.code : '');
    const [loading, setLoading] = useState(false);

    async function verifyOtp() {
        try {
            setLoading(true);
            const verified = await verifyCode(confirm, code)
            console.log(verified, '........')
            if (verified == true) {
                setLoading(false);

                navigation.navigate('Home')


            } else {
                setLoading(false);
                useToast({ message: 'please check your pin' });
            }

        } catch (error) {

            setLoading(false);
            //  console.error(error);
            const errorMessage = error instanceof Error ? error.message : String(error);
            useToast({ message: errorMessage });
        }


    }

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
                        verifyOtp()

                    }}
                    buttonText={"Verify"}
                    backgroundColor="white"
                    textStyle={styles.buttonTextStyle}
                    width={deviceWidth * 0.65}
                    borderRadius={15}
                    loading={loading}

                />



            </View>
        </View>


    )
}