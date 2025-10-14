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

class Componentprops extends Baseprops { }

const AddStory: React.FC<Componentprops> = (props) => {
    
    const [hasPermission, setHasPermission] = useState(false);
    const [photo, setPhoto] = useState<PhotoFile | null>(null);
    const cameraRef = useRef<Camera>(null);
    const device = useCameraDevice("back");

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

    const takePhoto = async () => {
        try {
            if (cameraRef.current) {
                const photoFile = await cameraRef.current.takePhoto({ flash: 'off' });
                setPhoto(photoFile);
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
                {/* Header */}
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

                {/* Camera View or Preview */}
                {(photo && photo != null) ? (
                    <>
                        <Image
                            source={{ uri: `file://${photo.path}` }}
                            style={{ flex: 1, marginTop: hp(3) }}
                        />
                        <View style={styles.bottomButtons}>
                            <Pressable
                                onPress={() => {
                                    setTimeout(() => {
                                        setPhoto(null)
                                    }, 1000);
                                }}
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
                            key={photo ? 'preview' : 'camera'}
                            ref={cameraRef}
                            style={{ flex: 1, marginTop: hp(3) }}
                            device={device}
                            isActive={true}
                            photo={true}
                        />
                        <View style={styles.captureContainer}>
                            <Pressable onPress={takePhoto} style={styles.captureButton}>
                                <View style={styles.innerCircle} />
                            </Pressable>
                        </View>
                    </>
                )}
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
        alignSelf: "center",
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
});

export default AddStory;
