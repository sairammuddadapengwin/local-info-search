import messaging from '@react-native-firebase/messaging';
import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';
import notifee from '@notifee/react-native';

export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        getToken()
        if (Platform.OS == 'android') {
            const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
            if (granted) {
                getToken()
            } else {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
                if (granted == 'granted') {
                    getToken()
                } else {
                    Linking.openSettings()
                }
            }
        }
    }
}

export async function getToken() {
    try {
        const token = await messaging().getToken()
        console.log('token', token)
    } catch (e) { }
}

export async function ForegroundMessage() {
    messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        await notifee.displayNotification({
            title: remoteMessage.notification?.title,
            body: remoteMessage.notification?.body,
            android: {
                channelId,
                smallIcon: 'name-of-a-small-icon',
                pressAction: {
                    id: 'default',
                },
            },
        });
    });
}
