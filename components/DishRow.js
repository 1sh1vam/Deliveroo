import { Image, Pressable, Text, View } from 'react-native';
import React, { useState } from 'react';
import { styled } from 'nativewind';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

const StyledPressable = styled(Pressable);

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
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
          <StyledPressable className="active:opacity-50">
            <MinusCircleIcon size={40} color="#00CCBB" />
          </StyledPressable>
          <Text>0</Text>
          <StyledPressable className="active:opacity-50">
            <PlusCircleIcon size={40} color="#00CCBB" />
          </StyledPressable>
        </View>
      )}
    </>
  );
};

export default DishRow;
