import React, { useCallback } from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

class Componentprops extends Baseprops { }

const Splash: React.FC<Componentprops> = (props) => {

    useFocusEffect(
        useCallback(() => {
            setTimeout(() => {
                props.navigation.navigate('AppExplanation')
            }, 1000);
        }, [])
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>
                <View style={{ width: 50, height: 50, backgroundColor: '#006175', borderRadius: 30, marginTop: hp(5), marginEnd: wp(20), alignSelf: 'flex-end' }}>
                </View>
                <View>
                    <Image style={{ width: 200, height: 150, alignSelf: 'center', marginTop: hp(3) }} resizeMode='contain' source={require('../assets/map.png')} />
                </View>
                <View style={{ width: 50, height: 50, backgroundColor: '#006175', borderRadius: 30, marginTop: hp(2), marginStart: wp(13), }}>
                </View>
                <View style={{ width: 50, height: 50, backgroundColor: '#006175', borderRadius: 30, marginTop: hp(5), marginEnd: wp(20), alignSelf: 'flex-end' }}>
                </View>
                <View style={{ width: 35, height: 35, backgroundColor: '#006175', borderRadius: 30, marginTop: hp(7), marginEnd: wp(15), alignSelf: 'flex-end' }}>
                </View>
                <View style={{ width: 35, height: 35, backgroundColor: '#006175', borderRadius: 30, marginTop: hp(10), marginStart: wp(30), }}>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Splash;