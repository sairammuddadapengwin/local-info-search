import React, { useCallback, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Baseprops, hp, wp } from "../utils/utils";
import {
    StyleSheet,
    View,
    Text,
    Platform,
    PermissionsAndroid,
    Linking,
    Pressable,
    Image,
    Alert,
} from "react-native";
import { Camera, useCameraDevice, PhotoFile } from "react-native-vision-camera";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";
import { useFocusEffect } from "@react-navigation/native";
import { launchImageLibrary } from "react-native-image-picker";
import ImageCropPicker from "react-native-image-crop-picker";

class Componentprops extends Baseprops { }

const AddStory: React.FC<Componentprops> = (props) => {

    const [hasPermission, setHasPermission] = useState(false);
    const [photo, setPhoto] = useState<PhotoFile | null | any>(null);
    const cameraRef = useRef<Camera>(null);
    const [isFront, setIsFront] = useState(false);
    const device = useCameraDevice(isFront ? "front" : "back");

    useFocusEffect(
        useCallback(() => {
            verifyCameraPermission();
        }, [])
    );

    const verifyCameraPermission = async () => {
        try {
            if (Platform.OS === "android") {
                const granted = await PermissionsAndroid.check(
                    PermissionsAndroid.PERMISSIONS.CAMERA
                );
                if (granted) setHasPermission(true);
                else {
                    const status = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA
                    );
                    if (status === PermissionsAndroid.RESULTS.GRANTED)
                        setHasPermission(true);
                    else Linking.openSettings();
                }
            } else if (Platform.OS === "ios") {
                const status = await check(PERMISSIONS.IOS.CAMERA);
                if (status === RESULTS.GRANTED) setHasPermission(true);
                else {
                    const requestStatus = await request(PERMISSIONS.IOS.CAMERA);
                    if (requestStatus === RESULTS.GRANTED) setHasPermission(true);
                    else Linking.openSettings();
                }
            }
        } catch (error) {
            console.warn("Camera permission error:", error);
        }
    };

    const toggleCamera = () => {
        setIsFront(!isFront);
    };

    const openGallery = async () => {
        try {
            const result = await launchImageLibrary({
                mediaType: 'photo',
                quality: 1,
            });

            if (result.assets && result.assets.length > 0) {
                const selectedImage: any = result.assets[0];
                const cropped = await ImageCropPicker.openCropper({
                    path: selectedImage.uri,
                    width: selectedImage.width,
                    height: selectedImage.height,
                    cropping: true,
                    mediaType: 'photo',
                });

                setPhoto({
                    path: cropped.path,
                    width: cropped.width,
                    height: cropped.height,
                });
            }
        } catch (error) {
            console.log('Gallery open error:', error);
        }
    };


    const takePhoto = async () => {
        try {
            if (cameraRef.current) {
                const photoFile = await cameraRef.current.takePhoto({ flash: 'off' });
                const cropped = await ImageCropPicker.openCropper({
                    path: `file://${photoFile.path}`,
                    width: 1080,
                    height: 1920,
                    cropping: true,
                    mediaType: 'photo',
                });

                setPhoto({
                    path: cropped.path,
                    width: cropped.width,
                    height: cropped.height,
                });
            }
        } catch (error) {
            console.log("Photo capture failed:", error);
        }
    };


    if (!hasPermission) {
        return (
            <SafeAreaView style={styles.center}>
                <Text style={{ color: "#000" }}>Waiting for camera permission...</Text>
            </SafeAreaView>
        );
    }

    if (device == null) {
        return (
            <SafeAreaView style={styles.center}>
                <Text style={{ color: "#000" }}>No camera device found</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginHorizontal: wp(5),
                        marginTop: hp(2),
                    }}
                >
                    <Pressable onPress={() => props.navigation.goBack()}>
                        <Image
                            style={{ width: 20, height: 20 }}
                            resizeMode="contain"
                            source={require("../assets/arrow.png")}
                        />
                    </Pressable>
                    <Text
                        style={{ color: "#000000", fontSize: 20, fontWeight: "bold" }}
                    >
                        Add to story
                    </Text>
                    <Image
                        style={{ width: 20, height: 20, tintColor: "#ffffff" }}
                        resizeMode="contain"
                        source={require("../assets/Delete.png")}
                    />
                </View>

                <View style={{ flex: 1, }}>
                    {photo ? (
                        <>
                            <Image
                                source={{ uri: `file://${photo.path}` }}
                                style={{ flex: 1, marginTop: hp(3) }}
                                resizeMode="contain"
                            />
                            <View style={styles.bottomButtons}>
                                <Pressable
                                    onPress={() => setPhoto(null)}
                                    style={[styles.actionButton, { backgroundColor: "#ccc" }]}
                                >
                                    <Text style={styles.btnText}>Retake</Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => Alert.alert("Photo sent to story!")}
                                    style={[styles.actionButton, { backgroundColor: "#2196F3" }]}
                                >
                                    <Text style={styles.btnText}>Send</Text>
                                </Pressable>
                            </View>
                        </>
                    ) : (
                        <>
                            <Camera
                                key={isFront ? "front" : "back"}
                                ref={cameraRef}
                                style={StyleSheet.absoluteFill}
                                device={device}
                                isActive={!photo}
                                photo={true}
                            />
                            <View style={styles.captureContainer}>
                                <Pressable onPress={openGallery} style={styles.sideButton}>
                                    <Image
                                        source={require("../assets/gallery.png")}
                                        style={styles.icon}
                                        resizeMode="contain"
                                    />
                                </Pressable>

                                <Pressable onPress={takePhoto} style={styles.captureButton}>
                                    <View style={styles.innerCircle} />
                                </Pressable>

                                <Pressable onPress={toggleCamera} style={styles.sideButton}>
                                    <Image
                                        source={require("../assets/rotate.png")}
                                        style={styles.icon}
                                        resizeMode="contain"
                                    />
                                </Pressable>
                            </View>
                        </>
                    )}
                </View>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    captureContainer: {
        position: "absolute",
        bottom: hp(5),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: wp(80),
        justifyContent: 'space-between',
    },
    captureButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    innerCircle: {
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 30,
    },
    bottomButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: hp(2),
        backgroundColor: "#fff",
    },
    actionButton: {
        paddingHorizontal: wp(10),
        paddingVertical: hp(1.5),
        borderRadius: 10,
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },

    sideButton: {
        backgroundColor: '#ffffff',
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: "#006175",
    },
});

export default AddStory;
