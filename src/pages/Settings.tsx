import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const Settings: React.FC<Componentprops> = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    </Pressable>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Settings</Text>
                    <Image style={{ width: 20, height: 20, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Delete.png')} />
                </View>

                <View style={{ borderColor: '#006175', marginHorizontal: wp(5), marginTop: hp(2), paddingHorizontal: wp(3), borderRadius: 10, borderWidth: 1, height: hp(5), flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/typing.png')} />
                    <TextInput
                        placeholder="Search..."
                        placeholderTextColor="#006175"
                        style={{ fontWeight: '500', opacity: 0.7, paddingHorizontal: wp(3) }}
                    />
                </View>
                <ScrollView>
                    <View style={{ marginTop: hp(2), borderColor: '#006175', borderWidth: 1, backgroundColor: '#ffffff', paddingVertical: hp(2), borderRadius: 10, elevation: 5, marginHorizontal: wp(5) }}>
                        <Pressable onPress={() => props.navigation.navigate('Notification')} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(4) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 30, height: 30, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/notifi.png')} />
                                <Text style={{ color: '#000000', fontSize: 18, fontWeight: '500', marginStart: wp(3) }}>Notifications</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/right-arrow.png')} />
                            </View>
                        </Pressable>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginHorizontal: wp(4), height: 1, marginTop: hp(2) }}></View>
                        <Pressable onPress={() => props.navigation.navigate('AccountPrivacy')} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(4), marginTop: hp(2) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 30, height: 30, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/lock.png')} />
                                <Text style={{ color: '#000000', fontSize: 18, fontWeight: '500', marginStart: wp(3) }}>Account Privacy</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Text style={{ color: '#000000', fontSize: 16, fontWeight: '500', marginEnd: wp(3) }}>Public</Text>
                                <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/right-arrow.png')} />
                            </View>
                        </Pressable>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginHorizontal: wp(4), height: 1, marginTop: hp(2) }}></View>
                        <Pressable onPress={() => props.navigation.navigate('Security')} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(4), marginTop: hp(2) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 30, height: 30, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/security.png')} />
                                <Text style={{ color: '#000000', fontSize: 18, fontWeight: '500', marginStart: wp(3) }}>Security</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/right-arrow.png')} />
                            </View>
                        </Pressable>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginHorizontal: wp(4), height: 1, marginTop: hp(2) }}></View>
                        <Pressable onPress={() => props.navigation.navigate('MyProfile')} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(4), marginTop: hp(2) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 30, height: 30, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/user2.png')} />
                                <Text style={{ color: '#000000', fontSize: 18, fontWeight: '500', marginStart: wp(3) }}>Account</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/right-arrow.png')} />
                            </View>
                        </Pressable>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginHorizontal: wp(4), height: 1, marginTop: hp(2) }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(4), marginTop: hp(2) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 30, height: 30, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/help.png')} />
                                <Text style={{ color: '#000000', fontSize: 18, fontWeight: '500', marginStart: wp(3) }}>Help</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/right-arrow.png')} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginHorizontal: wp(4), height: 1, marginTop: hp(2) }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(4), marginTop: hp(2) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 30, height: 30, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/about.png')} />
                                <Text style={{ color: '#000000', fontSize: 18, fontWeight: '500', marginStart: wp(3) }}>About</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/right-arrow.png')} />
                            </View>
                        </View>
                    </View>

                </ScrollView>

                <View>
                    <BottomNavigation step='5' navigation={props.navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Settings;