import React from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const MapViewNearUsers: React.FC<Componentprops> = (props) => {

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

                <View style={{ borderColor: '#006175', marginHorizontal: wp(5), marginTop: hp(2), paddingHorizontal: wp(3), borderRadius: 10, borderWidth: 1, height: hp(5), flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/typing.png')} />
                    <TextInput
                        placeholder="Type something..........."
                        placeholderTextColor="#006175"
                        style={{ fontWeight: '500', opacity: 0.7, paddingHorizontal: wp(3) }}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    <Text style={{ color: '#000000', fontSize: 18, marginHorizontal: wp(5), fontWeight: 'bold', marginTop: hp(2) }}>India {">"}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(1) }}>
                        <Text style={{ color: '#006175', fontSize: 13, fontWeight: 'bold' }}>Andhra Pradesh {">"} </Text>
                        <Text style={{ color: '#9A9A9A', fontSize: 13, fontWeight: 'bold' }}>Visakhapatnam {">"} </Text>
                        <Text style={{ color: '#9A9A9A', fontSize: 13, fontWeight: 'bold' }}>Maddilapalem </Text>
                        <Image style={{ width: 15, height: 15 }} resizeMode='contain' source={require('../assets/Filter.png')} />
                    </View>
                    <Image style={{ width: wp(100), flex: 1, marginTop: hp(2), alignSelf: 'center' }} source={require('../assets/map_icon.jpg')} />
                </View>

                <View>
                    <BottomNavigation step='2' navigation={props.navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MapViewNearUsers;