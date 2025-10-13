import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, StatusBar, Text, TextInput, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const HomeScreen: React.FC<Componentprops> = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle="dark-content"
                showHideTransition="fade"
            />
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', marginTop: hp(1), alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5) }}>
                    <View style={{ borderColor: '#006175', flex: 1, paddingHorizontal: wp(3), borderRadius: 10, borderWidth: 1, height: hp(5), flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/typing.png')} />
                        <TextInput
                            placeholder="Type something..........."
                            placeholderTextColor="#006175"
                            style={{ fontWeight: '500', opacity: 0.7, paddingHorizontal: wp(3) }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: wp(3) }}>
                        <Pressable onPress={() => props.navigation.navigate('Chats')}>
                            <Image style={{ width: 28, height: 28 }} resizeMode="contain" source={require('../assets/Chat.png')} />
                        </Pressable>
                        <Pressable onPress={() => props.navigation.navigate('Notification')}>
                            <Image style={{ width: 28, height: 28, marginStart: wp(3) }} resizeMode="contain" source={require('../assets/notifi.png')} />
                        </Pressable>
                    </View>
                </View>

                <ScrollView>

                    <View style={{ height: hp(25) }}>
                        <ScrollView horizontal style={{ marginTop: hp(2), marginHorizontal: wp(3) }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Pressable onPress={() => props.navigation.navigate('AddStory')} style={{ width: wp(25), marginStart: wp(2) }}>
                                    <View style={{ borderColor: '#000000', backgroundColor: '#dcdcdc', borderWidth: 1, width: wp(25), borderRadius: 10, height: hp(18) }}></View>
                                    <View style={{ width: 36, height: 36, marginTop: hp(-2.5), justifyContent: 'center', backgroundColor: '#000000', borderColor: '#000000', borderWidth: 1, borderRadius: 20, alignSelf: 'center' }}>
                                        <Image style={{ width: 18, height: 18, alignSelf: 'center', tintColor: '#ffffff' }} source={require('../assets/plus.png')} />
                                    </View>
                                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: '500', marginTop: hp(0.5), textAlign: 'center' }}>Add Story</Text>
                                </Pressable>

                                {[1, 2, 3, 4, 5, 6].map((e: any) => (
                                    <Pressable onPress={() => props.navigation.navigate('StoriesPlay')} key={e} style={{ width: wp(30), marginStart: wp(3) }}>
                                        <Image style={{ width: wp(30), height: hp(18), borderRadius: 10, }} source={require('../assets/fakeimg.jpg')} />
                                        <View style={{ marginTop: hp(-2.5), justifyContent: 'center', borderRadius: 20, alignSelf: 'center' }}>
                                            <Image style={{ width: 36, height: 36, borderRadius: 20, alignSelf: 'center' }} source={require('../assets/roundimg.jpg')} />
                                        </View>
                                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: '500', marginTop: hp(0.5), textAlign: 'center' }}>Sairam</Text>
                                    </Pressable>
                                ))}
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ backgroundColor: '#dcdcdc', paddingHorizontal: wp(5), paddingVertical: hp(1), marginHorizontal: wp(5), marginTop: hp(2), borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Pressable onPress={() => props.navigation.navigate('UserProfile')}>
                                <Image style={{ width: 45, height: 45, borderRadius: 25, }} source={require('../assets/roundimg.jpg')} />
                            </Pressable>
                            <View style={{ marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Oyin Dolapo</Text>
                                <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>1hr ago</Text>
                            </View>
                        </View>
                        <Text style={{ marginTop: hp(1), fontWeight: '500' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra </Text>
                        <Image style={{ width: wp(80), height: hp(20), borderRadius: 10, marginTop: hp(1) }} source={require('../assets/men.jpg')} />

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hp(1) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 30, height: 30, borderRadius: 25, }} source={require('../assets/roundimg.jpg')} />
                                <Image style={{ width: 30, height: 30, borderRadius: 25, marginStart: wp(-3) }} source={require('../assets/roundimg.jpg')} />
                                <Image style={{ width: 30, height: 30, borderRadius: 25, marginStart: wp(-3) }} source={require('../assets/roundimg.jpg')} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={{ width: 18, height: 18, }} resizeMode='contain' source={require('../assets/Heart.png')} />
                                    <Text style={{ color: '#000000', fontWeight: '500', marginStart: wp(3) }}>247</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: wp(3) }}>
                                    <Pressable onPress={() => props.navigation.navigate('Comments')}>
                                        <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode='contain' source={require('../assets/Chat.png')} />
                                    </Pressable>
                                    <Text style={{ color: '#000000', fontWeight: '500', marginStart: wp(3) }}>57</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontWeight: '500', marginTop: hp(1) }}>Liked by Blazinshado and 100+ others</Text>
                        <Text style={{ fontWeight: '500', opacity: 0.6, }}>View all 57 comments</Text>
                    </View>

                    <ScrollView horizontal style={{ marginTop: hp(2), marginHorizontal: wp(3) }}>
                        {[1, 2, 3, 4, 5, 6].map((e: any) => (
                            <Pressable onPress={() => props.navigation.navigate('ReelsPlayList')} key={e} style={{ width: wp(44), marginStart: wp(2) }}>
                                <Image style={{ width: wp(44), height: hp(25), borderRadius: 10, }} resizeMode="stretch" source={require('../assets/fakeimg.jpg')} />
                                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: hp(1), left: wp(2) }}>
                                    <Image style={{ width: 20, height: 20, borderRadius: 10, }} source={require('../assets/roundimg.jpg')} />
                                    <View style={{ marginStart: wp(2) }}>
                                        <Text style={{ color: '#ffffff', fontSize: 10, fontWeight: '500' }}>Oyin Dolapo</Text>
                                        <Text style={{ color: '#ffffff', fontSize: 10, fontWeight: '500' }}>1hr ago</Text>
                                    </View>
                                </View>

                                <View style={{ position: 'absolute', bottom: 5, width: wp(45), paddingHorizontal: wp(2) }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image style={{ width: 18, height: 18, borderRadius: 9, }} source={require('../assets/roundimg.jpg')} />
                                            <Image style={{ width: 18, height: 18, borderRadius: 9, marginStart: wp(-3) }} source={require('../assets/roundimg.jpg')} />
                                            <Image style={{ width: 18, height: 18, borderRadius: 9, marginStart: wp(-3) }} source={require('../assets/roundimg.jpg')} />
                                        </View>                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image style={{ width: 8, height: 8, }} resizeMode='contain' source={require('../assets/Heart.png')} />
                                                <Text style={{ color: '#ffffff', fontSize: 10, marginStart: wp(1) }}>247</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: wp(3) }}>
                                                <Image style={{ width: 8, height: 8, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Chat.png')} />
                                                <Text style={{ color: '#ffffff', fontSize: 10, marginStart: wp(1) }}>57</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Text style={{ fontSize: 10, color: '#ffffff', marginTop: hp(0.5) }}>Liked by Blazinshado and 100+</Text>
                                    <Text style={{ fontSize: 10, color: '#ffffff', }}>View all 57 comments</Text>
                                </View>
                            </Pressable>
                        ))}
                    </ScrollView>

                    {[1, 2, 3, 4].map((e: any) => (
                        <View key={e} style={{ backgroundColor: '#dcdcdc', paddingHorizontal: wp(5), paddingVertical: hp(1), marginHorizontal: wp(5), marginTop: hp(2), borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ width: 45, height: 45, borderRadius: 25, }} source={require('../assets/roundimg.jpg')} />
                                <View style={{ marginStart: wp(3) }}>
                                    <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Oyin Dolapo</Text>
                                    <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>1hr ago</Text>
                                </View>
                            </View>
                            <Text style={{ marginTop: hp(1), fontWeight: '500' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra </Text>
                            <Image style={{ width: wp(80), height: hp(20), borderRadius: 10, marginTop: hp(1) }} source={require('../assets/men.jpg')} />

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hp(1) }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={{ width: 30, height: 30, borderRadius: 25, }} source={require('../assets/roundimg.jpg')} />
                                    <Image style={{ width: 30, height: 30, borderRadius: 25, marginStart: wp(-3) }} source={require('../assets/roundimg.jpg')} />
                                    <Image style={{ width: 30, height: 30, borderRadius: 25, marginStart: wp(-3) }} source={require('../assets/roundimg.jpg')} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image style={{ width: 18, height: 18, }} resizeMode='contain' source={require('../assets/Heart.png')} />
                                        <Text style={{ color: '#000000', fontWeight: '500', marginStart: wp(3) }}>247</Text>
                                    </View>
                                    <Pressable onPress={() => props.navigation.navigate('Comments')} style={{ flexDirection: 'row', alignItems: 'center', marginStart: wp(3) }}>
                                        <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode='contain' source={require('../assets/Chat.png')} />
                                        <Text style={{ color: '#000000', fontWeight: '500', marginStart: wp(3) }}>57</Text>
                                    </Pressable>
                                </View>
                            </View>
                            <Text style={{ fontWeight: '500', marginTop: hp(1) }}>Liked by Blazinshado and 100+ others</Text>
                            <Text style={{ fontWeight: '500', opacity: 0.6, }}>View all 57 comments</Text>
                        </View>
                    ))}

                </ScrollView>

                <View style={{ marginBottom: hp(2) }}>
                    <BottomNavigation step="1" navigation={props.navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;