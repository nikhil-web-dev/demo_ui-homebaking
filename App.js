// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/screens/WelcomeScreen';
import Product from './src/screens/ProductScreen';
import Vendor from './src/screens/VendorScreen';
import Kitchen from './src/screens/KitchenScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} 
        options={{
          title: 'Welcome',
          headerStyle: {
            backgroundColor: '#323232',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Vendor" component={Vendor} />
        <Stack.Screen name="Kitchen" component={Kitchen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;