import { StyleSheet } from "react-native";
import { COLOR } from "../../theme/styles";

export const style = StyleSheet.create({
    contianerProfile:{
        flexDirection:"row",  
        gap:10,     
        height:'20%',
        alignItems:"center",
    },
    
    contentImage:{
        width:60,
        height:60,
        justifyContent:"center", 
        alignContent:"center",
        marginLeft:20,


    },
    
    contentText:{
        justifyContent:"center", 
        alignContent:"center",
        
    },

    imageProfile:{
        width:60,
        height:60,
        borderRadius:20,


    },

    textTitle:{
        fontFamily:'Montserrat_700Bold',
        color:COLOR.BLACK,
        fontSize:16,
        

    },

    textSubTitle:{
        fontFamily:'Montserrat_400Regular',
        color:COLOR.BLACK,
        fontSize:14,



    },

    buttonClose:{
        marginTop:'100%',
        padding:25 ,
        justifyContent:"space-between",
        borderWidth:1,
        borderColor:COLOR.SECONDARY,
        borderRadius:30,
        flexDirection:"row",
        marginLeft:30,
        marginRight:30,
    },

    txtButton:{
        color:COLOR.SECONDARY,
        fontSize:20,
        fontFamily:'Montserrat_400Regular'
    }
})