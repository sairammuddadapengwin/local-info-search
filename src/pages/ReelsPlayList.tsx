import React, { useRef, useState } from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import Video from "react-native-video";
import Slider from "@react-native-community/slider";

class Componentprops extends Baseprops { }

const ReelsPlayList: React.FC<Componentprops> = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const reelsData = [
        { id: '1', video: require('../assets/sample1.mp4') },
        { id: '2', video: require('../assets/sample.mp4') },
        { id: '3', video: require('../assets/sample2.mp4') },
    ];

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);  
        }
    }).current;

    const ReelItem = ({ item, isActive }: any) => {
        
        const videoRef = useRef<any>(null);
        const [muted, setMuted] = useState(false)
        const [controlsVisible, setControlsVisible] = useState(false)
        const hideTimer = useRef<any>(null)
        const [currentTime, setCurrentTime] = useState(0);
        const [duration, setDuration] = useState(0);

        const toggleControls = () => {
            setMuted(!muted);
            setControlsVisible(true);
            if (hideTimer.current) {
                clearTimeout(hideTimer.current);
            }
            hideTimer.current = setTimeout(() => {
                setControlsVisible(false);
            }, 1000);
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

        return (
            <View style={{ flex: 1, width: wp(100), backgroundColor: '#000000' }}>
                <Video
                    ref={videoRef}
                    source={item.video}
                    style={{ width: wp(100), height: hp(87) }}
                    repeat
                    muted={muted}
                    onLoad={onLoad}
                    onProgress={onProgress}
                    ignoreSilentSwitch="ignore"
                    paused={!isActive}
                />

                {controlsVisible && (
                    <View style={{ position: 'absolute', top: 0, bottom: 0, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                        {muted ?
                            <View style={{ width: 50, height: 50, borderRadius: 25, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                                <Image style={{ width: 16, height: 16, tintColor: '#ffffff', alignSelf: 'center', }} resizeMode="contain" source={require('../assets/unmute.png')} />
                            </View>
                            :
                            <View style={{ width: 50, height: 50, borderRadius: 25, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                                <Image style={{ width: 15, height: 15, tintColor: '#ffffff', alignSelf: 'center', }} resizeMode="contain" source={require('../assets/mute.png')} />
                            </View>
                        }
                    </View>
                )}

                <TouchableWithoutFeedback onPress={toggleControls}>
                    <View style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                    }} />
                </TouchableWithoutFeedback>

                <View style={{ position: 'absolute', marginHorizontal: wp(5), top: hp(4), flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image style={{ width: 40, height: 40, borderRadius: 20, }} source={require('../assets/roundimg.jpg')} />
                    <Text style={{ color: '#ffffff', flex: 1, marginStart: wp(3), fontSize: 16, fontWeight: 'bold' }}>Jessica Felicio</Text>
                    <Image style={{ width: 15, height: 15, tintColor: '#ffffff' }} resizeMode="contain" source={require('../assets/close.png')} />
                </View>

                <View style={{ position: 'absolute', bottom: hp(0) }}>
                    <View style={{ alignSelf: 'flex-end', marginEnd: wp(7), marginBottom: hp(3) }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={require('../assets/Heart.png')} />
                            <Text style={{ color: '#ffffff', marginTop: hp(1), fontSize: 16, fontWeight: '500' }}>12k</Text>
                        </View>
                        <View style={{ marginTop: hp(3), alignItems: 'center' }}>
                            <Image style={{ width: 30, height: 30, tintColor: '#ffffff' }} resizeMode='contain' source={require('../assets/Chat.png')} />
                            <Text style={{ color: '#ffffff', fontSize: 16, marginTop: hp(1), fontWeight: '500' }}>292</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#ffffff', paddingHorizontal: wp(5),  justifyContent: 'center', height: hp(5.5), width: wp(90), marginHorizontal: wp(5), borderRadius: 10 }}>
                        <TextInput
                            style={{ fontWeight: '500' }}
                            placeholderTextColor="#000000"
                            placeholder="Type a comment" />
                    </View>

                    <View style={{ width: wp(100), alignSelf: 'center', marginVertical: hp(1), height: 3, justifyContent: 'center' }}>
                        <View style={{
                            position: 'absolute',
                            height: 3,
                            backgroundColor: 'gray',
                            width: '100%',
                        }} />
                        <View style={{
                            position: 'absolute',
                            height: 3,
                            backgroundColor: 'white',
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
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={reelsData} // array of videos
                    keyExtractor={(item: any) => item.id}
                    renderItem={({ item, index }) => (
                        <ReelItem item={item} isActive={index === activeIndex} />
                    )}
                    pagingEnabled               // snap to each item
                    showsVerticalScrollIndicator={false}
                    onViewableItemsChanged={onViewableItemsChanged}
                    viewabilityConfig={{ itemVisiblePercentThreshold: 80 }}
                />
            </View>
            <View style={{ marginBottom: hp(2) }}>
                <BottomNavigation step="4" navigation={props.navigation} />
            </View>
        </SafeAreaView>
    )
}

export default ReelsPlayList;