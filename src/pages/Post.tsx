
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import DatePicker from "react-native-date-picker";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import BottomNavigation from "../components/BottomNavigation";

class Componentprops extends Baseprops { }

const Post: React.FC<Componentprops> = (props) => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [gender, setGender] = useState(null);

    const data = [
        { label: 'Male', value: 'Male' },
        { label: 'FeMale', value: 'FeMale' },
    ];

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View style={{ flex: 1 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                        <Pressable onPress={() => props.navigation.goBack()}>
                            <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                        </Pressable>
                        <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Post</Text>
                        <Image style={{ width: 20, height: 20, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Delete.png')} />
                    </View>
                    
                    <ScrollView>
                        <Text style={{ marginHorizontal: wp(7), marginTop: hp(3), fontSize: 16, fontWeight: '500' }}>Select Image(s)</Text>
                        <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), height: hp(16), justifyContent: 'flex-end', borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                           <Image style={{width: 25, height: 25, tintColor: '#006175', marginBottom: hp(2), marginEnd: wp(2), alignSelf: 'flex-end'}}  source={require('../assets/post.png')} />
                        </View>
                        <Text style={{ marginHorizontal: wp(7), marginTop: hp(2), fontSize: 16, fontWeight: '500' }}>Add caption</Text>
                        <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3),  borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: '500', color: '#000000', paddingBottom: hp(4), opacity: 0.7, marginStart: wp(3), flex: 1 }}
                                placeholderTextColor="#000000"
                                multiline
                            />
                        </View>

                        <Text style={{ marginHorizontal: wp(7), marginTop: hp(2), fontSize: 16, fontWeight: '500' }}>Add hastags</Text>
                        <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3),  borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: '500', color: '#000000', paddingBottom: hp(3), opacity: 0.7, marginStart: wp(3), flex: 1 }}
                                placeholderTextColor="#000000"
                                multiline
                            />
                        </View>

                        <Text style={{ marginHorizontal: wp(7), marginTop: hp(2), fontSize: 16, fontWeight: '500' }}>Price</Text>
                        <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), height: hp(6),  borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: '500', color: '#000000',  opacity: 0.7, marginStart: wp(3), flex: 1 }}
                                placeholderTextColor="#000000"
                            />
                        </View>

                        <View style={{marginHorizontal: wp(7), marginTop: hp(5)}}>
                            <PrimaryButton title="Upload" />
                        </View>

                    </ScrollView>

                    <View style={{ marginBottom: hp(2) }}>
                        <BottomNavigation step="3" navigation={props.navigation} />
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
        tintColor: '#000000'
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});

export default Post;