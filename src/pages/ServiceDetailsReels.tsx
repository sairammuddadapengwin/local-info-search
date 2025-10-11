import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const ServiceDetailsReels: React.FC<Componentprops> = (props) => {

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


                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: hp(2), marginHorizontal: wp(5) }}>
                        {[1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13].map((e: any) => (
                            <View key={e} style={{ width: wp(29), marginBottom: hp(1) }}>
                                <Image style={{ width: wp(29), height: hp(20), }} source={require('../assets/fakeimg.jpg')} />

                                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: hp(1), left: wp(2) }}>
                                    <Image style={{ width: 20, height: 20, borderRadius: 10, }} source={require('../assets/roundimg.jpg')} />
                                    <View style={{ marginStart: wp(2) }}>
                                        <Text style={{ color: '#ffffff', fontSize: 10, fontWeight: '500' }}>Oyin Dolapo</Text>
                                        <Text style={{ color: '#ffffff', fontSize: 10, fontWeight: '500' }}>1hr ago</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>



                </ScrollView>
                <View>
                    <BottomNavigation step='2' navigation={props.navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ServiceDetailsReels;