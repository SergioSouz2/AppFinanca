import { Image, Text, View } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';



import { styles } from "./styles";
import { COLOR } from "../../theme/styles";

export function Header({children}) {

	return (
		<View style={styles.header}>
			<LinearGradient 
				style={styles.gradient}
				colors={[COLOR.SECONDARY, COLOR.PRIMERY]}
			>
			{children}
			</LinearGradient>
		</View >
	)
}