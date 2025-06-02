// import React from 'react'; 
// import { FlatList, View } from 'react-native'
// import ProductCard from '../components/ProductCard'
// import { products } from '../data/products'

// export default function HomeScreen() {
//   return (
//     <FlatList
//       data={products}
//       renderItem={({ item }) => <ProductCard product={item} />}
//       keyExtractor={(item) => item.id}
//       contentContainerStyle={{ padding: 10 }}
//     />
//   )
// }

import { useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import { Link, router } from 'expo-router';
import { products } from '../data/products';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Search Bar with Icon - Now using TextInput */}
      <View style={styles.searchContainer}>
        <Image 
          source={require('../assets/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      
      {/* Category Header */}
      <Pressable style={styles.headerContainer}>
        <Image 
          source={require('../assets/back-icon.png')} 
          style={styles.backIcon} 
        />
        <Text style={styles.title}>Technology</Text>
      </Pressable>

      {/* Combined Scrollable Section */}
      <ScrollView>
        {/* Subcategory Text */}
        <Text style={styles.subCategory}>Smartphones, Laptops & {'\n'}Accessories</Text>
        
        {/* Product Grid - Now using filteredProducts */}
        <FlatList
          data={filteredProducts}
          numColumns={2}
          renderItem={({ item }) => (
            <Link href={`/product/${item.id}`} asChild>
              <Pressable style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDetails}>128GB | Teal</Text>
                <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
              </Pressable>
            </Link>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.productGrid}
          scrollEnabled={false}
          ListEmptyComponent={
            <Text style={styles.noResultsText}>No products found</Text>
          }
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginVertical: 16
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: '#888'
  },
    searchInput: {
    flex: 1,
    color: '#333',
    fontSize: 14,
    fontWeight: '400',
    padding: 0,
    margin: 0
  },
  searchText: {
    color: '#888',
    fontSize: 14,
    fontWeight: '400',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
    color: '#333',
    fontFamily: 'IBMPlexSans-Bold',
  },
  backIcon: {
    width: 9,
    height: 9,
    resizeMode: 'contain',
    marginRight: 15,
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: '#333'
  // },
  subCategory: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '600',
    marginBottom: 16,
    marginTop: 10,
    marginLeft: 5,
    lineHeight: 24,
    fontFamily: 'IBMPlexMono-Regular',
    // paddingRight: 30,
  },
  productGrid: {
    paddingBottom: 80
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 0,
  },
  productImage: {
    width: '105%',
    height: 140,
    // resizeMode: 'contain',
    marginBottom: 8,
    borderRadius: 8.62,
  },
  productName: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 0,
    color: '#333',
    fontFamily: 'IBMPlexSans-Regular',
  },
  productDetails: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
    marginBottom: 4,
    fontFamily: 'IBMPlexSans-Regular',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    fontFamily: 'IBMPlexSans-Bold',
  },
    noResultsText: {
    textAlign: 'center',
    marginTop: 90,
    fontSize: 16,
    color: '#666',
    width: '100%',
    fontFamily: 'IBMPlexMono-Regular',
  }
});



// import { useState } from 'react';
// import { View, Text, FlatList, Pressable, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
// import { Link, router } from 'expo-router';
// import { products } from '../data/products';

// export default function HomeScreen() {
  // const [searchQuery, setSearchQuery] = useState('');
  
  // // Filter products based on search query
  // const filteredProducts = products.filter(product =>
  //   product.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

//   return (
//     <View style={styles.container}>
//       {/* Search Bar with Icon - Now using TextInput */}
//       <View style={styles.searchContainer}>
//         <Image 
//           source={require('../assets/search.png')}
//           style={styles.searchIcon}
//         />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search..."
//           placeholderTextColor="#888"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//           autoCapitalize="none"
//           autoCorrect={false}
//         />
//       </View>
      
//       {/* Category Header */}
//       <Pressable style={styles.headerContainer}>
//         <Image 
//           source={require('../assets/back-icon.png')} 
//           style={styles.backIcon} 
//         />
//         <Text style={styles.title}>Technology</Text>
//       </Pressable>

//       {/* Combined Scrollable Section */}
//       <ScrollView>
//         {/* Subcategory Text */}
//         <Text style={styles.subCategory}>Smartphones, Laptops & {'\n'}Accessories</Text>
        
//         {/* Product Grid - Now using filteredProducts */}
//         <FlatList
//           data={filteredProducts}
//           numColumns={2}
//           renderItem={({ item }) => (
//             <Link href={`/product/${item.id}`} asChild>
//               <Pressable style={styles.productCard}>
//                 <Image source={item.image} style={styles.productImage} />
//                 <Text style={styles.productName}>{item.name}</Text>
//                 <Text style={styles.productDetails}>128GB | Teal</Text>
//                 <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
//               </Pressable>
//             </Link>
//           )}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.productGrid}
//           scrollEnabled={false}
//           ListEmptyComponent={
//             <Text style={styles.noResultsText}>No products found</Text>
//           }
//         />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 16
//   },
  // searchContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   borderRadius: 8,
  //   borderWidth: 1,
  //   borderColor: '#ddd',
  //   paddingVertical: 12,
  //   paddingHorizontal: 16,
  //   marginVertical: 16
  // },
  // searchIcon: {
  //   width: 16,
  //   height: 16,
  //   marginRight: 8,
  //   tintColor: '#888'
  // },
  // searchInput: {
  //   flex: 1,
  //   color: '#333',
  //   fontSize: 14,
  //   fontWeight: '400',
  //   padding: 0,
  //   margin: 0
  // },
//   headerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 16,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333'
//   },
//   backIcon: {
//     width: 9,
//     height: 9,
//     resizeMode: 'contain',
//     marginRight: 15,
//   },
//   subCategory: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 16,
//     fontFamily: 'IBMPlexMono-Regular',
//     lineHeight: 20,
//   },
//   productGrid: {
//     paddingBottom: 80
//   },
//   productCard: {
//     flex: 1,
//     margin: 8,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 12,
//   },
//   productImage: {
//     width: '100%',
//     height: 120,
//     resizeMode: 'contain',
//     marginBottom: 8
//   },
//   productName: {
//     fontSize: 14,
//     fontWeight: '400',
//     marginBottom: 0,
//     color: '#333'
//   },
//   productDetails: {
//     fontSize: 14,
//     fontWeight: '400',
//     color: '#333',
//     marginBottom: 4
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#333',
//   },
//   noResultsText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 16,
//     color: '#666',
//     width: '100%'
//   }
// });