// toastConfig.js
import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

export const toastConfig = {
success: ({ text1, props, hide }) => (
  <View style={styles.toastContainer}>
    {/* Left Green Edge */}
    <View style={styles.leftBar} />

    {/* Content */}
    <View style={styles.contentContainer}>
      {/* Icon */}
      <Image 
        source={require('./assets/check-circle.png')}
        style={styles.icon}
      />

      {/* Text */}
      <Text style={styles.toastText}>{text1}</Text>

      {/* Close Button */}
      <Pressable onPress={hide}>
        <Text style={styles.closeText}>✕</Text>
      </Pressable>
    </View>
  </View>
),
};

const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: 'row',
    alignItems: 'stretch', // to match leftBar height
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 9999,
    overflow: 'hidden',
  },
  leftBar: {
    width: 5,
    backgroundColor: '#10B981', 
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  toastText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    // fontFamily: 'IBMPlexSans-Bold',
    color: '#333',
  },
  closeText: {
    fontSize: 18,
    color: '#888',
    paddingLeft: 12,
    paddingRight: 4,
  },
});
