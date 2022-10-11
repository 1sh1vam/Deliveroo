import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline';

const StyledPressable = styled(Pressable);

const RestaurantCard = ({
    id,
    title,
    imgUri,
    rating,
    genre,
    address,
    short_description,
    dishes,
    lat,
    lng,
}) => {
  return (
    <StyledPressable className="mr-3 bg-white shadow">
      <Image source={{ uri: imgUri }} className="w-64 h-36 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon size={22} color="green" opacity={0.5} />
            <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> . {genre}
            </Text>
        </View>

        <View className="flex-row items-center space-x-1">
            <MapPinIcon size={22} color="gray" opacity={0.4} />
            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </StyledPressable>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({})