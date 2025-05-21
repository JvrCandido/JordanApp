import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import JTVProductCard from '../components/JTVProductCard';
import productService from '../services/products';

export default function JTVProductListScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await productService.getAll();
      setProducts(data);
    };
    loadProducts();
  }, []);

  if (!products.length) {
    return (
      <SafeAreaView style={styles.center}>
        <Text>Carregando produtos...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <JTVProductCard product={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f2f2f2' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
