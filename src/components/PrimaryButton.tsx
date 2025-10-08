import { Pressable, Text, View } from "react-native";
import { Baseprops, hp } from "../utils/utils";

class Componentprops extends Baseprops {
    title?: any;
    onclick?: any;
}

const PrimaryButton: React.FC<Componentprops> = (props) => {
    return (
        <Pressable onPress={props.onclick} style={{ backgroundColor: '#006175', height: hp(6), justifyContent: 'center', borderRadius: 10 }}>
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center', fontSize: 16 }}>{props.title}</Text>
        </Pressable>
    )
}

export default PrimaryButton;