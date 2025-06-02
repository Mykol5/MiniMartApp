// import React from 'react'; 
// import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
// import { CartItem as CartItemType } from '../contexts/CartContext'

// type CartItemProps = {
//   item: CartItemType
//   onRemove: () => void
//   onUpdateQuantity: (quantity: number) => void
// }

// export default function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps) {
//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.details}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.price}>${item.price.toFixed(2)}</Text>
//         <View style={styles.quantityContainer}>
//           <Pressable 
//             style={styles.quantityButton}
//             onPress={() => onUpdateQuantity(item.quantity - 1)}
//           >
//             <Text style={styles.quantityText}>-</Text>
//           </Pressable>
//           <Text style={styles.quantity}>{item.quantity}</Text>
//           <Pressable 
//             style={styles.quantityButton}
//             onPress={() => onUpdateQuantity(item.quantity + 1)}
//           >
//             <Text style={styles.quantityText}>+</Text>
//           </Pressable>
//         </View>
//       </View>
//       <Pressable style={styles.removeButton} onPress={onRemove}>
//         <Text style={styles.removeText}>×</Text>
//       </Pressable>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 4,
//   },
//   details: {
//     flex: 1,
//     marginLeft: 10,
//     justifyContent: 'center',
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   price: {
//     fontSize: 14,
//     color: '#888',
//     marginTop: 4,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   quantityButton: {
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     borderRadius: 15,
//   },
//   quantityText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   quantity: {
//     marginHorizontal: 10,
//     fontSize: 16,
//   },
//   removeButton: {
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   removeText: {
//     fontSize: 24,
//     color: '#ff4444',
//   },
// })




import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

type CartItemProps = {
  item: {
    id: string | number;
    name: string;
    details?: string;
    image: string | number;
    price: number;
    quantity: number;
  };
  updateQuantity: (id: string | number, quantity: number) => void;
  removeFromCart: (id: string | number) => void;
};

export default function CartItem({ item, updateQuantity, removeFromCart }: CartItemProps) {
  return (
    <View style={styles.container}>
      <Image 
        source={typeof item.image === 'number' ? item.image : { uri: item.image }} 
        style={styles.productImage}
      />
      
      <View style={styles.detailsContainer}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>{item.details}</Text>
        </View>
        
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <Text style={styles.stock}>In stock</Text>
        
        <View style={styles.quantityControls}>
          {/* Decrement Button */}
          <Pressable 
            onPress={() => updateQuantity(item.id, item.quantity - 1)}
            style={({ pressed }) => [
              styles.quantityButton1,
              pressed && styles.buttonPressed
            ]}
          >
            <Image 
              source={require('../assets/subtract.png')} 
              style={styles.iconImage}
            />
          </Pressable>
          
          {/* Quantity Display */}
          <Text style={styles.quantityText}>{item.quantity}</Text>
          
          {/* Increment Button */}
          <Pressable 
            onPress={() => updateQuantity(item.id, item.quantity + 1)}
            style={({ pressed }) => [
              styles.quantityButton,
              pressed && styles.buttonPressed
            ]}
          >
            <Image 
              source={require('../assets/add.png')} 
              style={styles.iconImage}
            />
          </Pressable>
          
          {/* Delete Button */}
          <Pressable 
            onPress={() => removeFromCart(item.id)}
            style={({ pressed }) => [
              styles.deleteButton,
              pressed && styles.buttonPressed
            ]}
          >
            <Image 
              source={require('../assets/delete.png')} 
              style={styles.deleteIcon}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    marginBottom: 8,
    backgroundColor: '#F6F5F8',
    borderRadius: 8
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 16
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  name: {
    fontSize: 12,
    fontWeight: '400',
    color: '#333',
    marginRight: 3,
    fontFamily: 'IBMPlexSans-Regular',
  },
  details: {
    fontSize: 12,
    color: '#333',
    fontFamily: 'IBMPlexSans-Regular',
  },
  price: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4
  },
  stock: {
    fontSize: 12,
    color: '#34C759',
    marginBottom: 12
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  quantityButton1: {
    width: 30,
    height: 30,
    borderRadius: 16,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  deleteButton: {
    width: 30,
    height: 30,
    borderRadius: 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  buttonPressed: {
    backgroundColor: '#E5E5EA'
  },
  quantityText: {
    marginHorizontal: 12,
    fontSize: 14,
    fontWeight: '500',
    minWidth: 20,
    textAlign: 'center'
  },
  iconImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain'
  },
  deleteIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain'
  }
});