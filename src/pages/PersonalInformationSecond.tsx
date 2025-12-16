
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Alert, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import { passwordSetup } from "../api/api";

class Componentprops extends Baseprops { }

const PersonalInformationSecond: React.FC<Componentprops> = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [indicator, setIndicator] = useState(false)


    const handleBtn = async () => {
        if (!username || username.trim().length === 0) {
            Alert.alert('Alert!', 'Please enter your username.');
            return;
        }

        if (!password || password.trim().length === 0) {
            Alert.alert('Alert!', 'Please enter your password.');
            return;
        }
        if (password.length < 6) {
            Alert.alert(
              'Alert!',
              'Password must be at least 6 characters long.'
            );
            return;
          }
        if (!confirmPassword || confirmPassword.trim().length === 0) {
            Alert.alert('Alert!', 'Please enter your confirm password.');
            return;
        }

        if (password != confirmPassword) {
            Alert.alert(
                'Alert!',
                'Password and confirm password do not match.'
            );
            return;
        }
        setIndicator(true)
        const response = await passwordSetup(username, password);
        setIndicator(false)
        if (response?.code === 0) {
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }]
            })
        } else {
            Alert.alert(
                'Alert!',
                'Unable to set password. Please try again.'
            );
        }
    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View style={{ flex: 1 }}>
                    <Image style={{ width: 20, height: 20, marginTop: hp(3), marginHorizontal: wp(7) }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20, marginHorizontal: wp(7), marginTop: hp(7) }}>Select a Username</Text>
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, opacity: 0.7, marginHorizontal: wp(7), marginTop: hp(1) }}>Help secure your account</Text>

                    <ScrollView>
                        <Text style={{ marginHorizontal: wp(7), marginTop: hp(3), fontSize: 16, fontWeight: '500' }}>Username</Text>
                        <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), height: hp(6), borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', opacity: 0.7, marginStart: wp(3), flex: 1 }}
                                placeholderTextColor="#000000"
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>
                        <Text style={{ marginHorizontal: wp(7), marginTop: hp(2), fontSize: 16, fontWeight: '500' }}>Password</Text>
                        <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), height: hp(6), borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', opacity: 0.7, marginStart: wp(3), flex: 1 }}
                                placeholderTextColor="#000000"
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <Text style={{ marginHorizontal: wp(7), marginTop: hp(2), fontSize: 16, fontWeight: '500' }}>Confirm Password</Text>
                        <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), height: hp(6), borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', opacity: 0.7, marginStart: wp(3), flex: 1 }}
                                placeholderTextColor="#000000"
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </View>
                    </ScrollView>

                    <View>
                        <View style={{ width: wp(86), alignSelf: 'center', marginBottom: hp(2) }}>
                            {indicator && <ActivityIndicator color="#006175" size="large" style={{ marginBottom: hp(2) }} />}
                            <PrimaryButton onclick={() => handleBtn()} title="Done" />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
        tintColor: '#000000'
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default PersonalInformationSecond;