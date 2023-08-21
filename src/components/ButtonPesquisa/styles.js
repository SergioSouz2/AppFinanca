import { StyleSheet } from "react-native";

import { COLOR } from '../../theme/styles'


export const style = StyleSheet.create({
    container:{
        width:'90%',
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        backgroundColor:COLOR.PRIMERY_01,
        opacity:0.8,
        padding:12,
        borderRadius:10,
        marginTop:40,
        marginBottom:40,
    },

    txtPesquisa:{
        marginLeft:10,
        fontSize:18,
    },
})