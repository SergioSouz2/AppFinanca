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
    title:{
        fontFamily: 'Montserrat_400Regular',
        fontSize:28,
        color:COLOR.WHITE,
        marginLeft:50,
    },
    
})