import { Pressable, Text, View } from "react-native";
import { Baseprops, hp } from "../utils/utils";

class Componentprops extends Baseprops {
    title?: any;
    onclick?: any;
}

const SecondaryButton: React.FC<Componentprops> = (props) => {
    return (
        <Pressable onPress={props.onclick} style={{ borderColor: '#000000', borderWidth: 1, height: hp(6), justifyContent: 'center',  borderRadius: 10 }}>
            <Text style={{ color: '#000000', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>{props.title}</Text>
        </Pressable>
    )
}

export default SecondaryButton;