import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import styles from "./styles";
import PhoneInput from "react-native-phone-number-input";
import { Button } from "../../../components/button/button";
import { signInWithPhoneNumber } from "../../../../services/api/firebase/auth";
import { useToast } from "../../../components/toast/toast";
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default function SignUpPage({ navigation }: { navigation: any }) {

    const [userName, setUserName] = useState();
    const phoneInput = useRef(null);
    const [country, setCountry] = useState('91');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);



    async function initiateOtp() {

        try {
            setLoading(true);
            const confirmation = await signInWithPhoneNumber('+' + country + phoneNumber)

            setLoading(false)
            navigation.navigate('Verification', { confirm: confirmation });
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
                    <Text style={styles.firstH1Text}>Enter Your Mobile Number</Text>
                    <Text style={styles.secondH1Text}>We will send you a confirmation code</Text>
                </View>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    defaultCode="IN"
                    layout="first"
                    codeTextStyle={styles.codeTextStyle}
                    textInputStyle={styles.textInputStyle}
                    placeholder=" Enter Phone Number"


                    countryPickerProps={{ withAlphaFilter: true }}
                    containerStyle={styles.phoneNumberView}
                    onChangeText={text => {
                        setPhoneNumber(text);
                    }}
                    onChangeCountry={text => {
                        setCountry(text.callingCode.join(','));
                    }}
                    textContainerStyle={styles.textContainerStyle}
                />
                <Button
                    onPress={() => {
                       initiateOtp()
                       //navigation.navigate('Verification')
                    }}
                    buttonText={"Get Otp"}
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