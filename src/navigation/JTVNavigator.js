import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import JTVProductListScreen from '../pages/JTVProductListScreen';
import JTVCartScreen from '../pages/JTVCartScreen';
import JTVCartBadge from '../components/JTVCartBadge';

const Tab = createBottomTabNavigator();

export default function JTVNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = route.name === 'Produtos' ? 'ios-list' : 'ios-cart';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Produtos" component={JTVProductListScreen} />
      <Tab.Screen
        name="Carrinho"
        component={JTVCartScreen}
        options={{ tabBarBadge: () => <JTVCartBadge /> }}
      />
    </Tab.Navigator>
  );
}
