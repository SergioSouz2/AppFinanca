import { StyleSheet } from "react-native";

import { COLOR } from '../../theme/styles'

export const style= StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:10,

    },
 
    contentIcon:{
        width:40,
        height:40,
        borderRadius:50,
        backgroundColor:COLOR.ORANGE,
        justifyContent:"center",
        alignItems:"center",
    },
    contentTitle:{
        width:'50%',

        marginLeft:10
    },
    contentValor:{
        justifyContent:"center",
        alignItems:"center",
        width:'50%',

        
    },  
    title:{
        fontFamily:'Montserrat_400Regular',
        fontSize:18,
        color:COLOR.BLACK


    },
    date:{
        fontFamily:'Montserrat_400Regular',
        fontSize:16,
        color:COLOR.GRAY_01
    },
    valor:{
        fontFamily:'Montserrat_400Regular',
        fontSize:18,
        color:COLOR.BLACK,
    },
})