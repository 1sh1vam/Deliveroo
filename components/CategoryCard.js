import { Image, Pressable, Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'

const StyledPressable = styled(Pressable);

const CategoryCard = ({ imgUri, title }) => {
    return (
        <StyledPressable className="mr-2 active:opacity-80 w-20">
            <Image
                className="w-20 h-20 rounded-full"
                source={{ uri: imgUri }}
            />
            <Text className="text-slate-600 text-center text-xs font-semibold">{title}</Text>
        </StyledPressable>
    )
}

export default CategoryCard;