import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { styled } from 'nativewind';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';

const StyledPressable = styled(Pressable);

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const { params: {
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
  } } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  }, [])

  return (
    <ScrollView>
        <View className="relative">
            <Image className="w-full h-56" source={{ uri: urlFor(imgUri).url() }} />
            <StyledPressable className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full active:opacity-50">
                <ArrowLeftIcon size={20} color="#00CCBB" />
            </StyledPressable>
        </View>
      <Text>RestaurantScreen</Text>
    </ScrollView>
  )
}

export default RestaurantScreen