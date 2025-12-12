import React, { useState } from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { OtpInput } from "react-native-otp-entry";
import { otpVerify } from "../api/api";

class Componentprops extends Baseprops { }

const Otp: React.FC<Componentprops> = (props) => {

    const [otp, setOtp] = useState<any>('')

    const handleLogout = async () => {

        if (otp && otp.trim().length != 4) {
            Alert.alert('Alert!', 'Please Enter Otp.')
            return
        }

        const response = await otpVerify(props.route && props.route.mobile, otp);
        if (response.code == 0) {

        } else {
            Alert.alert('Alert!', 'Invalid Credentials');
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Image style={{ width: 20, height: 20, marginTop: hp(3), marginHorizontal: wp(7) }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20, marginHorizontal: wp(7), marginTop: hp(7) }}>OTP sent</Text>
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, opacity: 0.7, marginHorizontal: wp(7), marginTop: hp(1) }}>Enter the OTP sent to you</Text>

                    <View style={{ marginHorizontal: wp(7), marginTop: hp(3), height: wp(18) }}>
                        <OtpInput
                            numberOfDigits={4}
                            autoFocus={false}
                            hideStick={true}
                            placeholder="******"
                            blurOnFilled={true}
                            disabled={false}
                            type="numeric"
                            secureTextEntry={false}
                            focusStickBlinkingDuration={500}
                            onTextChange={(text) => console.log(text)}
                            onFilled={(text) => console.log(`OTP is ${text}`)}
                            textInputProps={{
                                accessibilityLabel: "One-Time Password",
                            }}
                            textProps={{
                                accessibilityRole: "text",
                                accessibilityLabel: "OTP digit",
                                allowFontScaling: false,
                            }}
                            theme={{
                                containerStyle: styles.container,
                                pinCodeContainerStyle: styles.pinCodeContainer,
                                pinCodeTextStyle: styles.pinCodeText,
                                placeholderTextStyle: styles.placeholderText,
                            }}
                        />
                    </View>

                    <Text style={{ color: '#000000', fontWeight: '500', textAlign: 'center', marginTop: hp(2) }}>Didn't receive any code ?</Text>
                    <Text style={{ color: '#FF3333', fontWeight: 'bold', fontSize: 14, textAlign: 'center', marginTop: hp(0.5) }}>RESEND CODE</Text>
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View>
                        <View style={{ width: wp(86), alignSelf: 'center', marginBottom: hp(2) }}>
                            <PrimaryButton onclick={() => props.navigation.navigate('PersonalInformation')} title="Verify" />
                        </View>
                        <Text style={{ textAlign: 'center', color: '#000000', fontWeight: 'bold', marginBottom: hp(5) }}>Already have an account?  <Text style={{ color: '#006175', fontSize: 16 }}> Sign In</Text></Text>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    pinCodeContainer: {
        width: wp(19),
        height: wp(17),
        backgroundColor: '#006175'
    },
    pinCodeText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    placeholderText: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Otp;