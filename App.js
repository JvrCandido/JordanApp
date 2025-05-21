import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import JTVNavigator from './src/navigation/JTVNavigator';
import { CartProvider } from './src/stores/JTVCartStore';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <JTVNavigator />
      </NavigationContainer>
    </CartProvider>
  );
}
