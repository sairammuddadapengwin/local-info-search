import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

class Componentprops extends Baseprops { }

const Login: React.FC<Componentprops> = (props) => {

    return (
        <SafeAreaView style={{ flex: 1 , backgroundColor: '#ffffff'}}>
            <View style={{ flex: 1 }}>
                <Image style={{ width: 20, height: 20, marginTop: hp(3), marginHorizontal: wp(7) }} resizeMode='contain' source={require('../assets/arrow.png')} />
                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20, marginHorizontal: wp(7), marginTop: hp(7) }}>Phone</Text>
                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, opacity: 0.7, marginHorizontal: wp(7), marginTop: hp(1) }}>Enter your phone number</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: wp(3), height: hp(6), borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(3) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 30, height: 30 }} resizeMode="contain" source={require('../assets/flag.png')} />
                        <Text style={{ color: '#000000', fontWeight: 'bold', opacity: 0.7, fontSize: 16, marginStart: wp(2) }}>+ 91</Text>
                    </View>
                    <TextInput
                        style={{ fontSize: 16, fontWeight: 'bold',color: '#000000', opacity: 0.7, marginStart: wp(3), flex: 1 }}
                        placeholderTextColor="#000000"
                        keyboardType="numeric"
                        maxLength={10}
                        placeholder="Enter Mobile Number" />
                </View>

                <View style={{flex:1 , justifyContent: 'flex-end'}}>
                    <View>
                        <View style={{ width: wp(86), alignSelf: 'center', marginBottom: hp(2) }}>
                            <PrimaryButton onclick={() => props.navigation.navigate('Otp')} title="Send Otp" />
                        </View>
                        <Text style={{ textAlign: 'center', color: '#000000', fontWeight: 'bold', marginBottom: hp(5) }}>Already have an account?  <Text style={{ color: '#006175', fontSize: 16 }}> Sign In</Text></Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
    
}

export default Login;