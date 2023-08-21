import {SafeAreaView, FlatList, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { ButtonPesquisa } from "../ButtonPesquisa";
import { ItemCompra } from "../ItemCompra";
import { Tranzacao } from '../../utils/list'

import { COLOR } from '../../theme/styles'
import { styles } from './styles'

export function ListGasto() {
	return (
		<View style={styles.container}>
			<LinearGradient
				style={styles.gradient}
				colors={[COLOR.SECONDARY, COLOR.PRIMERY]}
			>
				<ButtonPesquisa />
				<SafeAreaView>
					<FlatList
						data={Tranzacao}
						renderItem={({item}) => <ItemCompra title={item.title} data={item.data} valor={item.valor} icon={item.icon} />}
						keyExtractor={item => item.id}
					/>
				</SafeAreaView>
			</LinearGradient>
		</View >
	)
}