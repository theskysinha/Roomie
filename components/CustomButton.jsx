import { TouchableOpacity, Text } from "react-native";
import { styled } from "nativewind";

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity 
            className={` p-4 rounded-xl min-h-[58px] w-full mt-7
                justify-center items-center ${containerStyles} 
                ${isLoading ? 'opacity-50' : ''}`} disabled={isLoading}
            onPress={handlePress}
            activeOpacity={0.7}

        >
        <Text className={`text-lg font-rubikregular ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;