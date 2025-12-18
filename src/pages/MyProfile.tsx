import React, { useCallback, useState } from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import PrimaryButton from "../components/PrimaryButton";
import { executeGetResponse } from "../api/api";
import { useFocusEffect } from "@react-navigation/native";

class Componentprops extends Baseprops { }

const MyProfile: React.FC<Componentprops> = (props) => {

    const [profileDetails, setProfileDetails] = useState<any>(null)

    useFocusEffect(
        useCallback(() => {
            loadProfileDetails()
        }, [])
    )

    const loadProfileDetails = async () => {
        const response = await executeGetResponse('secure/myprofile');
        console.log('profile', response)
        if (response.code == 0) {
            setProfileDetails(response.data)
        } else {
            Alert.alert(
                'Profile Error',
                'Unable to load your profile details. Please try again later.'
            );
        }
    }

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
                    <Image style={{ width: 60, height: 60, borderRadius: 30, }} source={{ uri: profileDetails?.profile.profile_image }} />
                    <View style={{ flex: 1, marginStart: wp(3) }}>
                        <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold' }}>{profileDetails?.profile.full_name}</Text>
                        <Text style={{ color: '#000000', marginTop: hp(0.5), fontWeight: '500' }}>{profileDetails?.profile.username}</Text>
                    </View>
                    <Pressable onPress={() => props.navigation.navigate('Settings')}>
                        <Image style={{ width: 20, height: 20, }} resizeMode='contain' source={require('../assets/Setting.png')} />
                    </Pressable>
                </View>

                <View style={{ marginHorizontal: wp(5), marginTop: hp(2), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: '500', }}>{profileDetails?.profile.bio}</Text>
                </View>

                <View style={{ marginHorizontal: wp(5), marginTop: hp(2) }}>
                    <PrimaryButton onclick={() => props.navigation.navigate('EditProfile', { data: profileDetails?.profile })} title="Edit Profile" />
                </View>
                <View style={{ marginHorizontal: wp(5), marginTop: hp(1) }}>
                    <PrimaryButton onclick={() => props.navigation.navigate('MyOrdersBooking')} title="My Orders / Bookings" />
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: hp(2) }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>{profileDetails?.profile.posts_count}</Text>
                        <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }}>Posts</Text>
                    </View>
                    <View style={{ backgroundColor: '#000000', width: 1.5, marginHorizontal: wp(7) }}>
                    </View>
                    <Pressable onPress={() => props.navigation.navigate('Followers', { id: profileDetails?.profile?.user_id })} style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>{profileDetails?.profile.following_count}</Text>
                        <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }}>Following</Text>
                    </Pressable>
                    <View style={{ backgroundColor: '#000000', width: 1.5, marginHorizontal: wp(7) }}>
                    </View>
                    <Pressable onPress={() => props.navigation.navigate('Followers', { id: profileDetails?.profile?.user_id })} style={{ alignItems: 'center' }}>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}>{profileDetails?.profile.followers_count}</Text>
                        <Text style={{ color: '#000000', fontWeight: '500', fontSize: 16 }}>Followers</Text>
                    </Pressable>
                </View>

                <View style={{ backgroundColor: '#00000040', height: 1.5, marginTop: hp(2) }}></View>

                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp(1.5) }}>
                        <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold' }}>Posts</Text>
                        <Text style={{ color: '#9A9A9A', fontSize: 18, fontWeight: 'bold' }}>Products</Text>
                        <Text style={{ color: '#9A9A9A', fontSize: 18, fontWeight: 'bold' }}>Services</Text>
                    </View>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: hp(2), marginHorizontal: wp(5), justifyContent: 'space-between' }}>
                        {profileDetails?.posts.map((e: any) => (
                            <Image key={e} style={{ width: wp(28.5), marginBottom: hp(1), height: wp(28), borderRadius: 7 }} source={{ uri: e.thumbnail_url }} />
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