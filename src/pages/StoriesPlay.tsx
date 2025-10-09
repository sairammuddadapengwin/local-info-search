import React, { useRef, useState } from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import Video from "react-native-video";

class Componentprops extends Baseprops { }

const StoriesPlay: React.FC<Componentprops> = (props) => {

    const reelsData = [
        { id: '1', video: require('../assets/sample1.mp4') },
        { id: '2', video: require('../assets/sample.mp4') },
        { id: '3', video: require('../assets/sample2.mp4') },
    ];

    const videoRef = useRef<any>(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);


    const toggleControls = () => {
        if (currentIndex < reelsData.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setCurrentTime(0);
        } else {
            props.navigation.goBack();
        }
    };


    const onProgress = (data: any) => {
        setCurrentTime(data.currentTime);
    };

    const onLoad = (data: any) => {
        setDuration(data.duration);
    };


    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, width: wp(100), backgroundColor: '#000000' }}>
                    <Video
                        ref={videoRef}
                        source={reelsData[currentIndex].video}
                        style={{ width: wp(100), height: hp(87) }}
                        onLoad={onLoad}
                        onProgress={onProgress}
                        ignoreSilentSwitch="ignore"
                        onEnd={() => {
                            if (currentIndex < reelsData.length - 1) {
                                setCurrentIndex(currentIndex + 1);
                                setCurrentTime(0);
                            } else {
                                props.navigation.goBack();
                            }
                        }}
                    />


                    <View style={{ position: 'absolute', top: hp(2) }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginHorizontal: wp(2)
                            }}
                        >
                            {reelsData.map((e, index) => {
                                const storyWidth = (wp(94) - (reelsData.length - 1) * 4) / reelsData.length;
                                const progressWidth = (currentTime / duration) * 100;

                                return (
                                    <View
                                        key={index}
                                        style={{
                                            width: storyWidth,
                                            height: 5,
                                            justifyContent: 'center',
                                            marginHorizontal: 2,
                                        }}
                                    >
                                        <View
                                            style={{
                                                position: 'absolute',
                                                height: 5,
                                                backgroundColor: '#ffffff50',
                                                width: '100%',
                                                borderRadius: 6,
                                            }}
                                        />
                                        <View
                                            style={{
                                                position: 'absolute',
                                                height: 5,
                                                backgroundColor: index < currentIndex ? '#ffffff' : index === currentIndex ? '#00C2B2' : '#ffffff50',
                                                borderRadius: 6,
                                                width: index === currentIndex ? `${progressWidth}%` : index < currentIndex ? '100%' : '0%',
                                            }}
                                        />
                                    </View>
                                );
                            })}
                        </View>
                        <View style={{ marginHorizontal: wp(5), marginTop: hp(3), flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Image style={{ width: 40, height: 40, borderRadius: 20, }} source={require('../assets/roundimg.jpg')} />
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#ffffff', marginStart: wp(3), fontSize: 16, fontWeight: 'bold' }}>Jessica Felicio</Text>
                                <Text style={{ color: '#ffffff', marginStart: wp(3), fontSize: 14, fontWeight: '500' }}>1hr ago</Text>
                            </View>
                            <Image style={{ width: 15, height: 15, tintColor: '#ffffff' }} resizeMode="contain" source={require('../assets/close.png')} />
                        </View>
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            flexDirection: 'row',
                        }}
                    >
                        <TouchableWithoutFeedback
                            onPress={() => {
                                if (currentIndex > 0) {
                                    setCurrentIndex(currentIndex - 1);
                                    setCurrentTime(0);
                                }
                            }}
                            onLongPress={() => {
                                videoRef.current?.pause?.();
                            }}
                            onPressOut={() => {
                                videoRef.current?.resume?.();
                            }}
                        >
                            <View style={{ flex: 1 }} />
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback
                            onPress={() => {
                                if (currentIndex < reelsData.length - 1) {
                                    setCurrentIndex(currentIndex + 1);
                                    setCurrentTime(0);
                                } else {
                                    props.navigation.goBack();
                                }
                            }}
                            onLongPress={() => {
                                videoRef.current?.pause?.();
                            }}
                            onPressOut={() => {
                                videoRef.current?.resume?.();
                            }}
                        >
                            <View style={{ flex: 1 }} />
                        </TouchableWithoutFeedback>
                    </View>



                    <View style={{ position: 'absolute', bottom: hp(1) }}>
                        <View style={{ backgroundColor: '#ffffff', paddingHorizontal: wp(5), justifyContent: 'center', height: hp(5.5), width: wp(90), marginHorizontal: wp(5), borderRadius: 10 }}>
                            <TextInput
                                style={{ fontWeight: '500' }}
                                placeholderTextColor="#000000"
                                placeholder="Type a comment" />
                        </View>
                    </View>

                </View>
                <View style={{ marginBottom: hp(2) }}>
                    <BottomNavigation step="1" navigation={props.navigation} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default StoriesPlay;