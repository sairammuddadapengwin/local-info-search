import React, { useCallback, useEffect, useRef, useState } from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Alert, BackHandler, Image, Pressable, ScrollView, StatusBar,
    Text, TouchableWithoutFeedback, View
} from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import Video from "react-native-video";
import Slider from "@react-native-community/slider";
import Orientation from 'react-native-orientation-locker';
import { executeGetResponse } from "../api/api";
import { useFocusEffect } from "@react-navigation/native";

class Componentprops extends Baseprops { }

const CategoryVedioPlay: React.FC<Componentprops> = (props) => {

    const videoRef = useRef<any>(null);
    const [controlsVisible, setControlsVisible] = useState(false)
    const hideTimer = useRef<any>(null)
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [videoData, setVideoData] = useState<any>(null)

    useFocusEffect(
        useCallback(() => {
            loadVideoLoading(props.route && props.route.params?.id)
        }, [])
    )

    const loadVideoLoading = async (id: any) => {
        const response = await executeGetResponse(`secure/home/video/${id}`)
        console.log('reshksfn', response)
        console.log('reshksfn', id)
        if (response.code == 0) {
            setVideoData(response.data.video)
        } else {
            Alert.alert(
                'Unable to load video',
                'The video could not be loaded. Please try again later.'
            );
        }
    }

    const toggleControls = () => {
        setControlsVisible(true);
        if (hideTimer.current) {
            clearTimeout(hideTimer.current);
        }
        hideTimer.current = setTimeout(() => {
            setControlsVisible(false);
        }, 2000);
    };

    useEffect(() => {
        StatusBar.setHidden(isFullscreen);
        return () => StatusBar.setHidden(false);
    }, [isFullscreen]);

    useEffect(() => {
        const back = BackHandler.addEventListener("hardwareBackPress", () => {
            if (isFullscreen) {
                Orientation.lockToPortrait();
                setIsFullscreen(false);
                return true;
            }
            return false;
        });
        return () => back.remove();
    }, [isFullscreen]);



    const toggleFullscreen = () => {
        if (!isFullscreen) {
            Orientation.lockToLandscape();
        } else {
            Orientation.lockToPortrait();
        }
        setIsFullscreen(prev => !prev);
    };

    const onProgress = (data: any) => {
        setCurrentTime(data.currentTime);
    };

    const onLoad = (data: any) => {
        setDuration(data.duration);
    };

    const onSlide = (value: number) => {
        videoRef.current.seek(value);
        setCurrentTime(value);
    };

    const formatTime = (seconds: any) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        position: isFullscreen ? "absolute" : "relative",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: isFullscreen ? '100%' : undefined,
                        backgroundColor: "#000",
                        zIndex: isFullscreen ? 999 : 1,
                    }}
                >
                    <Video
                        ref={videoRef}
                        source={{ uri: videoData?.video_url }}
                        style={{
                            width: '100%',
                            height: isFullscreen ? '100%' : undefined,
                            aspectRatio: isFullscreen ? undefined : 16 / 9,
                        }}
                        repeat
                        paused={!isPlaying}
                        onLoad={onLoad}
                        onProgress={onProgress}
                        ignoreSilentSwitch="ignore"
                        resizeMode="contain"
                    />

                    {controlsVisible && (
                        <View
                            style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center', zIndex: 10, }}
                            pointerEvents="box-none"
                        >
                            <Pressable onPress={() => setIsPlaying(e => !e)}
                                style={{ width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.6)', }} >
                                <Image source={isPlaying ? require('../assets/pause.png') : require('../assets/start.png')}
                                    style={{ width: 18, height: 18, tintColor: '#fff' }}
                                />
                            </Pressable>
                        </View>
                    )}

                    <TouchableWithoutFeedback onPress={toggleControls}>
                        <View style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                        }} />
                    </TouchableWithoutFeedback>

                    <View style={[isFullscreen ? { bottom: hp(3) } : { bottom: hp(0) }, { width: '100%', position: 'absolute', }]}>
                        {controlsVisible &&
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: hp(1), paddingHorizontal: wp(5), alignItems: 'center' }}>
                                <View style={{ borderRadius: 25, paddingHorizontal: wp(3), paddingVertical: hp(0.3), justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                                    <Text style={{ color: '#ffffff', fontSize: 13, fontWeight: '500' }}>{formatTime(currentTime)} / {formatTime(duration)}</Text>
                                </View>
                                <Pressable onPress={() => toggleFullscreen()} style={{ width: 35, height: 35, borderRadius: 25, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                                    <Image style={{ width: 15, height: 15, tintColor: '#ffffff', alignSelf: 'center', }} resizeMode="contain" source={require('../assets/preview.png')} />
                                </Pressable>
                            </View>}
                        <View style={{ width: '100%', alignSelf: 'center', height: 3, justifyContent: 'center' }}>
                            <View style={{
                                position: 'absolute',
                                height: 3,
                                backgroundColor: 'gray',
                                width: '100%',
                            }} />
                            <View style={{
                                position: 'absolute',
                                height: 3,
                                backgroundColor: 'red',
                                borderRadius: 6,
                                width: `${(currentTime / duration) * 100}%`,
                            }} />
                            <Slider
                                style={{ width: '100%' }}
                                minimumValue={0}
                                maximumValue={duration}
                                value={currentTime}
                                minimumTrackTintColor="transparent"
                                maximumTrackTintColor="transparent"
                                thumbTintColor="transparent"
                                onSlidingComplete={onSlide}
                            />
                        </View>
                    </View>
                </View>

                {!isFullscreen && <ScrollView>
                    <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 18, marginHorizontal: wp(5), marginTop: hp(2) }}>Description : </Text>
                    <Text style={{ color: '#505050', fontWeight: '500', fontSize: 14, marginHorizontal: wp(5), marginTop: hp(1) }}>{videoData?.description}</Text>
                </ScrollView>}
            </View>
            {!isFullscreen && <View style={{ marginBottom: hp(2) }}>
                <BottomNavigation step="4" navigation={props.navigation} />
            </View>}
        </SafeAreaView>
    )
}

export default CategoryVedioPlay;