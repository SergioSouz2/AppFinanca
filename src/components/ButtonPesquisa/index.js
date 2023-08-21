import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { style } from "./styles";
import { COLOR } from "../../theme/styles";

export function ButtonPesquisa() {
    return (
        <View style={style.container}>
            <MaterialCommunityIcons name="magnify" size={24} color={COLOR.WHITE} />
            <TextInput
                style={style.txtPesquisa}
                placeholder="Pesquisar"
                placeholderTextColor={COLOR.WHITE} 
            />
        </View>
    )
}