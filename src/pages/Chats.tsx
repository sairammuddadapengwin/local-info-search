import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const Chats: React.FC<Componentprops> = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    </Pressable>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Chats</Text>
                    <Image style={{ width: 20, height: 20, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Delete.png')} />
                </View>

                <View style={{ borderColor: '#006175', marginHorizontal: wp(5), marginTop: hp(2), paddingHorizontal: wp(3), borderRadius: 10, borderWidth: 1, height: hp(5), flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/typing.png')} />
                    <TextInput
                        placeholder="Type something..........."
                        placeholderTextColor="#006175"
                        style={{ fontWeight: '500', opacity: 0.7, paddingHorizontal: wp(3) }}
                    />
                </View>

                <View>
                    <Text style={{ color: '#000000', fontSize: 18, marginTop: hp(2), marginHorizontal: wp(5), fontWeight: '500' }}>Frequently chatted</Text>
                    <ScrollView style={{ marginHorizontal: wp(5), paddingVertical: hp(2) }} horizontal>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(e => (
                            <View style={{ marginEnd: wp(2) }}>
                                <Image style={{ width: 60, height: 60, borderRadius: 10 }} source={require('../assets/chatimg.jpg')} />
                                <View style={{ position: 'absolute', bottom: -5, right: -5, width: 16, height: 16, backgroundColor: '#21B014', borderRadius: 10 }}></View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <ScrollView>
                    <Text style={{ color: '#000000', fontSize: 16, marginHorizontal: wp(5), fontWeight: '500' }}>All Messages</Text>
                    <Pressable onPress={() => props.navigation.navigate('ChatDetails')} style={{ flexDirection: 'row', marginTop: hp(2), alignItems: 'center', marginHorizontal: wp(5), justifyContent: 'space-between' }}>
                        <View>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/man.jpg')} />
                        </View>
                        <View style={{ flex: 1, marginStart: wp(3) }}>
                            <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Joe Mickey</Text>
                            <Text style={{ marginTop: hp(0.5) }}>Okay dear....How much?</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#B3B9C9', fontWeight: 'bold' }}>08:43</Text>
                            <Image style={{ width: 12, height: 12, marginTop: 5 }} resizeMode="contain" source={require('../assets/tik.png')} />
                        </View>
                    </Pressable>

                    <View style={{ flexDirection: 'row', marginTop: hp(2), alignItems: 'center', marginHorizontal: wp(5), justifyContent: 'space-between' }}>
                        <View>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/man.jpg')} />
                        </View>
                        <View style={{ flex: 1, marginStart: wp(3) }}>
                            <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Joe Mickey</Text>
                            <Text style={{ marginTop: hp(0.5) }}>Bobo yiiiiiii</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#B3B9C9', fontWeight: 'bold' }}>08:43</Text>
                            <View style={{ width: 20, height: 20, borderRadius: 10, justifyContent: 'center', backgroundColor: '#006175', marginTop: 5 }}>
                                <Text style={{ color: '#ffffff', fontWeight: 'bold', alignSelf: 'center', fontSize: 12 }}>2</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp(2), alignItems: 'center', marginHorizontal: wp(5), justifyContent: 'space-between' }}>
                        <View>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/man.jpg')} />
                        </View>
                        <View style={{ flex: 1, marginStart: wp(3) }}>
                            <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Joe Mickey</Text>
                            <Text style={{ marginTop: hp(0.5) }}>Okay dear....How much?</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#B3B9C9', fontWeight: 'bold' }}>08:43</Text>
                            <Image style={{ width: 12, height: 12, marginTop: 5 }} resizeMode="contain" source={require('../assets/tik.png')} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp(2), alignItems: 'center', marginHorizontal: wp(5), justifyContent: 'space-between' }}>
                        <View>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/man.jpg')} />
                        </View>
                        <View style={{ flex: 1, marginStart: wp(3) }}>
                            <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Joe Mickey</Text>
                            <Text style={{ marginTop: hp(0.5) }}>Hello</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#B3B9C9', fontWeight: 'bold' }}>08:43</Text>
                            <View style={{ width: 20, height: 20, borderRadius: 10, justifyContent: 'center', backgroundColor: '#006175', marginTop: 5 }}>
                                <Text style={{ color: '#ffffff', fontWeight: 'bold', alignSelf: 'center', fontSize: 12 }}>3</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: hp(2), alignItems: 'center', marginHorizontal: wp(5), justifyContent: 'space-between' }}>
                        <View>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/man.jpg')} />
                        </View>
                        <View style={{ flex: 1, marginStart: wp(3) }}>
                            <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Joe Mickey</Text>
                            <Text style={{ marginTop: hp(0.5) }}>Okay dear....How much?</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#B3B9C9', fontWeight: 'bold' }}>08:43</Text>
                            <Image style={{ width: 12, height: 12, marginTop: 5 }} resizeMode="contain" source={require('../assets/tik.png')} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp(2), alignItems: 'center', marginHorizontal: wp(5), justifyContent: 'space-between' }}>
                        <View>
                            <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/man.jpg')} />
                        </View>
                        <View style={{ flex: 1, marginStart: wp(3) }}>
                            <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Joe Mickey</Text>
                            <Text style={{ marginTop: hp(0.5) }}>Poyava unnava</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#B3B9C9', fontWeight: 'bold' }}>08:43</Text>
                            <View style={{ width: 20, height: 20, borderRadius: 10, justifyContent: 'center', backgroundColor: '#006175', marginTop: 5 }}>
                                <Text style={{ color: '#ffffff', fontWeight: 'bold', alignSelf: 'center', fontSize: 12 }}>1</Text>
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

export default Chats;