import React from 'react'; 
import { View, Pressable, Text, Image } from 'react-native'
import { Link, usePathname } from 'expo-router'
import { useCart } from '../contexts/CartContext'

export default function TabBar() {
  const { items } = useCart()
  const pathname = usePathname()

  const tabs: { 
    name: string; 
    icon: any; 
    href: '/' | '/cart' | '/favourites' | '/profile'; 
    badge?: number 
  }[] = [
    { name: 'Home', icon: require('../assets/home.png'), href: '/' },
    { name: 'Cart', icon: require('../assets/cart.png'), href: '/cart', badge: items.length },
    { name: 'Favorites', icon: require('../assets/heart.png'), href: '/favourites' },
    { name: 'Profile', icon: require('../assets/user.png'), href: '/profile' },
  ]

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 15,
      marginVertical: 30,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#ecf0f1',
    }}>
      {/* Tab buttons */}
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link href={tab.href} key={tab.name} asChild>
            <Pressable style={{ 
              alignItems: 'center',
              paddingHorizontal: 10,
              width: '25%',
            }}>
              {/* Underlay View - Only shown when active */}
              {isActive && (
                <View style={{
                  position: 'absolute',
                  width: 52,
                  height: 35,
                  borderRadius: 20,
                  backgroundColor: '#60B5FF', 
                  top: -10, 
                }} />
              )}
              
              <Image 
                source={tab.icon} 
                style={{ 
                  width: 19.5, 
                  height: 21,
                  tintColor: isActive ? 'white' : '#000', 
                  marginBottom: 4,
                  zIndex: 1,
                }} 
              />
              <Text style={{ 
                fontSize: 12.5, 
                fontFamily: 'IBMPlexSans-Regular',
                marginTop: 4,
                color: isActive ? '#60B5FF' : '#000' 
              }}>
                {tab.name}
              </Text>
              
              {(tab.badge ?? 0) > 0 && (
                <View style={{
                  position: 'absolute',
                  top: -3,
                  right: '39%',
                  backgroundColor: isActive ? '#000' : '#000',
                  borderRadius: 10,
                  width: 17,
                  height: 17,
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 2, // Ensure badge appears above everything
                }}>
                  <Text style={{ color: 'white', fontSize: 10.22 }}>{tab.badge}</Text>
                </View>
              )}
            </Pressable>
          </Link>
        );
      })}
    </View>
  );
}






// import
// React from 'react'; 
// import { View, Pressable, Text, Image } from 'react-native'
// import { Link } from 'expo-router'
// import { useCart } from '../contexts/CartContext'

// export default function TabBar() {
//   const { items } = useCart()

//   const tabs: { name: string; icon: any; href: '/' | '/cart' | '/profile' | '/favourites'; badge?: number }[] = [
//     { name: 'Home', icon: require('../assets/home.png'), href: '/' },
//     { name: 'Favorites', icon: require('../assets/heart.png'), href: '/favourites' },
//     { name: 'Cart', icon: require('../assets/cart.png'), href: '/cart', badge: items.length },
//     { name: 'Profile', icon: require('../assets/user.png'), href: '/profile' },
//   ]

//   return (
    // <View style={{
    //   flexDirection: 'row',
    //   justifyContent: 'space-around',
    //   paddingVertical: 15,
    //   marginVertical: 30,
    //   backgroundColor: '#fff',
    //   borderTopWidth: 1,
    //   borderTopColor: '#ecf0f1',
    // }}>
//       {tabs.map((tab) => (
//         <Link href={tab.href} key={tab.name} asChild>
//           <Pressable style={{ alignItems: 'center', paddingHorizontal: 10 }}>
//             <Image source={tab.icon} style={{ width: 19.5, height: 21 }} />
//             <Text style={{ fontSize: 12.5, marginTop: 4 }}>{tab.name}</Text>
//             {(tab.badge ?? 0) > 0 && (
//               <View style={{
//                 position: 'absolute',
//                 top: -3,
//                 right: 2,
//                 backgroundColor: 'black',
//                 borderRadius: 10,
//                 width: 17,
//                 height: 17,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}>
//                 <Text style={{ color: 'white', fontSize: 10.22 }}>{tab.badge}</Text>
//               </View>
//             )}
//           </Pressable>
//         </Link>
//       ))}
//     </View>
//   )
// }




