import { Text, View } from "react-native";
import { ButtonBack } from "../../components/ButtonBack";
import { COLOR } from "../../theme/styles";

export  function Profile(){
    return(
        <View style={{backgroundColor:COLOR.WHITE_01,flex:1 ,justifyContent:"center", alignItems:"center" }}>
            <ButtonBack/>
            <Text>Profile</Text>
        </View>
    )
}