import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const PlayListCategory: React.FC<Componentprops> = (props) => {

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

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: wp(5), marginTop: hp(3) }}>
                    <Text style={{ color: '#006175', fontSize: 16, fontWeight: 'bold' }}>Cat 1</Text>
                    <Text style={{ color: '#9A9A9A', fontSize: 16, fontWeight: 'bold' }}>Cat 2</Text>
                    <Text style={{ color: '#9A9A9A', fontSize: 16, fontWeight: 'bold' }}>Cat 3</Text>
                    <Text style={{ color: '#9A9A9A', fontSize: 16, fontWeight: 'bold' }}>Cat 4</Text>
                    <Text style={{ color: '#9A9A9A', fontSize: 16, fontWeight: 'bold' }}>Cat 5</Text>
                </View>

                <ScrollView>

                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: hp(2), marginHorizontal: wp(5) }}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((e: any) => (
                            <Pressable onPress={() => props.navigation.navigate('ReelsPlayList')} key={e} style={{ width: wp(29), marginBottom: hp(1) }}>
                                <Image style={{ width: wp(29), height: hp(20), }} source={require('../assets/fakeimg.jpg')} />

                                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: hp(1), left: wp(2) }}>
                                    <Image style={{ width: 20, height: 20, borderRadius: 10, }} source={require('../assets/roundimg.jpg')} />
                                    <View style={{ marginStart: wp(2) }}>
                                        <Text style={{ color: '#ffffff', fontSize: 10, fontWeight: '500' }}>Oyin Dolapo</Text>
                                        <Text style={{ color: '#ffffff', fontSize: 10, fontWeight: '500' }}>1hr ago</Text>
                                    </View>
                                </View>
                            </Pressable>
                        ))}
                    </View>

                </ScrollView>
                <View>
                    <BottomNavigation step='4' navigation={props.navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PlayListCategory;