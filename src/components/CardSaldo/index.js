import { Text, View } from "react-native"
import { styles } from "./styles"


export function CardSaldo(){
    return(
        <View style={styles.container}>
            <Text style={styles.txtSaldo}>Seu saldo total</Text>
            <Text style={styles.txtValou}>R$ 8.500,00</Text>
        </View>        
    )
}