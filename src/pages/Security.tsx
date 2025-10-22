import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const Security: React.FC<Componentprops> = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    </Pressable>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Security</Text>
                    <Image style={{ width: 20, height: 20, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Delete.png')} />
                </View>

                <ScrollView>
                    <View style={{ marginTop: hp(3), borderColor: '#006175', borderWidth: 1, backgroundColor: '#ffffff', paddingVertical: hp(2), borderRadius: 10, elevation: 5, marginHorizontal: wp(5) }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(4) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 30, height: 30, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/key.png')} />
                                <Text style={{ color: '#000000', fontSize: 18, fontWeight: '500', marginStart: wp(3) }}>Password</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/right-arrow.png')} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginHorizontal: wp(4), height: 1, marginTop: hp(2) }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(4), marginTop: hp(2) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 30, height: 30, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/location.png')} />
                                <Text style={{ color: '#000000', fontSize: 18, fontWeight: '500', marginStart: wp(3) }}>Login Activity</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/right-arrow.png')} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginHorizontal: wp(4), height: 1, marginTop: hp(2) }}></View>
                        <Pressable onPress={() => props.navigation.navigate('ProfileAuthentication')} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(4), marginTop: hp(2) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 30, height: 30, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/security.png')} />
                                <Text style={{ color: '#000000', fontSize: 18, fontWeight: '500', marginStart: wp(3) }}>Profile Authentication</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/right-arrow.png')} />
                            </View>
                        </Pressable>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginHorizontal: wp(4), height: 1, marginTop: hp(2) }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(4), marginTop: hp(2) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 28, height: 28, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/Delete.png')} />
                                <Text style={{ color: '#000000', fontSize: 18, fontWeight: '500', marginStart: wp(3) }}>Delete Account</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/right-arrow.png')} />
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', marginHorizontal: wp(4), height: 1, marginTop: hp(2) }}></View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: wp(4), marginTop: hp(2) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Image style={{ width: 30, height: 30, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/exit.png')} />
                                <Text style={{ color: '#000000', fontSize: 18, fontWeight: '500', marginStart: wp(3) }}>Logout</Text>
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

export default Security;