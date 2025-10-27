import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Pressable, StatusBar, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { useState } from "react";

class Componentprops extends Baseprops { }

const AppExplanation: React.FC<Componentprops> = (props) => {

    const [step, setStep] = useState('')

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>

            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle="dark-content"
                showHideTransition="fade"
            />
            <View style={{ flex: 1 }}>
                {step == '' &&
                    <>
                        <View style={{ height: hp(45) }}>
                            <View style={{ height: hp(45), justifyContent: 'center', }}>
                                <View style={{ backgroundColor: '#DBE9EC', justifyContent: 'center', elevation: 2, width: 150, height: 150, alignSelf: 'center', borderRadius: 75 }}>
                                    <Image style={{ width: 120, height: 120, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/girlicon.png')} />
                                </View>
                            </View>
                            <View style={{ position: 'absolute', backgroundColor: '#00617599', width: 50, alignSelf: 'flex-end', top: hp(8), end: wp(18), justifyContent: 'center', height: 50, borderRadius: 30 }}>
                                <Image style={{ width: 40, height: 40, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img.png')} />
                            </View>
                            <View style={{ position: 'absolute', backgroundColor: '#0061758F', width: 35, top: hp(10), left: wp(10), justifyContent: 'center', height: 35, borderRadius: 20 }}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img1.png')} />
                            </View>
                            <View style={{ position: 'absolute', backgroundColor: '#00617554', width: 35, bottom: hp(2), left: wp(25), justifyContent: 'center', height: 35, borderRadius: 30 }}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img2.png')} />
                            </View>
                            <View style={{ position: 'absolute', backgroundColor: '#00617524', width: 50, bottom: hp(3), end: wp(15), justifyContent: 'center', height: 50, borderRadius: 30 }}>
                                <Image style={{ width: 40, height: 40, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img3.png')} />
                            </View>
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: '#006175',
                                        width: 50,
                                        height: 50,
                                        borderRadius: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: hp(12),
                                        marginStart: wp(8)
                                    }}
                                >
                                    <Image style={{ width: 40, height: 40, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img4.png')} />
                                </View>
                            </View>
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignSelf: 'flex-end'
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: '#0061754D',
                                        width: 35,
                                        height: 35,
                                        borderRadius: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: hp(8),
                                        marginEnd: wp(7)
                                    }}
                                >
                                    <Image style={{ width: 25, height: 25, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img5.png')} />
                                </View>
                            </View>
                        </View><Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 22, width: wp(60), marginStart: wp(7), marginTop: hp(2) }}>Connect with Friends and Family</Text>
                        <Text style={{ color: '#000000', opacity: 0.6, fontWeight: '500', fontSize: 17, width: wp(80), marginStart: wp(7), marginTop: hp(2) }}>Connecting with Family and Friends provides a sense of belonging and security </Text><View style={{ width: wp(86), alignSelf: 'center', marginTop: hp(5) }}>
                            <PrimaryButton onclick={() => setStep('1')} title="Next" />
                        </View><View style={{ width: wp(86), alignSelf: 'center', marginTop: hp(2) }}>
                            <SecondaryButton onclick={() => setStep('1')} title="Skip" />
                        </View>
                        <Text style={{ textAlign: 'center', color: '#000000', fontWeight: 'bold', marginTop: hp(2) }}>Already have an account?  <Text style={{ color: '#006175', fontSize: 16 }}> Sign In</Text></Text>
                    </>
                }

                {step == '1' &&
                    <>
                        <View style={{ height: hp(45) }}>
                            <View style={{ height: hp(45), justifyContent: 'center', }}>
                                <View style={{ backgroundColor: '#DBE9EC', justifyContent: 'center', elevation: 2, width: 150, height: 150, alignSelf: 'center', borderRadius: 75 }}>
                                    <Image style={{ width: 120, height: 120, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img6.png')} />
                                </View>
                            </View>
                            <View style={{ position: 'absolute', backgroundColor: '#B3B9C9', width: 50, alignSelf: 'flex-end', top: hp(8), end: wp(18), justifyContent: 'center', height: 50, borderRadius: 30 }}>
                                <Image style={{ width: 40, height: 40, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img7.png')} />
                            </View>
                            <View style={{ position: 'absolute', backgroundColor: '#006175', width: 35, top: hp(10), left: wp(10), justifyContent: 'center', height: 35, borderRadius: 20 }}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img8.png')} />
                            </View>
                            <View style={{ position: 'absolute', backgroundColor: '#006175', width: 35, bottom: hp(2), left: wp(25), justifyContent: 'center', height: 35, borderRadius: 30 }}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img11.png')} />
                            </View>
                            <View style={{ position: 'absolute', backgroundColor: '#006175', width: 50, bottom: hp(3), end: wp(15), justifyContent: 'center', height: 50, borderRadius: 30 }}>
                                <Image style={{ width: 40, height: 40, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img12.png')} />
                            </View>
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: '#006175',
                                        width: 50,
                                        height: 50,
                                        borderRadius: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: hp(12),
                                        marginStart: wp(8)
                                    }}
                                >
                                    <Image style={{ width: 40, height: 40, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img9.png')} />
                                </View>
                            </View>
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignSelf: 'flex-end'
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: '#006175',
                                        width: 35,
                                        height: 35,
                                        borderRadius: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: hp(8),
                                        marginEnd: wp(7)
                                    }}
                                >
                                    <Image style={{ width: 25, height: 25, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img10.png')} />
                                </View>
                            </View>
                        </View>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 24, width: wp(55), marginStart: wp(7), marginTop: hp(2) }}>Make new friends with ease</Text>
                        <Text style={{ color: '#000000', opacity: 0.6, fontWeight: '500', fontSize: 17, width: wp(80), marginStart: wp(7), marginTop: hp(2) }}>Allowing you to make new Friends is our Number one priority.....</Text>
                        <Pressable style={{ width: wp(86), alignSelf: 'center', marginTop: hp(5) }}>
                            <PrimaryButton onclick={() => setStep('2')} title="Next" />
                        </Pressable>
                        <View style={{ width: wp(86), alignSelf: 'center', marginTop: hp(2) }}>
                            <SecondaryButton onclick={() => setStep('2')} title="Skip" />
                        </View>
                        <Text style={{ textAlign: 'center', color: '#000000', fontWeight: 'bold', marginTop: hp(2) }}>Already have an account?  <Text style={{ color: '#006175', fontSize: 16 }}> Sign In</Text></Text>
                    </>
                }

                {step == '2' &&
                    <>
                        <View style={{ height: hp(45) }}>
                            <View style={{ height: hp(45), justifyContent: 'center', }}>
                                <View style={{ backgroundColor: '#DBE9EC', justifyContent: 'center', elevation: 2, width: 150, height: 150, alignSelf: 'center', borderRadius: 75 }}>
                                    <Image style={{ width: 120, height: 120, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img13.png')} />
                                </View>
                            </View>
                            <View style={{ position: 'absolute', backgroundColor: '#006175', width: 50, alignSelf: 'flex-end', top: hp(8), end: wp(18), justifyContent: 'center', height: 50, borderRadius: 30 }}>
                                <Image style={{ width: 40, height: 40, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img6.png')} />
                            </View>
                            <View style={{ position: 'absolute', backgroundColor: '#00617566', width: 35, top: hp(10), left: wp(10), justifyContent: 'center', height: 35, borderRadius: 20 }}>
                                <Image style={{ width: 25, height: 25, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img14.png')} />
                            </View>
                            <View style={{ position: 'absolute', backgroundColor: '#006175', width: 35, bottom: hp(2), left: wp(25), justifyContent: 'center', height: 35, borderRadius: 30 }}>
                                <Image style={{ width: 30, height: 30, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img15.png')} />
                            </View>
                            <View style={{ position: 'absolute', backgroundColor: '#00617524', width: 50, bottom: hp(3), end: wp(15), justifyContent: 'center', height: 50, borderRadius: 30 }}>
                                <Image style={{ width: 40, height: 40, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img16.png')} />
                            </View>
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: '#00617533',
                                        width: 50,
                                        height: 50,
                                        borderRadius: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: hp(12),
                                        marginStart: wp(8)
                                    }}
                                >
                                    <Image style={{ width: 35, height: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img17.png')} />
                                </View>
                            </View>
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignSelf: 'flex-end'
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: '#006175',
                                        width: 35,
                                        height: 35,
                                        borderRadius: 30,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: hp(8),
                                        marginEnd: wp(7)
                                    }}
                                >
                                    <Image style={{ width: 25, height: 25, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/img18.png')} />
                                </View>
                            </View>
                        </View>
                        <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 24, width: wp(55), marginStart: wp(7), marginTop: hp(2) }}>Express yourself to the world</Text>
                        <Text style={{ color: '#000000', opacity: 0.6, fontWeight: '500', fontSize: 17, width: wp(80), marginStart: wp(7), marginTop: hp(2) }}>Let your voice be heard on the internet through the OFOFO features on the App without restrictions</Text>
                        <View style={{ width: wp(86), alignSelf: 'center', marginTop: hp(5) }}>
                            <PrimaryButton onclick={() => props.navigation.navigate('Login')} title="Continue" />
                        </View>
                        <Text style={{ textAlign: 'center', color: '#000000', fontWeight: 'bold', marginTop: hp(2) }}>Already have an account?  <Text style={{ color: '#006175', fontSize: 16 }}> Sign In</Text></Text>
                    </>
                }
                
            </View>
        </SafeAreaView>
    )
}

export default AppExplanation;