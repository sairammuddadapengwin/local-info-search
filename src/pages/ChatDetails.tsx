import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const ChatDetails: React.FC<Componentprops> = (props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View style={{ flex: 1 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                        <Pressable onPress={() => props.navigation.goBack()}>
                            <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                        </Pressable>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Abdul Quayyum</Text>
                            <Text style={{ color: '#000000', fontWeight: '500' }}>Last seen 2hrs ago</Text>
                        </View>
                        <Image style={{ width: 20, height: 20, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Delete.png')} />
                    </View>

                    <View style={{ backgroundColor: '#00000040', height: 1.5, marginTop: hp(1.5) }}></View>

                    <ScrollView style={{ width: wp(100) }}>
                        <Text style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold', marginTop: hp(1) }}>Yesterday</Text>

                        <View style={{  width: '100%' }}>
                            <View style={{  maxWidth: wp(75), backgroundColor: '#006175', alignSelf: 'flex-start', borderTopStartRadius: 30, borderTopRightRadius: 30, marginHorizontal: wp(5), marginTop: hp(2), borderBottomRightRadius: 30, paddingVertical: hp(1) }}>
                                <View style={{ paddingStart: wp(7), paddingEnd: wp(7), paddingVertical: hp(0.2) }}>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Hi, How are you today?</Text>
                                    <Text style={{ color: '#ffffff', textAlign: 'right', fontWeight: '500', fontSize: 12, marginTop: hp(-0.2) }}>12:31pm</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: '100%', alignItems: 'flex-end' }}>
                            <View style={{
                                backgroundColor: '#dcdcdc',
                                borderTopStartRadius: 30,
                                borderBottomStartRadius: 30,
                                borderTopRightRadius: 30,
                                marginHorizontal: wp(5),
                                marginTop: hp(2),
                                paddingVertical: hp(1),
                                maxWidth: wp(75)
                            }}>
                                <View style={{ paddingStart: wp(7), paddingEnd: wp(7), paddingVertical: hp(0.2) }}>
                                    <Text style={{ color: '#000000', fontWeight: 'bold' }}>I’m fine what bout you?</Text>
                                    <Text style={{ color: '#000000', textAlign: 'right', fontWeight: '500', fontSize: 12, marginTop: hp(-0.2) }}>12:32pm</Text>
                                </View>
                            </View>
                        </View>


                        <Text style={{ color: '#000000', textAlign: 'center', fontWeight: 'bold', marginTop: hp(1) }}>Today</Text>
                        <View style={{  width: '100%' }}>
                            <View style={{  maxWidth: wp(75), backgroundColor: '#006175', alignSelf: 'flex-start', borderTopStartRadius: 30, borderTopRightRadius: 30, marginHorizontal: wp(5), marginTop: hp(2), borderBottomRightRadius: 30, paddingVertical: hp(1) }}>
                                <View style={{ paddingStart: wp(7), paddingEnd: wp(7), paddingVertical: hp(0.2) }}>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>when are you ready??</Text>
                                    <Text style={{ color: '#ffffff', textAlign: 'right', fontWeight: '500', fontSize: 12, marginTop: hp(-0.2) }}>12:31pm</Text>
                                </View>
                            </View>
                        </View>


                        <View style={{ width: '100%', alignItems: 'flex-end' }}>
                            <View style={{
                                backgroundColor: '#dcdcdc',
                                borderTopStartRadius: 30,
                                borderBottomStartRadius: 30,
                                borderTopRightRadius: 30,
                                marginHorizontal: wp(5),
                                marginTop: hp(2),
                                paddingVertical: hp(1),
                                maxWidth: wp(75)
                            }}>
                                <View style={{ paddingStart: wp(7), paddingEnd: wp(7), paddingVertical: hp(0.2) }}>
                                    <Text style={{ color: '#000000', fontWeight: 'bold' }}>Okay</Text>
                                    <Text style={{ color: '#000000', textAlign: 'right', fontWeight: '500', fontSize: 12, marginTop: hp(-0.2) }}>12:32pm</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                    <View style={{}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: hp(8), borderTopLeftRadius: 15, borderTopRightRadius: 15, borderTopColor: '#000000', elevation: 2, paddingHorizontal: wp(5) }}>
                            <Image style={{ width: 30, height: 30 }} source={require('../assets/Plus1.png')} />
                            <TextInput
                                placeholder="Type a comment"
                                placeholderTextColor="#006175"
                                style={{ fontSize: 16, fontWeight: '500', flex: 1, paddingStart: wp(7) }}
                            />
                            <Image style={{ width: 30, height: 30 }} source={require('../assets/Send.png')} />
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default ChatDetails;