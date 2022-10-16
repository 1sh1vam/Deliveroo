import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../store/reducers/restaurant';
import { styled } from 'nativewind';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

const StyledPressable = styled(Pressable);

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);


  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{restaurant.title}</Text>
          </View>

          <StyledPressable onPress={() => navigation.goBack()} className="active:opacity-50 absolute top-4 right-5">
            <XCircleIcon color="#00CCBB" width={50} height={50} />
          </StyledPressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen;