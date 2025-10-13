import { SafeAreaView } from "react-native-safe-area-context";
import { Baseprops, hp, wp } from "../utils/utils";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const Followers: React.FC<Componentprops> = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    </Pressable>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-evenly' }}>
                        <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Followers</Text>
                        <Text style={{ color: '#767676', fontSize: 20, fontWeight: 'bold' }}>Following</Text>
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

                <ScrollView style={{marginTop: hp(3)}}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12].map(e => (
                        <View key={e} style={{ flexDirection: 'row', marginBottom: hp(2), alignItems: 'center', marginHorizontal: wp(5), justifyContent: 'space-between' }}>
                            <View>
                                <Image style={{ width: 50, height: 50, borderRadius: 25 }} source={require('../assets/man.jpg')} />
                            </View>
                            <View style={{ flex: 1, marginStart: wp(3) }}>
                                <Text style={{ color: '#000000', fontSize: 16, fontWeight: 'bold' }}>Joe Mickey</Text>
                                <Text style={{ marginTop: hp(0.5) }}>Digital Marketing</Text>
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