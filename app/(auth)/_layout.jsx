import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useGlobalContext } from '../../context/GlobalProvider'
import { Redirect } from 'expo-router'

const AuthLayout = () => {
    const { loading, isLogged } = useGlobalContext();

    if (!loading && isLogged) {
        return <Redirect to="/find-roommate" />;
    }

  return (
    <>
        <Stack>
            <Stack.Screen name="sign-in" options={{headerShown: false}} />
            <Stack.Screen name="sign-up" options={{headerShown: false}} />
        </Stack>

        <StatusBar style= "light" />
    </>
  )
}

export default AuthLayout
