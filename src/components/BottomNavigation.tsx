import { Image, Pressable, View } from "react-native";
import { Baseprops, hp, wp } from "../utils/utils";

class Componentprops extends Baseprops {
    step?: any;
}

const BottomNavigation: React.FC<Componentprops> = (props) => {
    return (
        <View style={{ paddingVertical: hp(2), backgroundColor: '#ffffff', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(7) }}>

            {props.step == '1' ?
                <Pressable onPress={() => props.navigation.navigate('HomeScreen')}>
                    <Image style={{ width: 22, height: 22 }} resizeMode='contain' source={require('../assets/home.png')} />
                </Pressable>
                :
                <Pressable onPress={() => props.navigation.navigate('HomeScreen')}>
                    <Image style={{ width: 22, height: 22 }} resizeMode='contain' source={require('../assets/home1.png')} />
                </Pressable>
            }
            {props.step == '2' ?
                <Pressable>
                    <Image style={{ width: 22, height: 22 }} resizeMode='contain' source={require('../assets/search1.png')} />
                </Pressable>
                :
                <Pressable>
                    <Image style={{ width: 22, height: 22 }} resizeMode='contain' source={require('../assets/search.png')} />
                </Pressable>
            }
            {props.step == '3' ?
                <Pressable>
                    <Image style={{ width: 22, height: 22 }} resizeMode='contain' source={require('../assets/post1.png')} />
                </Pressable>
                :
                <Pressable>
                    <Image style={{ width: 22, height: 22 }} resizeMode='contain' source={require('../assets/post.png')} />
                </Pressable>
            }
            {props.step == '4' ?
                <Pressable onPress={() => props.navigation.navigate('ReelsPlayList')}>
                    <Image style={{ width: 22, height: 22 }} resizeMode='contain' source={require('../assets/play1.png')} />
                </Pressable>
                :
                <Pressable onPress={() => props.navigation.navigate('ReelsPlayList')}>
                    <Image style={{ width: 22, height: 22 }} resizeMode='contain' source={require('../assets/play.png')} />
                </Pressable>
            }
            {props.step == '5' ?
                <Pressable>
                    <Image style={{ width: 22, height: 22 }} resizeMode='contain' source={require('../assets/user1.png')} />
                </Pressable>
                :
                <Pressable>
                    <Image style={{ width: 22, height: 22 }} resizeMode='contain' source={require('../assets/user.png')} />
                </Pressable>
            }
        </View>
    )
}

export default BottomNavigation;