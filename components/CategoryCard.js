import { Image, Pressable, Text } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'

const StyledPressable = styled(Pressable);

const CategoryCard = ({ imgUri, title }) => {
    return (
        <StyledPressable className="relative mr-2 active:opacity-80">
            <Image
                className="w-20 h-20"
                source={{ uri: imgUri }}
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </StyledPressable>
    )
}

export default CategoryCard;