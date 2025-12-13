import React, { useState } from "react";
import { Baseprops, hp, wp } from "../utils/utils";
import {
    Image, Linking, Modal, PermissionsAndroid, Platform,
    Pressable, StyleSheet, Text, View
} from "react-native";
import { check, PERMISSIONS, request } from "react-native-permissions";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

class Componentprops extends Baseprops {
    modalVisible?: boolean;
    setModalVisible?: any;
    selectedImage?: any
}

const CameraModal: React.FC<Componentprops> = (props) => {

    const [image, setImage] = useState<any>(null)

    const cameraClick = async () => {
        const result = await launchCamera({
            mediaType: 'photo',
            quality: 1,
            maxHeight: 600,
            maxWidth: 600
        })
        if (result.assets && result.assets.length > 0) {
            setImage(result.assets[0])
        }
    }

    const galleryClick = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            quality: 1,
            maxHeight: 600,
            maxWidth: 600
        })
        if (result.assets && result.assets.length > 0) {
            setImage(result.assets[0])
        }
    }

    const cameraPermissions = async () => {
        if (Platform.OS == 'android') {
            const check = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
            if (check) {
                cameraClick()
            } else {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
                if (granted == 'granted') {
                    cameraClick()
                } else {
                    Linking.openSettings()
                }
            }
        } else if (Platform.OS == 'ios') {
            const granted = await check(PERMISSIONS.IOS.CAMERA);
            if (granted == 'granted') {
                cameraClick()
            } else {
                const granted = await request(PERMISSIONS.IOS.CAMERA);
                if (granted == 'granted') {
                    cameraClick()
                } else {
                    Linking.openSettings()
                }
            }
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Select Photo</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp(3) }}>
                        <Pressable onPress={() => cameraPermissions()} style={{ alignItems: 'center' }}>
                            <Image style={{ width: 35, height: 35 }} source={require('../assets/cam.png')} />
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Camera</Text>
                        </Pressable>
                        <Pressable onPress={() => galleryClick()} style={{ alignItems: 'center' }}>
                            <Image style={{ width: 35, height: 35 }} source={require('../assets/image-gallery.png')} />
                            <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: 16 }}>Gallery</Text>
                        </Pressable>
                    </View>
                    {image && image != null &&
                        <>
                            <Image style={{ width: 100, height: 100, alignSelf: 'center', marginTop: hp(2) }} source={{ uri: image.uri }} />
                            <Pressable onPress={() => {props.selectedImage(image), props.setModalVisible(false)}} style={{ backgroundColor: '#000000', alignSelf: 'center', paddingHorizontal: wp(10), paddingVertical: hp(1), marginTop: hp(3), borderRadius: 20 }}>
                                <Text style={{ color: '#ffffff', fontWeight: '500' }}>Submit</Text>
                            </Pressable>
                        </>
                    }
                    <Pressable onPress={() => props.setModalVisible(false)} style={{ backgroundColor: '#000000', alignSelf: 'center', paddingHorizontal: wp(10), paddingVertical: hp(1), marginTop: hp(2), borderRadius: 20 }}>
                        <Text style={{ color: '#ffffff', fontWeight: '500' }}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default CameraModal;