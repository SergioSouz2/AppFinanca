import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { COLOR } from "../../theme/styles";
import { AntDesign } from '@expo/vector-icons';

import {styles} from './styles'

export function VerifAccount(){
    return(

        
        <View style={styles.verifAccount}>
            <LinearGradient style={styles.accountGradient}
				colors={[COLOR.SECONDARY, COLOR.PRIMERY]}
			>
                <Text style={styles.txtAccount}>Verifique suas contas bancárias </Text>
                <AntDesign name="arrowright" size={24} color="white" />
            </LinearGradient>

        </View>
    )
}