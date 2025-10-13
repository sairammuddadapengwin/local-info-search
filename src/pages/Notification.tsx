import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const Notification: React.FC<Componentprops> = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    </Pressable>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Notifications</Text>
                    <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/Delete.png')} />
                </View>

                <ScrollView>
                    <View style={{ marginHorizontal: wp(5) }}>
                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', marginTop: hp(2) }}>Today</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2) }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/roundimg.jpg')} />
                            <View style={{ marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Patrick <Text style={{ fontWeight: '500' }}>Followed you</Text></Text>
                                <Text style={{ color: '#000000', fontWeight: '500' }}>Just Now</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2) }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/roundimg.jpg')} />
                            <View style={{ marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Chris <Text style={{ fontWeight: '500' }}> Commented on your post</Text></Text>
                                <Text style={{ color: '#000000', fontWeight: '500' }}>2mins ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2) }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/roundimg.jpg')} />
                            <View style={{ marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Segun Liked your <Text style={{ fontWeight: '500' }}>photo</Text></Text>
                                <Text style={{ color: '#000000', fontWeight: '500' }}>15mins ago</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginHorizontal: wp(5) }}>
                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', marginTop: hp(2) }}>12 January 2025</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2) }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/roundimg.jpg')} />
                            <View style={{ marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Patrick <Text style={{ fontWeight: '500' }}>Followed you</Text></Text>
                                <Text style={{ color: '#000000', fontWeight: '500' }}>Just Now</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2) }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/roundimg.jpg')} />
                            <View style={{ marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Chris <Text style={{ fontWeight: '500' }}> Commented on your post</Text></Text>
                                <Text style={{ color: '#000000', fontWeight: '500' }}>2mins ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2) }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/roundimg.jpg')} />
                            <View style={{ marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Segun Liked your <Text style={{ fontWeight: '500' }}>photo</Text></Text>
                                <Text style={{ color: '#000000', fontWeight: '500' }}>15mins ago</Text>
                            </View>
                        </View>
                    </View>



                    <View style={{ marginHorizontal: wp(5) }}>
                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold', marginTop: hp(2) }}>16 January 2025</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2) }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/roundimg.jpg')} />
                            <View style={{ marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Patrick <Text style={{ fontWeight: '500' }}>Followed you</Text></Text>
                                <Text style={{ color: '#000000', fontWeight: '500' }}>Just Now</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2) }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/roundimg.jpg')} />
                            <View style={{ marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Chris <Text style={{ fontWeight: '500' }}> Commented on your post</Text></Text>
                                <Text style={{ color: '#000000', fontWeight: '500' }}>2mins ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(2) }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/roundimg.jpg')} />
                            <View style={{ marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Segun Liked your <Text style={{ fontWeight: '500' }}>photo</Text></Text>
                                <Text style={{ color: '#000000', fontWeight: '500' }}>15mins ago</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                
                <View>
                    <BottomNavigation step='1' navigation={props.navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Notification;