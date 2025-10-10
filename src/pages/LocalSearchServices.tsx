import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const LocalSearchServices: React.FC<Componentprops> = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
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

                    <ScrollView style={{ marginHorizontal: wp(5), marginTop: hp(2) }} horizontal showsHorizontalScrollIndicator={false}>
                        {[1, 2, 3, 4, 5, , 6].map(e => (
                            <View key={e} style={{ alignItems: 'center', marginEnd: wp(5) }}>
                                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/roundimg.jpg')} />
                                <Text style={{ color: '#000000', fontWeight: 'bold' }}>Sairam</Text>
                            </View>
                        ))}
                    </ScrollView>

                    <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold', marginTop: hp(3), marginHorizontal: wp(5) }}>Category</Text>
                    <Text style={{ color: '#000000', fontWeight: '500', marginTop: hp(0.5), marginHorizontal: wp(5) }}>Selected Your Category</Text>

                    <Pressable onPress={() => props.navigation.navigate('ServiceDetails')} style={{borderColor: '#00000080', flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, height: hp(5.5), marginHorizontal: wp(5), marginTop: hp(2), borderRadius: 10}}>
                        <Image style={{width: 30, height: 30, borderRadius: 10, marginStart: wp(1)}} source={require('../assets/edu.jpg')} />
                        <Text style={{color: '#006175', fontSize: 18, fontWeight: '500', flex: 1, marginStart: wp(5)}}>Education</Text>
                        <Image style={{width: 12, height: 12, marginEnd: wp(7)}} resizeMode="contain" source={require('../assets/rightarrow.png')} />
                    </Pressable>
                    <View style={{borderColor: '#00000080', flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, height: hp(5.5), marginHorizontal: wp(5), marginTop: hp(2), borderRadius: 10}}>
                        <Image style={{width: 30, height: 30, borderRadius: 10, marginStart: wp(1)}} source={require('../assets/edu.jpg')} />
                        <Text style={{color: '#006175', fontSize: 18, fontWeight: '500', flex: 1, marginStart: wp(5)}}>Health Care</Text>
                        <Image style={{width: 12, height: 12, marginEnd: wp(7)}} resizeMode="contain" source={require('../assets/rightarrow.png')} />
                    </View>
                    <View style={{borderColor: '#00000080', flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, height: hp(5.5), marginHorizontal: wp(5), marginTop: hp(2), borderRadius: 10}}>
                        <Image style={{width: 30, height: 30, borderRadius: 10, marginStart: wp(1)}} source={require('../assets/edu.jpg')} />
                        <Text style={{color: '#006175', fontSize: 18, fontWeight: '500', flex: 1, marginStart: wp(5)}}>Real estate</Text>
                        <Image style={{width: 12, height: 12, marginEnd: wp(7)}} resizeMode="contain" source={require('../assets/rightarrow.png')} />
                    </View>
                    <View style={{borderColor: '#00000080', flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, height: hp(5.5), marginHorizontal: wp(5), marginTop: hp(2), borderRadius: 10}}>
                        <Image style={{width: 30, height: 30, borderRadius: 10, marginStart: wp(1)}} source={require('../assets/edu.jpg')} />
                        <Text style={{color: '#006175', fontSize: 18, fontWeight: '500', flex: 1, marginStart: wp(5)}}>Home Services</Text>
                        <Image style={{width: 12, height: 12, marginEnd: wp(7)}} resizeMode="contain" source={require('../assets/rightarrow.png')} />
                    </View>

                </ScrollView>
                <View>
                    <BottomNavigation step='2' navigation={props.navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LocalSearchServices;