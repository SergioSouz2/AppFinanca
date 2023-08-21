import { Text, View } from 'react-native';



import { Header } from '../../components/Header';
import { StatuBar } from '../../components/StatuBar';
import { CardSaldo } from '../../components/CardSaldo';
import { VerifAccount } from '../../components/VerifAccount';
import { Menu } from '../../components/Menu'

import { styles } from './styles';

export function Home() {

    
    return (
        <View style={styles.container}>
            <StatuBar />

            <Header>
                <Menu />
                <Text style={styles.title}>Bemvindo(a){"\n"}Usuario</Text>
            </Header>

            <View style={styles.card}>
                <CardSaldo />
                <VerifAccount />
            </View>

        </View>
    )
}