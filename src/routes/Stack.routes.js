import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Transaction } from '../screens/Transaction'
import { Notificacao } from '../screens/Notificacao'
import { Cartoes } from '../screens/Cartoes'


const Stack = createStackNavigator()

export function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='home'
                component={Home}
            />

            <Stack.Screen
                name='transacao'
                component={Transaction}
            />
             <Stack.Screen
                name='notificacao'
                component={Notificacao}
            />
             <Stack.Screen
                name='cartoes'
                component={Cartoes}
            />
        </Stack.Navigator>
    )
}