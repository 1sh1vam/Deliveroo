import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { styled } from 'nativewind';
import { ChevronRightIcon } from 'react-native-heroicons/outline';
import { ArrowLeftIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';

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
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
            <Image className="w-full h-56" source={{ uri: urlFor(imgUri).url() }} />
            <StyledPressable onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full active:opacity-50">
                <ArrowLeftIcon size={20} color="#00CCBB" />
            </StyledPressable>
        </View>
        <View className="bg-white">
          <View className="px-4 py-4">
            <Text className="font-bold text-3xl">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={22} color="green" opacity={0.5} />
                <Text className="text-gray-500 text-xs">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <MapPinIcon size={22} color="gray" opacity={0.4} />
                <Text className="text-gray-500 text-xs">Nearby . {address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{short_description}</Text>
          </View>

          <StyledPressable className="flex-row items-center p-4 space-x-2 border-y border-gray-300">
            <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
            <Text className="flex-1 font-semibold pl-2">Have a food allergy?</Text>
            <ChevronRightIcon size={20} color="#00CCBB" />
          </StyledPressable>
        </View>

        <View className="pb-36">
          <Text className="font-bold text-xl px-4 pt-6 mb-3">Menu</Text>

          {/* Dish Arrows */}
          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  )
}

export default RestaurantScreen