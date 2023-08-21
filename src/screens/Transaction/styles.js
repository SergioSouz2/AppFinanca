import { StyleSheet } from 'react-native'
import { COLOR } from '../../theme/styles'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.WHITE_01,
    },
    card:{
        width:'100%',
        alignItems:'center',
    },
    content:{
        width:"100%",
        flexDirection:'row',
        paddingTop:20,
        alignItems:'center',
    },
    title:{
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
    },
    txtTitle:{
        fontSize: 15,
        color: COLOR.WHITE,
        fontFamily:'Montserrat_700Bold'
        
    },
    subTitle:{
        width:'100%', 
        height:'100%', 
        justifyContent:'center', 
        alignItems:'center',
    },
    txtSubTitle:{
        color: COLOR.WHITE,
        fontFamily:'Montserrat_400Regular',
        fontSize:26,
    },
    txtSubTitleValue:{
        color: COLOR.WHITE,
        fontFamily:'Montserrat_700Bold',
        fontSize:28,

    }

    
})