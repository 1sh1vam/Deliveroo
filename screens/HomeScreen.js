import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center px-4 space-x-2">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="w-7 h-7 bg-gray-300 rounded-full p-4"
        />
        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="bg-gray-200 flex-row space-x-2 flex-1 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput placeholder='Restaurents and cuisines' />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Content */}
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow id="123" title="Featured" description="Paid placements from our partners" />
        <FeaturedRow id="1234" title="Tasty Discounts" description="Everyone is loving these discounts!" />
        <FeaturedRow id="12345" title="Offers near you!" description="Why don't try local restaurents tonight!" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

