import { StyleSheet } from "react-native";
import { COLOR } from "../../theme/styles";

export const styles = StyleSheet.create({
    contianer:{

    },

    bgCartao:{
        width: 250,
        height:280,
    },

    contentTitle:{
        marginLeft:30,
        marginTop: 35,
        gap:100,
    },

    titleCarto:{
        fontSize:20,
        fontFamily:'Montserrat_700Bold',
        color:COLOR.WHITE
    },
    subTitle:{
        fontFamily:'Montserrat_700Bold',
        color:COLOR.WHITE,
        



    },

    dateValidade:{
        fontFamily:'Montserrat_400Regular',
        color:COLOR.WHITE,
        fontSize:14,
        marginBottom:18


    },

    dadosCartao:{
        flexDirection:"row"
    },

    numCartao:{
        fontFamily:'Montserrat_400Regular',
        fontSize:14,
        color:COLOR.WHITE,
        marginRight:10
    },

    logoCartao:{
        width:30,
        height:30
    },

})