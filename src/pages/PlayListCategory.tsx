import React, { useCallback, useState } from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import { executeGetResponse } from "../api/api";
import { useFocusEffect } from "@react-navigation/native";

class Componentprops extends Baseprops { }

const PlayListCategory: React.FC<Componentprops> = (props) => {

    const [playListCat, setPlayListCat] = useState<any>(null)
    const [selectedIndex, setSelectedIndex] = useState(0);

    useFocusEffect(
        useCallback(() => {
            loadCategoryList()
        }, [])
    )

    const loadCategoryList = async () => {
        const response = await executeGetResponse('secure/home/videos')
        console.log('response', response)
        if (response.code == 0) {
            setPlayListCat(response.data)
        } else {
            Alert.alert(
                'Alert!',
                'Unable to load categories. Please try again.'
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
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Local Info Search</Text>
                    <Image style={{ width: 20, height: 20, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Delete.png')} />
                </View>

                <View>
                    <ScrollView horizontal style={{ height: hp(7) }}>
                        {playListCat?.categories.map((e: any, index: number) => (
                            <Pressable key={index} onPress={() => setSelectedIndex(index)} style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: wp(5), marginTop: hp(3) }}>
                                <Text style={[selectedIndex == index ? { color: '#006175' } : { color: '#c0c0c0' }, { fontSize: 18, fontWeight: 'bold' }]}>{e.category_name}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>

                <ScrollView>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: hp(2), marginHorizontal: wp(5) }}>
                        {playListCat?.categories[selectedIndex]?.videos.map((e: any, index: number) => (
                            <Pressable onPress={() => props.navigation.navigate('CategoryVedioPlay', { id: e.id })} key={index} style={{ width: wp(43), marginBottom: hp(1) }}>
                                <Image style={{ width: wp(43), height: hp(20), borderRadius: 10 }} resizeMode='stretch' source={{ uri: e.thumbnail_url }} />
                                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: hp(1), left: wp(2) }}>
                                    <View style={{ marginStart: wp(2) }}>
                                        <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>{e.author}</Text>
                                        <Text style={{ color: '#000000', fontSize: 14, fontWeight: 'bold' }}>{e.time_ago}</Text>
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