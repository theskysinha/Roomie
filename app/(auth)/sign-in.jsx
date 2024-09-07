import { View, Text, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { icons } from '../../constants'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { signIn, getCurrentUser } from '../../lib/appwrite'
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
    const {setUser, setIsLogged} = useGlobalContext();
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const submit = async () => {
        if (form.email === "" || form.password === "") {
          Alert.alert("Error", "Please fill in all fields");
        }
    
        setSubmitting(true);
        
        try {
            await signIn(form.email, form.password);
            const result = await getCurrentUser();
            setUser(result);
            setIsLogged(true);
      
            Alert.alert("Success", "User signed in successfully");
            router.replace("/find-roommate");
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setSubmitting(false);
        }
    };


  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className="w-full h-full my-6 space-y-16">
                <View>
                    <Text className="text-5xl mt-11 ml-5 text-white font-rubikregular">Welcome</Text>
                    <Text className="text-5xl ml-5 text-white font-rubikregular">back!</Text>
                </View>

                <View className="bg-secondary rounded-t-3xl h-full px-4">
                    <FormField
                    leadingIcon={icons.mail}
                        title="Email"
                        placeholder={"Email"}
                        value={form.email}
                        handleChangeText={(text) => setForm({...form, email: text})}
                        otherStyles="mt-14"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        leadingIcon={icons.password}
                        placeholder={"Password"}
                        value={form.password}
                        handleChangeText={(text) => setForm({...form, password: text})}
                        otherStyles="mt-10 mb-10"
                    />

                    <CustomButton 
                        title="Login"
                        handlePress={() => submit()}
                        containerStyles="bg-primary mt-12"
                        textStyles="text-secondary"
                        isLoading={isSubmitting}
                    />

                    <Text className="text-gray-400 text-center text-lg mt-2">-----------------------or-------------------------</Text>

                    <CustomButton
                        title="Sign Up"
                        handlePress={() => router.push('/sign-up')}
                        containerStyles="bg-secondary mt-2 border-2 border-gray-400"
                        textStyles="text-primary"
                    />
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn