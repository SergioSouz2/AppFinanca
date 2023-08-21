import 'react-native-gesture-handler';
import { Text, View } from 'react-native';

import { 
  useFonts, 
  Montserrat_400Regular,
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat'

import { Routes } from './src/routes'


import { styles } from './styles';

export default function App() {
  let [fontLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  })

  if (!fontLoaded) {
    return <Text style={{justifyContent:'center',alignItems:"center"}}> CARREGANDO FONTES...</Text>
  } 

    return (
      <View style={styles.container}>
        <Routes/>
      </View>
    );
  }



