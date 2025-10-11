import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import PrimaryButton from "../components/PrimaryButton";

class Componentprops extends Baseprops { }

const MyProfile: React.FC<Componentprops> = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    </Pressable>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>My Profile</Text>
                    <Image style={{ width: 20, height: 20, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Delete.png')} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(4) }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 30, }} source={require('../assets/roundimg.jpg')} />
                    <View style={{ flex: 1, marginStart: wp(3) }}>
                        <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold' }}>Oyin Dolapo</Text>
                        <Text style={{ color: '#000000', marginTop: hp(0.5), fontWeight: '500' }}>Abeokuta, Ogun</Text>
                    </View>
                    <Image style={{ width: 20, height: 20, }} resizeMode='contain' source={require('../assets/Setting.png')} />
                </View>

                <View style={{ marginHorizontal: wp(5), marginTop: hp(2), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: '500',  }}>I’m a postive person. I love to travel and eat Always available for chat</Text>
                </View>

                <View style={{marginHorizontal: wp(5), marginTop: hp(2)}}>
                    <PrimaryButton onclick={() => props.navigation.navigate('EditProfile')} title="Edit Profile" />
                </View>
                <View style={{marginHorizontal: wp(5), marginTop: hp(1)}}>
                    <PrimaryButton title="My Orders / Bookings" />
                </View>

                
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: hp(2) }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>87</Text>
                        <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }}>Posts</Text>
                    </View>
                    <View style={{ backgroundColor: '#000000', width: 1.5, marginHorizontal: wp(7) }}>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>870</Text>
                        <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }}>Following</Text>
                    </View>
                    <View style={{ backgroundColor: '#000000', width: 1.5, marginHorizontal: wp(7) }}>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>15k</Text>
                        <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }}>Followers</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: '#00000040', height: 1.5, marginTop: hp(2) }}></View> 
                <ScrollView>
                    {/* <View style={{ backgroundColor: '#00000040', height: 1.5, marginTop: hp(3) }}></View>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', marginHorizontal: wp(5), marginTop: hp(1) }}>Highlights</Text>
                    <ScrollView horizontal style={{ marginHorizontal: wp(5), marginTop: hp(1) }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => (
                            <View style={{ alignItems: 'center', marginEnd: wp(3) }}>
                                <Image style={{ width: 56, height: 56, borderRadius: 28 }} source={require('../assets/leaf.jpg')} />
                                <Text style={{ color: '#000000', fontWeight: '500', marginTop: hp(0.5), fontSize: 16 }}>Joe</Text>
                            </View>
                        ))}
                    </ScrollView>*/}


                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp(1.5) }}>
                        <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold' }}>Posts</Text>
                        <Text style={{ color: '#9A9A9A', fontSize: 18, fontWeight: 'bold' }}>Products</Text>
                        <Text style={{ color: '#9A9A9A', fontSize: 18, fontWeight: 'bold' }}>Services</Text>
                    </View>

                    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: hp(2), marginHorizontal: wp(5), justifyContent: 'space-between'}}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => (
                            <Image key={e} style={{ width: wp(28.5), marginBottom: hp(1), height: wp(28), borderRadius: 7 }} source={require('../assets/nature.jpg')} />
                        ))}
                    </View>

                </ScrollView>


                <View>
                    <BottomNavigation step='5' navigation={props.navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MyProfile;