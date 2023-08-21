import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';


import { AntDesign } from '@expo/vector-icons';
import { COLOR } from '../../theme/styles';


export function ButtonBack() {

    const navigation = useNavigation()
    return (

        <TouchableOpacity style={{marginTop:30}} onPress={()=> navigation.goBack()}>
            <AntDesign
                name="arrowleft"
                size={24}
                color={COLOR.WHITE}
            />
        </TouchableOpacity>

    )
}