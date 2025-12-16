
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    ActivityIndicator,
    Alert,
    Image, KeyboardAvoidingView, Platform, Pressable, ScrollView,
    StyleSheet, Text, TextInput, View
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import DatePicker from "react-native-date-picker";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { createSignup } from "../api/api";
import moment from "moment";

class Componentprops extends Baseprops { }

const PersonalInformation: React.FC<Componentprops> = (props) => {

    const [date, setDate] = useState<any>('')
    const [open, setOpen] = useState(false)
    const [gender, setGender] = useState<any>(null);
    const [createObject, setCreateObject] = useState<any>({})
    const [indicator, setIndicator] = useState(false)

    const handleInputChangeValue = (key: string, value: any) => {
        setCreateObject((e: any) => ({ ...e, [key]: value }))
    }

    const handleCreateUser = async () => {
        if (!createObject.full_name || createObject.full_name.trim().length == 0) {
            Alert.alert('Alert!', 'Please Enter Your Name.')
            return
        }
        if (!createObject.email || createObject.email.trim().length == 0) {
            Alert.alert('Alert!', 'Please Enter Your Email.')
            return
        }
        const email = createObject.email.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert('Alert!', 'Please enter a valid email address.');
            return;
        }
        if (!date) {
            Alert.alert('Alert!', 'Please Enter Your Date Of Birth.')
            return
        }
        if (gender.trim().length == 0) {
            Alert.alert('Alert!', 'Please Enter Your Gender.')
            return
        }
        if (!createObject.about || createObject.about.trim().length == 0) {
            Alert.alert('Alert!', 'Please Enter Your About.')
            return
        }
        const object = JSON.parse(JSON.stringify(createObject))
        object.dob = moment(date).format('YYYY-MM-DD')
        object.gender = gender
        setIndicator(true)
        const response = await createSignup(object);
        setIndicator(false)
        if (response.code == 0) {
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'PersonalInformationSecond' }]
            })
        } else {
            Alert.alert(
                'Alert!',
                'Something went wrong. Please try again.'
            );
        }
    }

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
                    <Image style={{ width: 20, height: 20, marginTop: hp(3), marginHorizontal: wp(7) }} resizeMode='contain' source={require('../assets/arrow.png')} />
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 20, marginHorizontal: wp(7), marginTop: hp(7) }}>Personal Information</Text>
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16, opacity: 0.7, marginHorizontal: wp(7), marginTop: hp(1) }}>Please fill the following</Text>

                    <ScrollView>
                        <Text style={{ marginHorizontal: wp(7), marginTop: hp(3), fontSize: 16, fontWeight: '500' }}>Full name</Text>
                        <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), height: hp(6), borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', opacity: 0.7, marginStart: wp(3), flex: 1 }}
                                placeholderTextColor="#000000"
                                value={createObject.full_name}
                                onChangeText={text => handleInputChangeValue('full_name', text)}
                            />
                        </View>
                        <Text style={{ marginHorizontal: wp(7), marginTop: hp(2), fontSize: 16, fontWeight: '500' }}>Email Address</Text>
                        <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), height: hp(6), borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', opacity: 0.7, marginStart: wp(3), flex: 1 }}
                                placeholderTextColor="#000000"
                                value={createObject.email}
                                onChangeText={text => handleInputChangeValue('email', text)}
                            />
                        </View>

                        <View style={{ marginHorizontal: wp(7), flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ marginTop: hp(2), fontSize: 16, fontWeight: '500' }}>Date of birth</Text>
                                <Pressable onPress={() => setOpen(true)} style={{ backgroundColor: '#DCDCDC', justifyContent: 'center', width: wp(40), paddingHorizontal: wp(3), height: hp(6), borderColor: '#006175', borderWidth: 1, borderRadius: 10, marginTop: hp(1) }}>
                                    {date ?
                                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: '500' }}>{moment(date).format('YYYY-MM-DD')}</Text>
                                        :
                                        <></>
                                    }
                                </Pressable>
                            </View>

                            <DatePicker
                                mode="date"
                                modal
                                open={open}
                                date={date ? date : new Date()}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    setDate(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                            <View>
                                <Text style={{ marginTop: hp(2), fontSize: 16, fontWeight: '500' }}>Gender</Text>
                                <Dropdown
                                    mode='modal'
                                    style={{ backgroundColor: '#DCDCDC', width: wp(40), paddingHorizontal: wp(3), height: hp(6), borderColor: '#006175', borderWidth: 1, borderRadius: 10, marginTop: hp(1) }}
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
                        <View style={{ backgroundColor: '#DCDCDC', paddingHorizontal: wp(3), marginBottom: hp(2), borderColor: '#006175', borderWidth: 1, marginHorizontal: wp(7), borderRadius: 10, marginTop: hp(1) }}>
                            <TextInput
                                style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', paddingBottom: hp(10), opacity: 0.7, marginStart: wp(3), flex: 1 }}
                                placeholderTextColor="#000000"
                                value={createObject.about}
                                onChangeText={text => handleInputChangeValue('about', text)}
                            />
                        </View>

                    </ScrollView>

                    <View>
                        <View style={{ width: wp(86), alignSelf: 'center', marginBottom: hp(2) }}>
                            {indicator && <ActivityIndicator color="#006175" size="large" style={{ marginBottom: hp(2) }} />}
                            <PrimaryButton onclick={() => handleCreateUser()} title="Next" />
                        </View>
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

export default PersonalInformation;