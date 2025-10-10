import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const Comments: React.FC<Componentprops> = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    </Pressable>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Comment</Text>
                    <Image style={{ width: 20, height: 20, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Delete.png')} />
                </View>
                <ScrollView>
                    <View style={{ backgroundColor: '#dcdcdc', paddingHorizontal: wp(5), paddingVertical: hp(1), marginHorizontal: wp(5), marginTop: hp(2), borderRadius: 10 }}>
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
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: wp(3) }}>
                                    <Pressable onPress={() => props.navigation.navigate('Comments')}>
                                        <Image style={{ width: 18, height: 18, tintColor: '#000000' }} resizeMode='contain' source={require('../assets/Chat.png')} />
                                    </Pressable>
                                    <Text style={{ color: '#000000', fontWeight: '500', marginStart: wp(3) }}>57</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontWeight: '500', marginTop: hp(1) }}>Liked by Blazinshado and 100+ others</Text>
                    </View>

                    {[1, 2, 3, 4].map((e: any) => (
                        <View key={e} style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/roundimg.jpg')} />
                                <View style={{ flexDirection: 'row', marginTop: hp(1), alignItems: 'center' }}>
                                    <Image style={{ width: 15, height: 15 }} resizeMode="contain" source={require('../assets/Heart.png')} />
                                    <Text style={{ color: '#000000', marginStart: wp(1), fontWeight: 'bold' }}>25</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, width: wp(70), marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Chris uil</Text>
                                <Text style={{ color: '#000000', fontSize: 12, fontWeight: '500', opacity: 0.7 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra aliquam, congue habitasse tortor. Fringilla nunc aliquam volutpat suscipit porttitor in quis sagittis hac. Tellus sed ac libero</Text>
                            </View>
                            <Text style={{ fontWeight: '500' }}>2hrs Ago</Text>
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

export default Comments;