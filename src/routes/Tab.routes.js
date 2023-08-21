import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';





import { StackRoutes } from './Stack.routes'

import { Profile } from '../screens/Profile'
import { Notificacao } from '../screens/Notificacao'
import { COLOR } from '../theme/styles';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                headerShadowVisible:false,
                
                tabBarStyle: {
                    height: 50,
                    elevation:0, 
                    backgroundColor: COLOR.WHITE_01,
                    borderTopWidth:0,

                }

            }}

        >
            <Tab.Screen
                name="Home"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => <SimpleLineIcons name="wallet" size={size} color={color} />
                }}

            />

            <Tab.Screen
                name="Notificacao"
                component={Notificacao}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="ios-notifications-outline" size={size} color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => <SimpleLineIcons name="user" size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}