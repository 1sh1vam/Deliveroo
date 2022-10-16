import { Image, Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import { styled } from 'nativewind';
import { useDispatch, useSelector } from 'react-redux';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../store/reducers/basket';

const StyledPressable = styled(Pressable);

const DishRow = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const [isPressed, setIsPressed] = useState(false);

  const basketItems = useSelector((state) => selectBasketItemsWithId(id, state));

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }))
  }

  const removeItemFromBasket = () => {
    if (basketItems.length <= 0) return;
    dispatch(removeFromBasket({ id }));
  }

  return (
    <>
      <StyledPressable
        onPress={() => setIsPressed((prev) => !prev)}
        className={`p-4 bg-white border-b border-gray-200 active:opacity-50 ${isPressed && 'border-b-0'}`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">₹{price}</Text>
          </View>
          <View>
            <Image
              className="w-20 h-20 bg-gray-300 p-4 border border-[#F3F3F4]"
              source={{ uri: urlFor(image).url() }}
            />
          </View>
        </View>
      </StyledPressable>
      {isPressed && (
        <View className="bg-white px-4 flex-row items-center space-x-2 pb-3">
          <StyledPressable onPress={removeItemFromBasket} className="active:opacity-50">
            <MinusCircleIcon size={40} color={basketItems.length > 0 ? "#00CCBB" : "gray"} />
          </StyledPressable>
          <Text>{basketItems.length}</Text>
          <StyledPressable onPress={addItemToBasket} className="active:opacity-50">
            <PlusCircleIcon size={40} color="#00CCBB" />
          </StyledPressable>
        </View>
      )}
    </>
  );
};

export default DishRow;
