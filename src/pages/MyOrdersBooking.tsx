import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

class Componentprops extends Baseprops { }

const MyOrdersBooking: React.FC<Componentprops> = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    </Pressable>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>My Orders / Bookings</Text>
                    <Image style={{ width: 20, height: 20, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Delete.png')} />
                </View>

                <ScrollView style={{marginTop: hp(2)}}>
                    {[1, 2, 3, 4].map(e => (
                        <View key={e} style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: hp(1) }}>
                            <View style={{ backgroundColor: '#80B0BA', borderStartStartRadius: 15, borderBottomStartRadius: 15, paddingVertical: hp(2), width: wp(30), justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ borderColor: '#ffffff', borderWidth: 2, borderRadius: 40 }}>
                                    <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={require('../assets/profile.jpg')} />
                                </View>
                                <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 18, textAlign: 'center', marginTop: hp(1) }}>Arthur</Text>
                                <Text style={{ color: '#004857', fontWeight: 'bold', fontSize: 12, textAlign: 'center', marginTop: hp(0.5) }}>Digital Marketing</Text>
                            </View>

                            <View style={{ width: wp(64), backgroundColor: '#0D697C', borderEndStartRadius: 15, borderBottomRightRadius: 15, paddingVertical: hp(2), paddingHorizontal: wp(2), }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={{ width: 18, height: 18 }} resizeMode="contain" source={require('../assets/call.png')} />
                                            <Text style={{ color: '#ffffff', fontWeight: '500',fontSize: 12, marginStart: wp(1) }}>+91 9876543219</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: hp(0.5) }}>
                                            <Image style={{ width: 20, height: 20 }} resizeMode="contain" source={require('../assets/map1.png')} />
                                            <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: 12, marginStart: wp(1), width: wp(30) }}>Door No 39-6-71, Botcha Square, Village, Kapparada Road, Madhavadhara, Visakhapatnam, Andhra Pradesh 530007</Text>
                                        </View>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <View style={{ width: 30, height: 30, justifyContent: 'center', borderRadius: 15, backgroundColor: '#ffffff' }}>
                                            <Text style={{ color: '#0D697C', textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>5</Text>
                                        </View>
                                        <Text style={{ color: '#ffffff', fontWeight: '500', marginTop: hp(0.5) }}>₹25,000</Text>
                                        <Text style={{ color: '#ffffff', fontWeight: '500', fontSize: 12, marginTop: hp(0.5) }}>06/10/2025</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: hp(2) }}>
                                    <View style={{ backgroundColor: '#ffffff', width: wp(20), borderRadius: 20, height: hp(4), justifyContent: 'center' }}>
                                        <Text style={{ color: '#0D697C', fontWeight: 'bold', textAlign: 'center', fontSize: 12 }}>Accept</Text>
                                    </View>
                                    <View style={{ borderColor: '#ffffff', borderWidth: 1, width: wp(20), borderRadius: 20, height: hp(4), justifyContent: 'center', marginStart: wp(2) }}>
                                        <Text style={{ color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 12 }}>Reject</Text>
                                    </View>
                                    <View style={{ borderColor: '#ffffff', borderWidth: 1, width: wp(12), borderRadius: 20, justifyContent: 'center', height: hp(4), marginStart: wp(2) }}>
                                        <Image style={{ tintColor: '#ffffff', width: 18, height: 18, alignSelf: 'center' }} resizeMode="contain" source={require('../assets/Chat.png')} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default MyOrdersBooking;