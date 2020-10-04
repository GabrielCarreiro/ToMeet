import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes'

export default function App() {
  return (
    <SafeAreaProvider  style={{paddingTop:24}}>
        <StatusBar style="dark" backgroundColor="#f0f0f5"/>
        <NavigationContainer>
          <AppRoutes/>
        </NavigationContainer>
    </SafeAreaProvider>

  );
}
