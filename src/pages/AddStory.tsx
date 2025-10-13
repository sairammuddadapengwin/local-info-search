import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Baseprops } from "../utils/utils";
import {
    StyleSheet,
    View,
    Text,
    Platform,
    PermissionsAndroid,
    Linking,
} from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";
import { useFocusEffect } from "@react-navigation/native";

class Componentprops extends Baseprops { }

const AddStory: React.FC<Componentprops> = (props) => {
    const [hasPermission, setHasPermission] = useState(false);
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
                if (granted) {
                    setHasPermission(true);
                } else {
                    const status = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA
                    );
                    if (status === PermissionsAndroid.RESULTS.GRANTED) {
                        setHasPermission(true);
                    } else {
                        Linking.openSettings();
                    }
                }
            } else if (Platform.OS === "ios") {
                const status = await check(PERMISSIONS.IOS.CAMERA);
                if (status === RESULTS.GRANTED) {
                    setHasPermission(true);
                } else {
                    const requestStatus = await request(PERMISSIONS.IOS.CAMERA);
                    if (requestStatus === RESULTS.GRANTED) {
                        setHasPermission(true);
                    } else {
                        Linking.openSettings();
                    }
                }
            }
        } catch (error) {
            console.warn("Camera permission error:", error);
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
            <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
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
});

export default AddStory;
