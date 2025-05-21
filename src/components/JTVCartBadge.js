import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function JTVCartBadge() {
  // Exemplo fixo, depois pode usar contexto para mostrar quantidade real
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'red',
    borderRadius: 10,
    minWidth: 20,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
