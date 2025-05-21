import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../stores/JTVCartStore';

export default function JTVCartScreen() {
  const { cartItems, removeFromCart, getTotal } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title} x {item.quantity}</Text>
      <Text style={styles.price}>R$ {(item.price * item.quantity).toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={() => removeFromCart(item.id)}>
        <Text style={styles.buttonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Carrinho vazio</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          <Text style={styles.total}>Total: R$ {getTotal().toFixed(2)}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 16, flex: 1 },
  price: { fontSize: 16, fontWeight: 'bold', marginRight: 10 },
  button: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  total: { fontSize: 20, fontWeight: 'bold', textAlign: 'right', marginTop: 10 },
  empty: { textAlign: 'center', fontSize: 18, marginTop: 20 },
});
