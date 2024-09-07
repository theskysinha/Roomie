import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { Redirect, router } from 'expo-router';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
    const {loading, isLogged } = useGlobalContext();

    if (!loading && isLogged) {
        return <Redirect to="/find-roommate" />;
    }
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className="w-full justify-center h-full px-4">
                <Image
                    source={images.illustration}
                    className="w-full h-[300px] mt-10"
                    resizeMode='contain'
                />                
                <Image
                    source={images.logo}
                    className="w-[280px] h-[100px] ml-4 mt-5"
                    resizeMode='contain'
                />
                <Text className="text-xl text-white font-rubikregular ml-4">Find your roommate!</Text>

                <View className="relative mt-8 mb-11">
                    <CustomButton 
                        title="Login"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="bg-secondary"
                        textStyles="text-primary"
                    />

                    <CustomButton 
                        title="Sign Up"
                        handlePress={() => router.push('/sign-up')}
                        containerStyles="bg-primary border-2 border-secondary mt-4"
                        textStyles="text-secondary"
                    />
                </View>
            </View>
        </ScrollView>
        <StatusBar style="light"/>
    </SafeAreaView>
  );
}
