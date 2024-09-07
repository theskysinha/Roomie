import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Image } from 'react-native'
import {icons} from '../constants'

const FormField = ({title, value, leadingIcon, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setShowPassword] = useState(false);
    return (
        <View className={`space-y-2 ${otherStyles}`}>

        <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-gray-400 flex flex-row items-center">
            <Image source={leadingIcon} className="w-6 h-6" resizeMode="contain" />
            <TextInput
            className="flex-1 text-black font-psemibold text-base ml-2"
            value={value}
            placeholder={placeholder}
            placeholderTextColor= "#DFDFDF"
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password" && !showPassword}
            {...props}
            />

            {title === "Password" && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                source={!showPassword ? icons.eye : icons.eyeHide}
                className="w-6 h-6"
                resizeMode="contain"
                />
            </TouchableOpacity>
            )}
        </View>
        </View>
    )
}

export default FormField