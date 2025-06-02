import React from 'react'; 
import { View, Text, Image, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        overflow: 'hidden',
        elevation: 3,
      }}>
        <Image
          source={{ uri: product.image }}
          style={{ width: '100%', height: 150 }}
        />
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 16 }}>{product.name}</Text>
          <Text style={{ fontSize: 14, color: '#2ecc71', marginTop: 5 }}>
            ${product.price}
          </Text>
        </View>
      </Pressable>
    </Link>
  )
}