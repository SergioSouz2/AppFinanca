import { Image, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import { styles } from "./styles";
import { COLOR } from "../../theme/styles";

export function Menu() {

    const navigation = useNavigation()


    function handleOpenMenu() {
        navigation.openDrawer()
    }
    return (

        <View style={styles.menu}>
            <TouchableOpacity  onPress={handleOpenMenu}>

            <Entypo
                name="menu"
                size={24}
                color={COLOR.WHITE}
                />
            </TouchableOpacity>

            <Image
                style={styles.imgProfile}
                source={{ uri: 'https://avatars.githubusercontent.com/u/123169013?v=4' }}
            />
        </View>


    )
}