// import React from 'react'; 
// import { View, Text, FlatList, Button } from 'react-native'
// import { useCart } from '../contexts/CartContext'
// import CartItem from '../components/CartItem'

// export default function CartScreen() {
//   const { items, removeFromCart, updateQuantity } = useCart()

//   return (
//     <View style={{ flex: 1, padding: 20, paddingBottom: 100 }}>
//       {items.length === 0 ? (
//         <Text>Your cart is empty</Text>
//       ) : (
//         <>
//           <FlatList
//             data={items}
//             renderItem={({ item }) => (
//               <CartItem 
//                 item={item} 
//                 onRemove={() => removeFromCart(item.id)}
//                 onUpdateQuantity={(qty) => updateQuantity(item.id, qty)}
//               />
//             )}
//             keyExtractor={(item) => item.id}
//           />
//           <Text style={{ fontSize: 20, textAlign: 'right', marginTop: 20 }}>
//             Total: ${items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
//           </Text>
//         </>
//       )}
//     </View>
//   )
// }



import { View, Text, FlatList, StyleSheet, Pressable, Image } from 'react-native';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { router } from 'expo-router';

export default function CartScreen() {
  const { items, updateQuantity, removeFromCart } = useCart();
  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <View style={styles.container}>
      <Pressable style={styles.headerContainer} onPress={() => router.back()}>
        <Image 
          source={require('../assets/back-icon.png')} 
          style={styles.backIcon} 
        />
        <Text style={styles.title}>Your Cart</Text>
      </Pressable>

      {items.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={require('../assets/empty-cart.png')}
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>No products added</Text>
          <Text style={styles.emptySubText}>Your cart is empty</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <CartItem 
                item={item} 
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent}
          />
          
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryLabel1}>Order Info</Text>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Subtotal</Text>
              <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Shipping</Text>
              <Text style={styles.summaryValue}>${shipping.toFixed(2)}</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
            </View>
            
            <Pressable style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Checkout (${total.toFixed(2)})</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    borderBottomWidth: 0.3,
    borderBottomColor: '#e8e8e8',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 16,
    color: '#333'
  },
  backIcon: {
    width: 9,
    height: 9,
    resizeMode: 'contain',
    marginRight: 15,
  },
  listContent: {
    paddingBottom: 16,
    marginTop: 10
  },
  summaryContainer: {
    paddingVertical: 25,
    marginBottom: 60,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  summaryLabel: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
    fontFamily: 'IBMPlexSans-Bold',
  },
  summaryLabel1: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    marginBottom: 8,
    fontFamily: 'IBMPlexSans-Bold',
  },
  summaryValue: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'IBMPlexSans-Bold',
  },
  totalRow: {
    marginTop: 0,
    paddingTop: 0,
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'IBMPlexSans-Bold',
  },
  totalValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    fontFamily: 'IBMPlexSans-Bold',
  },
  checkoutButton: {
    backgroundColor: '#60B5FF',
    borderRadius: 8,
    padding: 12,
    marginTop: 16,
    alignItems: 'center'
  },
  checkoutText: {
    color: 'white',
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100
  },
  emptyImage: {
    width: 120,
    height: 120,
    marginBottom: 20
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    fontFamily: 'IBMPlexSans-Bold',
  },
  emptySubText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'IBMPlexSans-Regular',
  }
});