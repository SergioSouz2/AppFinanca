import { Text, View } from "react-native";
import { ButtonBack } from "../../components/ButtonBack";
import { COLOR } from "../../theme/styles";

export  function Notificacao(){
    return(
        <View style={{flex:1, backgroundColor:COLOR.WHITE_01 ,justifyContent:"center", alignItems:"center" }}>
            <ButtonBack/>
            <Text>Notificacao</Text>
        </View>
    )
}