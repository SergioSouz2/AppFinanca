import { StyleSheet } from "react-native";
import { COLOR } from "../../theme/styles";

export const styles= StyleSheet.create({
    container:{
        backgroundColor:COLOR.WHITE,
        width:'80%',
        height:'50%',
        top:-50,
        borderRadius:30,
        padding:20,
        
        shadowColor:COLOR.BLACK,
        shadowOpacity:0.9,
        shadowRadius:8,
        elevation:5,

    },
    txtSaldo:{
        fontSize:16,
        color:COLOR.GRAY,
        fontFamily:'Montserrat_400Regular'

        
    },
    txtValou:{
        color:COLOR.SECONDARY_01,
        fontSize:30,
        fontFamily:'Montserrat_700Bold'

    },
})