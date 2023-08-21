import { View, Image, Text, ImageBackground } from "react-native";


import { styles } from "./styles";

export function CardCartao({creditos,titular,validade,numeroCartao}){
    return(
        <View style={styles.contianer}>
            <ImageBackground 
                source={require('../../assets/img/bg_cartao.png')}
                resizeMode="contain"
                style={styles.bgCartao}
            >
                <View style={styles.contentTitle}>


                    <View>
                        <Text style={styles.titleCarto}>R${creditos}</Text>
                        <Text style={styles.subTitle}>{titular}</Text>
                    </View>


                    <View>
                        <Text style={styles.dateValidade}>{validade}</Text>
                        <View style={styles.dadosCartao} >
                            <Text style={styles.numCartao}>{numeroCartao}</Text>
                            <Image 
                                style={styles.logoCartao} 
                                source={require('../../assets/img/Mastercard.png')}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>

            
        </View>
    )
}