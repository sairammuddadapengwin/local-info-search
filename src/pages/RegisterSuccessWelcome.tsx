import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

class Componentprops extends Baseprops { }

const RegisterSuccessWelcome: React.FC<Componentprops> = (props) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>
                
                <View style={{ height: hp(45) }}>
                    <View style={{ height: hp(45), justifyContent: 'center', }}>
                        <View style={{ backgroundColor: '#dcdcdc', justifyContent: 'center', elevation: 2, width: 150, height: 150, alignSelf: 'center', borderRadius: 75 }}>
                            <Image style={{ width: 120, height: 120, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/girlvisible.png')} />
                        </View>
                    </View>

                    <View style={{ width: 14, height: 14, backgroundColor: '#006175', borderRadius: 10, position: 'absolute', left: wp(18), top: hp(8) }}></View>
                    <View style={{
                        position: 'absolute',
                        top: hp(9),
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>
                        <View style={{ width: 14, height: 14, backgroundColor: '#006175', borderRadius: 10, marginStart: wp(-12)}}></View>
                    </View>
                    <Image style={{ width: 22, height: 22, position: 'absolute', right: wp(25), top: hp(12) }} resizeMode='contain' source={require('../assets/star.png')} />
                    <Image style={{ width: 22, height: 22, position: 'absolute', right: wp(32), bottom: hp(10) }} resizeMode='contain' source={require('../assets/star.png')} />
                    <View style={{ width: 14, height: 14, backgroundColor: '#006175', borderRadius: 10, position: 'absolute', left: wp(30), bottom: hp(11) }}></View>
                    <View style={{ width: 14, height: 14, backgroundColor: '#006175', borderRadius: 10, position: 'absolute', left: wp(15), bottom: hp(15) }}></View>
                    <View style={{ position: 'absolute', top: 0, bottom: 0, justifyContent: 'center', }}>
                        <Image style={{ width: 22, height: 22, marginTop: hp(-5), marginStart: wp(18) }} resizeMode='contain' source={require('../assets/star.png')} />
                    </View>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        justifyContent: 'center',
                        alignSelf: 'flex-end'
                    }}>
                        <View style={{ width: 14, height: 14, backgroundColor: '#006175', borderRadius: 10, marginEnd: wp(15) }}></View>
                    </View>
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18, textAlign: 'center', position: 'absolute', bottom: hp(6), alignSelf: 'center', }}>Welcome</Text>
                </View>

                <View style={{ width: wp(80), alignSelf: 'center', marginTop: hp(1) }}>
                    <PrimaryButton onclick={() => props.navigation.navigate('SignInScreen')} title="Continue" />
                </View>
            </View>
        </SafeAreaView>
    )

}

export default RegisterSuccessWelcome;