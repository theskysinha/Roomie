import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import GlobalProvider from '../context/GlobalProvider'

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  //use rubik font
  const [loaded, error] = useFonts({
    'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
    'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
    'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
  })

  useEffect(() => {
    if(error) throw error;

    if(loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="(auth)" options={{headerShown: false}} />
      </Stack>
    </GlobalProvider>
  )
}

export default RootLayout
