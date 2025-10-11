import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Splash from './src/pages/Splash';
import AppExplanation from './src/pages/AppExplanation';
import Otp from './src/pages/Otp';
import PersonalInformation from './src/pages/PersonalInformation';
import PersonalInformationSecond from './src/pages/PersonalInformationSecond';
import RegisterSuccessWelcome from './src/pages/RegisterSuccessWelcome';
import SignInScreen from './src/pages/SignInScreen';
import ForgotPassword from './src/pages/ForgotPassword';
import ForgotPasswordOtpSent from './src/pages/ForgotPasswordOtpSent';
import ForgotPasswordSetup from './src/pages/ForgotPasswordSetup';
import HomeScreen from './src/pages/HomeScreen';
import { StatusBar } from 'react-native';
import ReelsPlayList from './src/pages/ReelsPlayList';
import StoriesPlay from './src/pages/StoriesPlay';
import Notification from './src/pages/Notification';
import Comments from './src/pages/Comments';
import LocalSearchServices from './src/pages/LocalSearchServices';
import ServiceDetails from './src/pages/ServiceDetails';
import ServiceDetailsReels from './src/pages/ServiceDetailsReels';
import Post from './src/pages/Post';
import Chats from './src/pages/Chats';
import UserProfile from './src/pages/UserProfile';
import MyProfile from './src/pages/MyProfile';
import EditProfile from './src/pages/EditProfile';

const Stack = createNativeStackNavigator();

function RootStack() {

  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AppExplanation" component={AppExplanation} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
      <Stack.Screen name="PersonalInformationSecond" component={PersonalInformationSecond} />
      <Stack.Screen name="RegisterSuccessWelcome" component={RegisterSuccessWelcome} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ForgotPasswordOtpSent" component={ForgotPasswordOtpSent} />
      <Stack.Screen name="ForgotPasswordSetup" component={ForgotPasswordSetup} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ReelsPlayList" component={ReelsPlayList} />
      <Stack.Screen name="StoriesPlay" component={StoriesPlay} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="LocalSearchServices" component={LocalSearchServices} />
      <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
      <Stack.Screen name="ServiceDetailsReels" component={ServiceDetailsReels} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}