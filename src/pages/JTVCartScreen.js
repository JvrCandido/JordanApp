import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

export default function JTVCartScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Seu carrinho está vazio.</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
