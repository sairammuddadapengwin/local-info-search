import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const ServiceDetailsReels: React.FC<Componentprops> = (props) => {

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    </Pressable>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Local Info Search</Text>
                    <Image style={{ width: 20, height: 20, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Delete.png')} />
                </View>

                <ScrollView>
                    <View style={{ borderColor: '#006175', flex: 1, marginHorizontal: wp(5), marginTop: hp(2), paddingHorizontal: wp(3), borderRadius: 10, borderWidth: 1, height: hp(5), flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/typing.png')} />
                        <TextInput
                            placeholder="Type something..........."
                            placeholderTextColor="#006175"
                            style={{ fontWeight: '500', opacity: 0.7, paddingHorizontal: wp(3) }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: wp(5), marginTop: hp(3) }}>
                        <Text style={{ color: '#006175', fontSize: 18, fontWeight: 'bold' }}>Local</Text>
                        <Text style={{ color: '#9A9A9A', fontSize: 18, fontWeight: 'bold' }}>District</Text>
                        <Text style={{ color: '#9A9A9A', fontSize: 18, fontWeight: 'bold' }}>State</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(3) }}>
                        <Text style={{ color: '#006175', fontSize: 13, fontWeight: 'bold' }}>Andhra Pradesh {">"} </Text>
                        <Text style={{ color: '#9A9A9A', fontSize: 13, fontWeight: 'bold' }}>Visakhapatnam {">"} </Text>
                        <Text style={{ color: '#9A9A9A', fontSize: 13, fontWeight: 'bold' }}>Maddilapalem </Text>
                        <Image style={{ width: 15, height: 15 }} resizeMode='contain' source={require('../assets/Filter.png')} />
                    </View>

                    <Pressable onPress={() => props.navigation.navigate('MapViewNearUsers')}>
                        <Image style={{ width: wp(94), height: hp(27), marginTop: hp(2), borderRadius: 20, alignSelf: 'center' }} source={require('../assets/map.jpg')} />
                    </Pressable>

                    <View style={{ marginTop: hp(2) }}>
                        {[1, 2, 3, 4].map(e => (
                            <Pressable onPress={() => props.navigation.navigate('ServiceDetailsUserDetails')} key={e} style={{ borderRadius: 15, height: hp(28), backgroundColor: '#ffffff', elevation: 5, flexDirection: 'row', alignSelf: 'center', marginBottom: hp(1.5) }}>

                                <View style={{  width: wp(34), alignItems: 'center' }}>
                                    <View style={{}}>
                                        <Image style={{ width: wp(34), height: hp(22), borderTopLeftRadius: 15 }} resizeMode='stretch' source={require('../assets/girl.jpg')} />
                                    </View>
                                    <Text style={{ color: '#004857', fontWeight: 'bold', fontSize: 12, textAlign: 'center', marginTop: hp(1) }}>Digital Marketing</Text>
                                </View>

                                <View style={{ width: wp(60),   paddingHorizontal: wp(2), }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View>
                                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18, marginStart: wp(1) , marginTop: hp(0.5)}}>Noah</Text>
                                            <Text style={{ color: '#006175', fontWeight: '500', marginTop: hp(0.5), fontSize: 14, marginStart: wp(1) }}>Information</Text>
                                            <View style={{ flexDirection: 'row', marginTop: hp(1) }}>
                                                <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/call.png')} />
                                                <Text style={{ color: '#000000', fontWeight: '500', fontSize: 12, marginStart: wp(1) }}>Working Hours: Mon-Fri, 9 AM - 5 PM</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', marginTop: hp(0.5) }}>
                                                <Image style={{ width: 20, height: 20, tintColor: '#000000' }} resizeMode="contain" source={require('../assets/map1.png')} />
                                                <Text style={{ color: '#000000', fontWeight: '500', fontSize: 12, marginStart: wp(1), width: wp(50) }}>Door No 39-6-71, Botcha Square, Village, Kapparada Road, Madhavadhara, Visakhapatnam, Andhra Pradesh 530007</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: hp(2) }}>
                                        <View style={{ backgroundColor: '#006175', width: wp(20), borderRadius: 20, height: hp(3.5), justifyContent: 'center' }}>
                                            <Text style={{ color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 12 }}>Connect</Text>
                                        </View>
                                        <View style={{ borderColor: '#006175', flexDirection: 'row', alignItems: 'center', borderWidth: 1, width: wp(20), borderRadius: 20, justifyContent: 'center', height: hp(3.5), marginStart: wp(2) }}>
                                            <Image style={{ tintColor: '#006175', width: 15, height: 15, alignSelf: 'center' }} resizeMode="contain" source={require('../assets/Chat.png')} />
                                            <Text style={{ color: '#006175', fontWeight: 'bold', marginStart: wp(2), textAlign: 'center', fontSize: 12 }}>Chat</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',  marginTop: hp(1.5) }}>
                                        <Image style={{ width: 18, height: 18 }} resizeMode='contain' source={require('../assets/Heart.png')} />
                                        <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode='contain' source={require('../assets/Chat.png')} />
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ backgroundColor: '#006175', paddingHorizontal: wp(1), paddingVertical: hp(0.7), borderRadius: 5, flexDirection: 'row', justifyContent: 'center' }}>
                                                <View style={{ backgroundColor: '#ffffff', justifyContent: 'center', borderRadius: 5, width: 14, height: 14, alignSelf: 'center' }}>
                                                    <Image style={{ width: 10, height: 10, alignSelf: 'center' }} resizeMode="contain" source={require('../assets/star.png')} />
                                                </View>
                                                <Text style={{ color: '#ffffff', fontWeight: '500', alignSelf: 'center', fontSize: 12, marginStart: wp(1) }}>3.5</Text>
                                            </View>
                                            <Text style={{ alignSelf: 'center', color: '#000000', fontWeight: '500', marginStart: wp(1) }}>1.7k+</Text>
                                        </View>
                                        <Image style={{ width: 18, height: 18 }} resizeMode='contain' source={require('../assets/share.png')} />
                                    </View>

                                </View>
                            </Pressable>
                        ))}
                    </View>

                </ScrollView>
                <View>
                    <BottomNavigation step='2' navigation={props.navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ServiceDetailsReels;