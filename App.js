import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Homepage from './Homepage';
import Historico from './Historico';
import Motorista from './Motorista';
import ConfirmationPage from './Confirmcao';
import MapPage from './MapPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? require('./assets/casa.png') : require('./assets/casa.png');
          } else if (route.name === 'Perfil') {
            iconName = focused ? require('./assets/motorista.png') : require('./assets/motorista.png');
          } else if (route.name === 'Historico') {
            iconName = focused ? require('./assets/historico.png') : require('./assets/historico.png');
          }

          return <Image source={iconName} style={{ width: 24, height: 24 }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#228B22',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Perfil" component={Motorista} />
      <Tab.Screen name="Historico" component={Historico} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} options={{ title: 'Confirmação' }} />
        <Stack.Screen name="MapPage" component={MapPage} options={{ title: 'Mapa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
