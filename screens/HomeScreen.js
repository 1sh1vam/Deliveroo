import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeatuedCategories] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "featured"] {
        ...,
        restaurants[] -> {
          ...,
          dishesh[] ->,
        }
      }
    `).then((data) => setFeatuedCategories(data));
  }, []);

  return (
    <SafeAreaView className="bg-white pt-10 flex-1">
      <View className="flex-row pb-3 items-center px-4 space-x-2">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="w-7 h-7 bg-gray-300 rounded-full p-4"
        />
        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
          <Text className="font-bold flex-row items-center text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="bg-gray-200 flex-row items-center space-x-2 flex-1 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput className="flex-1" placeholder='Restaurents and cuisines' />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 8 }} className="bg-gray-50">
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        {
          featuredCategories.map((category) => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

