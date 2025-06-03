import React, { useCallback } from 'react'; 
import { Slot, useSegments } from "expo-router";
import { View } from "react-native";
import TabBar from "../components/TabBar";
import TopNavBar from '@/components/TopNavBar';
import { CartProvider } from "../contexts/CartContext";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { toastConfig } from '../toastConfig';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'IBMPlexMono-Regular': require('../assets/fonts/IBMPlexMono-Regular.ttf'),
    'IBMPlexMono-Bold': require('../assets/fonts/IBMPlexMono-Bold.ttf'),
    // 'IBMPlexSans_Condensed-Bold': require('../assets/fldonts/IBMPlexSans_Condensed-Bold.ttf'),
    'IBMPlexSans-Bold': require('../assets/fonts/IBMPlexSans-Bold.ttf'),
    'IBMPlexSans-Regular': require('../assets/fonts/IBMPlexSans-Regular.ttf'),
  });

  const segments = useSegments();
  const currentRoute = segments.join('/'); // e.g., "product/[id]"
// const hideTabBar = currentRoute === 'product/[id]';
  const hideTabBar = ['product/[id]', 'cart'].includes(currentRoute);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <SafeAreaProvider>
      <CartProvider>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <StatusBar style="dark" />
          <TopNavBar />
          {/* Screens render here */}
          <Slot />
          {/* <Toast /> */}
          <Toast config={toastConfig} />
          {/* TabBar always visible at bottom */}
          {/* <TabBar /> */}
          {!hideTabBar && <TabBar />}
        </View>
      </CartProvider>
    </SafeAreaProvider>
  );
}