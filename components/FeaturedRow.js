import { Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

const FeaturedRow = ({ id, title, description }) => {
  const [redtaurants, setRestaurants] = useState();

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "featured" && _id=="1e2ef26f-a40a-4fb2-bb18-45c931810acd"] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] -> {
            name,
          }
        }
      }
    `, { id }).then(setRestaurants(data?.restaurants));
  }, [])

  return (
    <View className="px-4">
      <View className="mt-4 flex-row items-center justify-between">
        <Text className="font-bold text-xl">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
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