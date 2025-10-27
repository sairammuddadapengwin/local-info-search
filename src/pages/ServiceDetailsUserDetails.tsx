import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const ServiceDetailsUserDetails: React.FC<Componentprops> = (props) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                        <Pressable onPress={() => props.navigation.goBack()}>
                            <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                        </Pressable>
                        <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Post Title</Text>
                        <Image style={{ width: 20, height: 20, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Delete.png')} />
                    </View>

                    <Image style={{ width: wp(90), height: hp(25), alignSelf: 'center', marginTop: hp(2), borderRadius: 10 }} source={require('../assets/men.jpg')} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                        <Image style={{ width: 60, height: 60, borderRadius: 30, }} source={require('../assets/profile.jpg')} />
                        <View style={{ flex: 1, marginStart: wp(3) }}>
                            <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold' }}>Abdul Qudus</Text>
                            <Text style={{ color: '#000000', marginTop: hp(0.5), fontWeight: '500' }}>Abeokuta, Ogun</Text>
                        </View>
                        <View style={{ backgroundColor: '#006175', paddingHorizontal: wp(5), paddingVertical: hp(1), borderRadius: 20 }}>
                            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Connect</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: hp(2) }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>87</Text>
                            <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }}>Posts</Text>
                        </View>
                        <View style={{ backgroundColor: '#000000', width: 1.5, marginHorizontal: wp(7) }}>
                        </View>
                        <Pressable onPress={() => props.navigation.navigate('Followers')} style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>870</Text>
                            <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }}>Following</Text>
                        </Pressable>
                        <View style={{ backgroundColor: '#000000', width: 1.5, marginHorizontal: wp(7) }}>
                        </View>
                        <Pressable onPress={() => props.navigation.navigate('Followers')} style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>15k</Text>
                            <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }}>Followers</Text>
                        </Pressable>
                    </View>

                    <View style={{ backgroundColor: '#00000040', height: 1.5, marginTop: hp(3) }}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginHorizontal: wp(5), marginTop: hp(1.5) }}>
                        <Image style={{ width: 25, height: 25 }} resizeMode='contain' source={require('../assets/Heart.png')} />
                        <Image style={{ width: 25, height: 25, tintColor: '#000000' }} resizeMode='contain' source={require('../assets/Chat.png')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '#006175', paddingHorizontal: wp(2), paddingVertical: hp(0.7), borderRadius: 5, flexDirection: 'row', justifyContent: 'center' }}>
                                <View style={{ backgroundColor: '#ffffff', justifyContent: 'center', borderRadius: 5, width: 20, height: 20, alignSelf: 'center' }}>
                                    <Image style={{ width: 15, height: 15, alignSelf: 'center' }} resizeMode="contain" source={require('../assets/star.png')} />
                                </View>
                                <Text style={{ color: '#ffffff', fontWeight: 'bold', alignSelf: 'center', marginStart: wp(2) }}>3.5</Text>
                            </View>
                            <Text style={{ alignSelf: 'center', color: '#000000', fontWeight: '500', marginStart: wp(2) }}>1.7k+</Text>
                        </View>
                        <Image style={{ width: 25, height: 25 }} resizeMode='contain' source={require('../assets/share.png')} />
                    </View>
                    <View style={{ backgroundColor: '#00000040', height: 1.5, marginTop: hp(1.5) }}></View>

                    <Pressable style={{flex: 1}} onPress={() => props.navigation.navigate('MapViewNearUsers')}>
                        <Image style={{ width: wp(90), flex: 1, marginTop: hp(2), borderRadius: 20, alignSelf: 'center' }} source={require('../assets/map_icon.jpg')} />
                    </Pressable>
                </View>
            </View>
            <View>
                <BottomNavigation step='2' navigation={props.navigation} />
            </View>
        </SafeAreaView>
    )
}

export default ServiceDetailsUserDetails;