import { SafeAreaView } from "react-native-safe-area-context";
import { Baseprops, hp, wp } from "../utils/utils";
import {
    Alert, Image, Pressable, ScrollView, Text,
    TextInput, View
} from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import { executeGetResponse } from "../api/api";
import { useEffect, useState } from "react";

class Componentprops extends Baseprops { }

const Followers: React.FC<Componentprops> = (props) => {

    const [followersList, setFollowersList] = useState<any>([])
    const [selectType, setSelectType] = useState<any>('follower')

    useEffect(() => {
        if (props.route && props.route.params && props.route.params.id && selectType == 'follower') {
            loadFollowers(props.route && props.route.params && props.route.params.id)
        } else if (props.route && props.route.params && props.route.params.id && selectType == 'following') {
            loadFollowing(props.route && props.route.params && props.route.params.id)
        }
    }, [selectType])

    const loadFollowers = async (UserId: any) => {
        const response = await executeGetResponse(`secure/profile/user/follwers/${UserId}`)
        console.log('res', response)
        console.log('res', UserId)
        if (response.code == 0) {
            setFollowersList(response.data.followers)
        } else {
            Alert.alert(
                'Alert!',
                'Unable to load followers. Please try again.'
            );
        }
    }

    const loadFollowing = async (UserId: any) => {
        const response = await executeGetResponse(`secure/profile/user/following/${UserId}`)
        console.log('res', response)
        console.log('res', UserId)
        if (response.code == 0) {
            setFollowersList(response.data.following)
        } else {
            Alert.alert(
                'Alert!',
                'Unable to load following. Please try again.'
            );
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    </Pressable>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-evenly' }}>
                        <Text onPress={() => setSelectType('follower')} style={[selectType == 'follower' ? { color: '#000000', } : { color: '#767676', }, { fontSize: 20, fontWeight: 'bold' }]}>Followers</Text>
                        <Text onPress={() => setSelectType('following')} style={[selectType == 'following' ? { color: '#000000' } : { color: '#767676', }, { fontSize: 20, fontWeight: 'bold' }]}>Following</Text>
                    </View>
                </View>

                <View style={{ borderColor: '#006175', marginHorizontal: wp(5), marginTop: hp(2), paddingHorizontal: wp(3), borderRadius: 10, borderWidth: 1, height: hp(5), flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/typing.png')} />
                    <TextInput
                        placeholder="Type something..........."
                        placeholderTextColor="#006175"
                        style={{ fontWeight: '500', opacity: 0.7, paddingHorizontal: wp(3) }}
                    />
                </View>

                <ScrollView style={{ marginTop: hp(3) }}>
                    {followersList.map((e: any) => (
                        <View key={e} style={{ flexDirection: 'row', marginBottom: hp(2), alignItems: 'center', marginHorizontal: wp(5), justifyContent: 'space-between' }}>
                            <View>
                                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={{ uri: e.avatar }} />
                            </View>
                            <View style={{ flex: 1, marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>{e.full_name}</Text>
                                <Text style={{ marginTop: hp(0.5) }}>{e.bio}</Text>
                            </View>
                            <View style={{ marginStart: wp(2) }}>
                                <View style={{ backgroundColor: '#006175', paddingHorizontal: wp(5), paddingVertical: hp(1), borderRadius: 20 }}>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Connect</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                <View>
                    <BottomNavigation step='1' navigation={props.navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Followers;