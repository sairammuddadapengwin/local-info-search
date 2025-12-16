import React, { useCallback } from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Image, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { executeGetResponse, getToken } from "../api/api";

class Componentprops extends Baseprops { }

const Splash: React.FC<Componentprops> = (props) => {

    useFocusEffect(
        useCallback(() => {
            loadProfileLoading()
        }, [])
    )

    const loadProfileLoading = async () => {
        const token = await getToken();
        if (token && token != '') {
            const response = await executeGetResponse('secure/profile')
            if (response.code == 0) {
                if (response.data && response.data.profile_flag == 1 && response.data.password_flag == 1) {
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'HomeScreen' }]
                    })
                } else if (response.data && response.data.profile_flag == 1 && response.data.password_flag == 0) {
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'PersonalInformationSecond', params: { mobile: response.data.mobile } }]
                    })
                } else if (response.data && response.data.profile_flag == 0 && response.data.password_flag == 0) {
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'PersonalInformation', params: { mobile: response.data.mobile } }]
                    })
                }
            } else {
                Alert.alert('Alert!', 'Unable to get details.')
            }
        } else {
            props.navigation.navigate('AppExplanation')
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>
                <View style={{ width: 50, height: 50, backgroundColor: '#006175', borderRadius: 30, marginTop: hp(5), marginEnd: wp(20), alignSelf: 'flex-end' }}>
                </View>
                <View>
                    <Image style={{ width: 200, height: 150, alignSelf: 'center', marginTop: hp(3) }} resizeMode='contain' source={require('../assets/map_photo.png')} />
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