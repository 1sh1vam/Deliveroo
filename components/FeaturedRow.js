import { Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity';

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] ->,
          type -> {
            name,
          }
        }
      }[0]
    `, { id }).then((data) => setRestaurants(data?.restaurants));
  }, []);

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
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.name}
            imgUri={restaurant.image}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            lat={restaurant.lat}
            lng={restaurant.lng}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow