import { Text, View } from 'react-native';

import { Header } from '../../components/Header';
import { StatuBar } from '../../components/StatuBar';
import { ButtonBack } from '../../components/ButtonBack'

import { styles } from './styles';
import { ListGasto } from '../../components/ListGasto';

export function Transaction() {
    return (
        <View style={styles.container}>
            <StatuBar />

            <Header>
                <View style={styles.content}>
                    <ButtonBack/>
                    <View style={styles.title}>
                        <Text style={styles.txtTitle}>Transações</Text>
                    </View>
                </View>
                <View style={styles.subTitle}>
                    <Text style={styles.txtSubTitle}>Suas despesas totais</Text>
                    <Text style={styles.txtSubTitleValue}>R$ 1.063,30</Text>
                </View>
            </Header>

            <ListGasto/>
           
        </View>
    )
}