// import React from 'react'; 
// import { View, Text, Image, Button, ScrollView } from 'react-native'
// import { useLocalSearchParams } from 'expo-router'
// import { useCart } from '../../contexts/CartContext'
// import { products } from '../../data/products'

// export default function ProductDetails() {
//   const { id } = useLocalSearchParams()
//   const { addToCart } = useCart()
//   const product = products.find(p => p.id === id)

//   return (
//     <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
//       <Image 
//         source={{ uri: product?.image }} 
//         style={{ width: '100%', height: 300, borderRadius: 10 }} 
//       />
//       <Text style={{ fontSize: 24, marginTop: 15 }}>{product?.name}</Text>
//       <Text style={{ fontSize: 20, color: '#2ecc71', marginVertical: 10 }}>
//         ${product?.price}
//       </Text>
//       <Text style={{ fontSize: 16, color: '#7f8c8d' }}>
//         {product?.description}
//       </Text>
//       <Button 
//         title="Add to Cart" 
//         onPress={() => product && addToCart(product)} 
//       />
//     </ScrollView>
//   )
// }

import { View, Text, ScrollView, Image, Pressable, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useCart } from '../../contexts/CartContext';
import Toast from 'react-native-toast-message';
import { products } from '../../data/products';
import { useState } from 'react';

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const { addToCart } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev);
  };


  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    Toast.show({
      type: 'success',
      text1: 'Item has been added to cart',
      // text2: `${product.name} has been added to your cart`,
      position: 'top',
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 200, // Adjust this value as needed
          props: {
      style: { 
      zIndex: 9999,      // 🆙 Higher than navbar
      elevation: 9999,   // 🆙 Android needs elevation too
      }
    }
    });
  };

  const bulletPoints = product.description
    .split('\n')
    .filter(line => line.trim() !== '' && !line.includes('About this item'));

  return (
    <View style={styles.container}>
      {/* Fixed Back Button */}
<View style={styles.backButtonContainer}>
  <Pressable 
    style={styles.backButton}
    onPress={() => router.back()}
  >
    <Image 
      source={require('../../assets/back-icon.png')} 
      style={styles.backIcon} 
    />
    <Text style={styles.backButtonText}>Go Back</Text>
  </Pressable>
</View>


      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* <Image 
          source={product.image} 
          style={styles.productImage}
        /> */}

        <View style={styles.imageWrapper}>
  <Image 
    source={product.image} 
    style={styles.productImage}
  />
<Pressable style={styles.heartIconContainer} onPress={toggleFavorite}>
  <Image 
    source={
      isFavorite 
        ? require('../../assets/heartcolored.png')
        : require('../../assets/heart.png')
    }
    style={styles.heartIcon}
  />
</Pressable>

</View>

        <View style={styles.detailsContainer}>
          <Text style={styles.productTitle}>{product.name} {product.details}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About this item</Text>
            {bulletPoints.map((point, index) => (
              <View key={index} style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{point}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Fixed Add to Cart Button */}
      <Pressable 
        style={styles.addToCartButton}
        onPress={handleAddToCart}
      >
        <Text style={styles.addToCartText}>Add to cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  productImage: {
    width: '90%',
    alignSelf: 'center',
    height: 300,
    // resizeMode: 'contain',
    // backgroundColor: '#f9f9f9',
    marginTop: 65,
    borderRadius: 10,
  },
  imageWrapper: {
  position: 'relative',
  width: '100%',
  alignSelf: 'center',
  // marginTop: 15,
  borderRadius: 10,
  overflow: 'hidden', // ensures the heart stays inside the image corner
},

heartIconContainer: {
  position: 'absolute',
  top: 85,
  right: 35,
  backgroundColor: 'white',
  padding: 6,
  borderRadius: 50,
  zIndex: 5,
  elevation: 5,
},

heartIcon: {
  width: 19,
  height: 19,
  resizeMode: 'contain',
},

  detailsContainer: {
    padding: 20
  },
  productTitle: {
    fontSize: 17,
    fontWeight: '400',
    marginBottom: 4,
    color: '#333',
    // paddingLeft: 10,
    fontFamily: 'IBMPlexSans-Regular',
  },
  price: {
    fontSize: 32.75,
    fontWeight: '500',
    color: '#333',
    marginBottom: 20,
    // paddingLeft: 10,
    fontFamily: 'IBMPlexSans-Bold',
  },
  section: {
    marginBottom: 24
  },
  sectionTitle: {
    fontSize: 14,
    // fontWeight: '600',
    marginBottom: 8,
    color: '#999999',
    // paddingLeft: 10,
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 10,
  },
  bullet: {
    marginRight: 8,
    color: '#999999'
  },
  bulletText: {
    fontSize: 14,
    color: '#999999',
    lineHeight: 20,
    flex: 1
  },
  // backButton: {
  //   position: 'absolute',
  //   top: 10,
  //   left: 16,
  //   zIndex: 10,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   padding: 8,
  //   // backgroundColor: 'rgba(255,255,255,0.9)',
  //   // borderRadius: 20,
  //   // elevation: 5,
  //   // shadowColor: '#000',
  //   // shadowOpacity: 0.2,
  //   // shadowOffset: { width: 0, height: 2 }
  // },
  backIcon: {
    width: 9,
    height: 9,
    resizeMode: 'contain'
  },

  backButtonContainer: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: 55, // You can use 15 or 20 if you're talking in dp, but 60 works visually for headers
  backgroundColor: '#ffffff',
  justifyContent: 'center',
  paddingHorizontal: 16,
  borderBottomWidth: 0.3,
  borderBottomColor: '#e8e8e8',
  zIndex: 1,
  // elevation: 4,
},

backButton: {
  flexDirection: 'row',
  alignItems: 'center',
},

// backIcon: {
//   width: 20,
//   height: 20,
//   resizeMode: 'contain'
// },

  backButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 12,
    fontFamily: 'IBMPlexSans-Bold',
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    backgroundColor: '#60B5FF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 }
  },
  addToCartText: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'IBMPlexSans-Bold',
  }
});
