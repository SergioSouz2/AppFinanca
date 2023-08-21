import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';

import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import { TabRoutes } from './Tab.routes'

import { Transaction } from '../screens/Transaction'
import { Cartoes } from '../screens/Cartoes'
import { Text } from 'react-native';
import { CustomDrawer } from '../components/CustomDrawer';

import { COLOR } from '../theme/styles';

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
    return (
        <Drawer.Navigator
            initialRouteName='Feed'
            drawerContent={props => <CustomDrawer {...props}/>}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor:COLOR.WHITE_01 ,
                drawerStyle: {
                    backgroundColor: COLOR.WHITE,
                    borderRadius: 10,
                },

            }}
            
        >
            <Drawer.Screen
                name="Resume"
                component={TabRoutes}
                options={{
                    drawerLabel: () => <Text style={{ color: COLOR.PRIMERY, fontSize: 18 }}>Resume</Text>,
                    drawerIcon: ({ color, size }) => <Ionicons name="md-home-outline" size={size} color={COLOR.PRIMERY} />

                }}
            />

            <Drawer.Screen
                name="Trasações"
                component={Transaction}
                options={{
                    drawerLabel: () => <Text style={{ color: COLOR.PRIMERY, fontSize: 18 }}>Trasações</Text>,
                    drawerIcon: ({ color, size }) => <Octicons name="arrow-switch" color={COLOR.PRIMERY} size={size} />
                }}
            />
            <Drawer.Screen
                name="Cartôes"
                component={Cartoes}
                options={{
                    drawerLabel: () => <Text style={{ color: COLOR.PRIMERY, fontSize: 18 }}>Cartôes</Text>,
                    drawerIcon: ({ color, size }) => <AntDesign name="creditcard" size={size} color={COLOR.PRIMERY} />
                }}
            />
        </Drawer.Navigator>
    );
}
