import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import JTVNavigator from './src/navigation/JTVNavigator';
import { CartProvider } from './src/stores/JTVCartStore';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <JTVNavigator />
      </CartProvider>
    </NavigationContainer>
  );
}
