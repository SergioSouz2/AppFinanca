import { View, Text, TouchableOpacity, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons';
import { style } from './styles'
import { COLOR } from '../../theme/styles';


export function CustomDrawer(props) {
    return (

        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 , padding:20}}>
                <View style={style.contianerProfile}>

                    <View style={style.contentImage}>
                        <Image
                            source={require('../../assets/img/profile.jpeg')}
                            style={style.imageProfile}
                        />
                    </View>
                    <View style={style.contentText}>
                        <Text style={style.textTitle}>Sergio Souza</Text>
                        <Text style={style.textSubTitle}>@Sergio13ss</Text>
                    </View>



                </View>

                <DrawerItemList {...props} />

                <TouchableOpacity style={style.buttonClose}>
                    <Text style={style.txtButton}>Sair</Text>
                    <Feather name="log-out" size={26} color={COLOR.SECONDARY} />
                </TouchableOpacity>


            </DrawerContentScrollView>

        </View>
    )
}