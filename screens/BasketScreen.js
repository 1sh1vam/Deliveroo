import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'nativewind';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../store/reducers/restaurant';
import { removeFromBasket, selectBasketTotal, selecteBasketItems } from '../store/reducers/basket';
import { urlFor } from '../sanity';

const StyledPressable = styled(Pressable);

const BasketScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const basketTotal = useSelector(selectBasketTotal);
  const items = useSelector(selecteBasketItems);

  const groupedItems = useMemo(
    () =>
      items.reduce((results, item) => {
        (results[item.id] = results[item.id] || []).push(item);
        return results;
      }, {}),
    [items]
  );

  const removeItem = (id) => {
    dispatch(removeFromBasket({ id }));
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <StyledPressable
            onPress={() => navigation.goBack()}
            className="active:opacity-50 absolute top-4 right-5"
          >
            <XCircleIcon color="#00CCBB" width={50} height={50} />
          </StyledPressable>
        </View>

        <View className="flex-row space-x-4 items-center bg-white px-4 py-3 my-5">
          <Image
            source={{ uri: 'https://links.papareact.com/wru' }}
            className="w-7 h-7 p-4 bg-gray-300 rounded-full"
          />
          <Text className="flex-1">Deliver in 30-45 minutes</Text>
          <StyledPressable className="active:opacity-50">
            <Text className="text-[#00CCBB]">Change</Text>
          </StyledPressable>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItems).map(([itemId, items]) => (
            <View
              key={itemId}
              className="bg-white flex-row items-center space-x-3 px-5 py-2"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image source={{ uri: urlFor(items[0].image).url() }} className="h-12 w-12 rounded-full" />
              <Text className="flex-1">{items[0].name}</Text>
              <Text className="text-gray-600">₹{items[0].price}</Text>
              <StyledPressable onPress={() => removeItem(itemId)} className="active:opacity-50">
                <Text className="text-[#00CCBB] text-xs">Remove</Text>
              </StyledPressable>
            </View>
          ))}
        </ScrollView>

        <View className="bg-white p-5 mt-5 space-y-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">₹{basketTotal}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-400">Delivery Charges</Text>
            <Text className="text-gray-400">₹40</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">₹{basketTotal + 40}</Text>
          </View>

          <StyledPressable onPress={() => navigation.navigate('PreparingOrderScreen')} className="active:opacity-50 bg-[#00CCBB] p-4 rounded-lg">
            <Text className="text-white text-center text-lg font-bold">Place Order</Text>
          </StyledPressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
