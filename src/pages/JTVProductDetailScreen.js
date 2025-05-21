import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { useJTVCart } from '../stores/JTVCartStore';

export default function JTVProductDetailScreen({ route }) {
  const { product } = route.params;
  const { addToCart } = useJTVCart();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.details}>Categoria: {product.category}</Text>
      <Text style={styles.details}>Preço: R$ {product.price}</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => addToCart(product)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  details: {
    fontSize: 14,
    marginBottom: 5,
  },
});
