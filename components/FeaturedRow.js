import { Text, View, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View className="px-4">
      <View className="mt-4 flex-row items-center justify-between">
        <Text className="font-bold text-xl">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={123}
          title="Yo! Sushi"
          imgUri="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japenese"
          address="123, Main St"
          short_description="This is a test description"
          dishes={[]}
          lat={20}
          lng={0}
        />
        <RestaurantCard
          id={123}
          title="Yo! Sushi"
          imgUri="https://links.papareact.com/gn7"
          rating={4.5}
          genre="Japenese"
          address="123, Main St"
          short_description="This is a test description"
          dishes={[]}
          lat={20}
          lng={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow