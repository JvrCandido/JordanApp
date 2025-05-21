import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function JTVProductCard({ product }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { product })}>
      <View style={styles.card}>
        <Image source={product.image} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3, // sombra android
    shadowColor: '#000', // sombra ios
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  price: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
});
