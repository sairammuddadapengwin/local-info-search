import React, { useState } from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Alert, Image, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { forgotPassword } from "../api/api";

class Componentprops extends Baseprops { }

const ForgotPassword: React.FC<Componentprops> = (props) => {

    const [username, setUsername] = useState<any>('')
    const [indicator, setIndicator] = useState(false)

    const handleBtn = async () => {
        setIndicator(true)
        const response = await forgotPassword(username)
        setIndicator(false)
        if (response.code == 0) {
            props.navigation.navigate('ForgotPasswordOtpSent', {username: username})
        } else {
            Alert.alert(
                'Alert!',
                'Something went wrong. Please try again later.'
            );
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>

                <Image style={{ width: 20, height: 20, marginTop: hp(3), marginHorizontal: wp(7) }} resizeMode='contain' source={require('../assets/arrow.png')} />
                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20, marginHorizontal: wp(7), marginTop: hp(7) }}>Forgot Password</Text>
                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, opacity: 0.7, marginHorizontal: wp(7), marginTop: hp(1) }}>Let’s help recover your account</Text>

                <Text style={{ marginHorizontal: wp(7), marginTop: hp(3), fontSize: 16, fontWeight: '500' }}>Username</Text>
                <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), height: hp(6), borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                    <TextInput
                        style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', opacity: 0.7, marginStart: wp(3), flex: 1 }}
                        placeholderTextColor="#000000"
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View>
                        <View style={{ width: wp(86), alignSelf: 'center', marginBottom: hp(2) }}>
                            {indicator && <ActivityIndicator color="#006175" size="large" style={{ marginBottom: hp(2) }} />}
                            <PrimaryButton onclick={() => handleBtn()} title="Done" />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )

}

export default ForgotPassword;