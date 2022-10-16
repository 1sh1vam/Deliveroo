import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import { useSelector } from 'react-redux';
import {
  selectBasketTotal,
  selecteBasketItems,
} from '../store/reducers/basket';
import { useNavigation } from '@react-navigation/native';

const StyledPressable = styled(Pressable);

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selecteBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <StyledPressable onPress={() => navigation.navigate('Basket')} className="absolute bottom-10 w-full z-50 active:opacity-50">
      <View className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center">
        <Text className="text-white bg-[#01A296] text-lg font-extrabold px-2 py-1">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          ₹{basketTotal}
        </Text>
      </View>
    </StyledPressable>
  );
};

export default BasketIcon;

const styles = StyleSheet.create({});
