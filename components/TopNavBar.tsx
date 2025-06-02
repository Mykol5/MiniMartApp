import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

export default function TopNavBar() {
  return (
    <View style={styles.container}>
      {/* Logo - Left aligned */}
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.logo}
      />
      
      {/* Delivery Address - Centered */}
      <View style={styles.addressContainer}>
        <Text style={styles.deliveryText}>DELIVERY ADDRESS</Text>
          <Text style={styles.addressText}>Unwearike Road, Oyo State</Text>
      </View>
      
      {/* Notification Icon - Right aligned */}
      <Pressable style={styles.notificationIcon}>
        <Image 
          source={require('../assets/notify.png')} 
          style={styles.iconImage}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    marginTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    // top: 50,
    zIndex: 1,
  },
  logo: {
    width: 50,
    height: 45,
    resizeMode: 'contain'
  },
  addressContainer: {
    alignItems: 'center'
  },
  deliveryText: {
    fontSize: 10,
    color: '#333',
    fontWeight: '500',
    marginBottom: 4,
    fontFamily: 'IBMPlexSans-Bold',
  },
  addressText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'IBMPlexSans-Bold',
  },
  notificationIcon: {
    padding: 8
  },
  iconImage: {
    width: 16.3,
    height: 17,
  }
});