import React, { useState } from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import PrimaryButton from "../components/PrimaryButton";
import { Dropdown } from "react-native-element-dropdown";

class Componentprops extends Baseprops { }

const EditProfile: React.FC<Componentprops> = (props) => {

    const [gender, setGender] = useState(null);

    const data = [
        { label: 'Male', value: 'Male' },
        { label: 'FeMale', value: 'FeMale' },
    ];


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flex: 1 }}>
                
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(2) }}>
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image style={{ width: 20, height: 20 }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    </Pressable>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold' }}>Edit Profile</Text>
                    <Image style={{ width: 20, height: 20, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Delete.png')} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: wp(5), marginTop: hp(4) }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 30, }} source={require('../assets/roundimg.jpg')} />
                    <View style={{ flex: 1, marginStart: wp(3) }}>
                        <Text style={{ color: '#000000', fontSize: 18, fontWeight: 'bold' }}>Oyin Dolapo</Text>
                        <Text style={{ color: '#000000', marginTop: hp(0.5), fontWeight: '500' }}>Abeokuta, Ogun</Text>
                    </View>
                </View>

                <ScrollView>
                    <Text style={{ marginHorizontal: wp(7), marginTop: hp(3), fontSize: 16, fontWeight: '500' }}>Full name</Text>
                    <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), height: hp(5.5), borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                        <TextInput
                            style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', opacity: 0.7, marginStart: wp(3), flex: 1 }}
                            placeholderTextColor="#000000"
                        />
                    </View>
                    <Text style={{ marginHorizontal: wp(7), marginTop: hp(1), fontSize: 16, fontWeight: '500' }}>Location</Text>
                    <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), height: hp(5.5), borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                        <TextInput
                            style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', opacity: 0.7, marginStart: wp(3), flex: 1 }}
                            placeholderTextColor="#000000"
                        />
                    </View>

                    <View style={{ marginHorizontal: wp(7), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ marginTop: hp(1), fontSize: 16, fontWeight: '500' }}>Phone Number</Text>
                            <View style={{ backgroundColor: '#DCDCDC', width: wp(42), height: hp(5.5), borderColor: '#006175', borderWidth: 1, borderRadius: 10, marginTop: hp(1) }}>
                                <TextInput
                                    style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', opacity: 0.7, marginStart: wp(3), flex: 1 }}
                                    placeholderTextColor="#000000"
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>


                        <View>
                            <Text style={{ marginTop: hp(1), fontSize: 16, fontWeight: '500' }}>Gender</Text>
                            <Dropdown
                                mode='modal'
                                style={{ backgroundColor: '#DCDCDC', width: wp(42), paddingHorizontal: wp(3), height: hp(5.5), borderColor: '#006175', borderWidth: 1, borderRadius: 10, marginTop: hp(1) }}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={data}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder=''
                                searchPlaceholder="Search..."
                                value={gender}
                                onChange={item => {
                                    setGender(item.value);
                                }}
                            />
                        </View>
                    </View>

                    <Text style={{ marginHorizontal: wp(7), marginTop: hp(2), fontSize: 16, fontWeight: '500' }}>About</Text>
                    <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                        <TextInput
                            style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', paddingBottom: hp(5), opacity: 0.7, marginStart: wp(3), flex: 1 }}
                            placeholderTextColor="#000000"
                        />
                    </View>

                    <View style={{ marginHorizontal: wp(7) }}>
                        <Text style={{ marginTop: hp(1), fontSize: 16, fontWeight: '500' }}>Category</Text>
                        <Dropdown
                            mode='modal'
                            style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), height: hp(5.5), borderColor: '#006175', borderWidth: 1, borderRadius: 10, marginTop: hp(1) }}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder=''
                            searchPlaceholder="Search..."
                            value={gender}
                            onChange={item => {
                                setGender(item.value);
                            }}
                        />
                    </View>

                    <View style={{ marginHorizontal: wp(7) }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', marginTop: hp(1) }}>Sub-Category</Text>
                        <Dropdown
                            mode='modal'
                            style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), height: hp(5.5), borderColor: '#006175', borderWidth: 1, borderRadius: 10, marginTop: hp(1) }}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder=''
                            searchPlaceholder="Search..."
                            value={gender}
                            onChange={item => {
                                setGender(item.value);
                            }}
                        />
                    </View>
                </ScrollView>

                <View style={{ marginHorizontal: wp(7), marginVertical: hp(2) }}>
                    <PrimaryButton title="Update" />
                </View>

                <View>
                    <BottomNavigation step='5' navigation={props.navigation} />
                </View>
            </View>
        </SafeAreaView>
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

export default EditProfile;